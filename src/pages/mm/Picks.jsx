import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import { getEliminatedTeams, getPickStatus } from '../../utils/bracketStructure';

const rounds = [
    { round: 1, label: "Round of 64" },
    { round: 2, label: "Round of 32" },
    { round: 3, label: "Sweet 16" },
    { round: 4, label: "Elite 8" },
    { round: 5, label: "Final Four" },
    { round: 6, label: "Championship" }
];

// determines the earliest round with yet undecided games
const getActiveRound= (games) => {
    for (const { round } of rounds) {
        const roundGames = Object.values(games).filter(g => g.round === round);
        if (roundGames.some(g => !g.winner)) return round;
    }
    return 6; // else championship was most recent
};

// displays a person's pick with correct styling based on game result
const PickCell = ({ pick, winner, eliminated }) => {
    // get pick status given game result
    const status = getPickStatus(pick, winner, eliminated);
    const styles = {
        correct: 'bg-green-100 text-black',
        incorrect: 'bg-red-100 text-black',
        pending: 'bg-gray-100 text-gray-300'
    };

    return (
        <td className="px-1 py-1 text-center text-sm">
            <span className={`px-2 py-1 rounded truncate block ${styles[status]}`}>
                {pick || '-'}
            </span>
        </td>
    );
};

// collapsible accordion to view a specific round of picks
const RoundAccordion = ({ round, label, games, participants, defaultOpen, eliminated }) => {
    // whether the accordion view is open or collapsed
    const [isOpen, setIsOpen] = useState(defaultOpen);

    // get games in the particular round, sorted by ID
    const roundGames = Object.values(games).filter(g => g.round === round).sort((a, b) => a.id.localeCompare(b.id));
    // get list of participants
    const participantList = Object.values(participants);

    return (
        <div className="border border-gray-200 rounded-xl overflow-hidden">
            {/* accordion section header */}
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center px-6 py-4 bg-white cursor-pointer hover:bg-gray-50 transition-colors">
                <h2 className="text-lg font-bold text-black">
                    {label}
                </h2>
                <span className="text-gray-400 text-xl">
                    {isOpen? 'Collapse' : 'Expand'}
                </span>
            </button>

            {/* accordion section content*/}
            {isOpen && (
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        {/* header row of table */}
                        <thead className="bg-gray-50 border-t border-gray-200">
                            <tr>
                                <th className="px-3 py-2 text-center text-gray-500 font-bold">Game</th>
                                <th className="px-3 py-2 text-center text-gray-500 font-bold">Result</th>
                                {participantList.map(p => (
                                    <th key={p.id} className="px-3 py-2 text-center text-gray-500 font-bold whitespace-nowrap">
                                        {p.name}
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        {/* table rows */}
                        <tbody className="divide-y divide-gray-100">
                            {roundGames.map(game => {
                                const team1 = game.team1 || "TBD";
                                const team2 = game.team2 || "TBD";
                                return (
                                    <tr key={game.id} className="hover:bg-gray-50">
                                        {/* game matchup */}
                                        <td className="px-2 py-1 text-center text-gray-700 whitespace-nowrap">
                                            {team1} vs {team2}
                                        </td>

                                        {/* game result */}
                                        <td className="px-2 py-1 text-center">
                                            <span className="text-black font-bold text-sm">
                                                {game.winner || '-'}
                                            </span>
                                        </td>

                                        {/* participant picks */}
                                        {participantList.map(p => (
                                            <PickCell key={p.id} pick={p.picks?.[game.id]} winner={game.winner} eliminated={eliminated} />
                                        ))}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

const Picks = () => {
    // track state of games, participants, and page loading
    const [games, setGames] = useState({});
    const [participants, setParticipants] = useState({});
    const [loading, setLoading] = useState(true);

    // listeners to update on bracket or picks change
    useEffect(() => {
        const unsubGames = onSnapshot(collection(db, 'bracket'), snapshot => {
            const data = {};
            snapshot.forEach(doc => {
                data[doc.id] = { id: doc.id, ...doc.data() };
            });
            setGames(data);
        });

        const unsubParticipants = onSnapshot(collection(db, 'participants'), snapshot => {
            const data = {};
            snapshot.forEach(doc => {
                data[doc.id] = { id: doc.id, ...doc.data() };
            });
            setParticipants(data);
            setLoading(false);
        });

        return () => {
            unsubGames();
            unsubParticipants();
        };

    }, []);

    // loading buffer
    if (loading) return <div className="text-center mt-16 text-black">
        Loading picks...
    </div>

    // get active round number
    const activeRound = getActiveRound(games);

    // read in all the currently eliminated team names
    const eliminated = getEliminatedTeams(games);

    return (
        <div className="px-4 py-8">
            {rounds.map(({ round, label }) => (
                <RoundAccordion key={round} round={round} label={label} games={games} participants={participants} defaultOpen={round === activeRound} eliminated={eliminated} />
            ))}
        </div>
    );
};

export default Picks;