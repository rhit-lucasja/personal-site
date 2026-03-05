import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import { getEliminatedTeams, calculateScores } from '../../utils/bracketStructure';

const LeaderboardTable = ({ title, participants, sortKey }) => {
    // make a copy of the array, then sort in-place by given metric
    const sorted = [...participants].sort((a, b) => b[sortKey] - a[sortKey]);

    return (
        <div className="border border-gray-400 rounded-xl overflow-hidden flex-1">
            {/* leaderboard header */}
            <div className="px-4 py-2 bg-red-900 border-b border-gray-400">
                <h2 className="text-lg text-center font-bold text-white">
                    {title}
                </h2>
            </div>

            <table className="w-full">
                {/* rankings */}
                <tbody className="divide-y divide-gray-300">
                    {sorted.map((p, index) => {
                        // determine rank of the place, also if tied with above
                        const isTied = (index > 0) && (sorted[index - 1][sortKey] === p[sortKey]);
                        const rank = isTied ? '-' : index + 1;

                        return (
                            <tr key={p.id} className="hover:bg-gray-100">
                                <td className="px-2 py-2 text-sm text-right font-bold text-gray-600 border-r border-gray-400 w-px whitespace-nowrap">{rank}</td>
                                <td className="px-2 py-2 text-sm text-left text-black">{p.name}</td>
                                <td className="px-2 py-2 text-sm text-right text-black w-px whitespace-nowrap">{p[sortKey]}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

const Leaderboard = () => {
    // track current games, participants, and loading states
    const [games, setGames] = useState({});
    const [participants, setParticipants] = useState({});
    const [loading, setLoading] = useState(true);

    // listener upon bracket game or pick updates
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

    // upon page buffer
    if (loading) return <div className="text-center mt-16 text-black">
        Loading leaderboard...
    </div>

    // determine eliminated teams upon page reload
    const eliminated = getEliminatedTeams(games);

    // calculate and record each participant's current and possible totals
    const scored = Object.values(participants).map(p => {
        const { current, possible } = calculateScores(p.picks, games, eliminated);
        return { ...p, current, possible };
    });

    // actually render leaderboard tables
    return (
        <div className="min-w-lg max-w-2xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row lg:flex-row gap-6">
                <LeaderboardTable title="Current Standings" participants={scored} sortKey="current" />
                <LeaderboardTable title="Possible Totals" participants={scored} sortKey="possible" />
            </div>
        </div>
    );
};

export default Leaderboard;