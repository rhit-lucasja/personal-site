import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { getNextGame, getNextPosition } from '../../utils/bracketStructure';

const BracketGameUpdate = ({ game }) => {
    
    // if game is null return blank box
    if (!game) {
        return <div className="min-w-0 w-full overflow-hidden border border-gray-200 rounded-lg" />;
    }

    // else parse relevant game fields and flag
    const { id, team1, team2, winner } = game;
    const bothKnown = team1 && team2;

    // handle interaction with a team name
    const handleClick = async (team) => {
        // if null matchup then interaction disabled
        if (!bothKnown) return;

        // else get next game ID and whether this winner is team1 or team2 of next
        const nextID = getNextGame(id);
        const nextPos = getNextPosition(id);

        // clicked on current winner
        if (winner === team) {
            // clear winner of current game
            await updateDoc(doc(db, 'bracket', id), { winner: null });
            // clear team from next game matchup
            if (nextID) {
                await updateDoc(doc(db, 'bracket', nextID), {
                    [nextPos]: null, // team1 or team2
                    winner: null
                });
            }
            return;
        }

        // clicked on a new winner - set winner of game
        await updateDoc(doc(db, 'bracket', id), { winner: team });
        // send winner to next game's matchup
        if (nextID) {
            await updateDoc(doc(db, 'bracket', nextID), {
                [nextPos]: team,
                winner: null
            });
        }
    };

    // determine team name display based on game status
    const getTeamStyle = (team) => {
        if (!bothKnown) return 'bg-gray-100 text-gray-400';
        if (!winner) return 'text-black cursor-pointer hover:bg-green-200';
        if (winner === team) return 'bg-green-400 text-black cursor-pointer hover:bg-green-200';
        return 'text-gray-500 cursor-pointer hover:bg-green-200';
    };

    // actually render game card
    return (
        <div className="min-w-0 w-full overflow-hidden border border-gray-200 rounded-lg p-2 space-y-1">
            <div title={team1} onClick={() => handleClick(team1)} className={`text-sm px-2 py-1 rounded truncate transition-colors ${getTeamStyle(team1)}`}>
                {team1 || <span className="text-gray-400">TBD</span>}
            </div>
            <div title={team2} onClick={() => handleClick(team2)} className={`text-sm px-2 py-1 rounded truncate transition-colors ${getTeamStyle(team2)}`}>
                {team2 || <span className="text-gray-400">TBD</span>}
            </div>
        </div>
    );
};

export default BracketGameUpdate;