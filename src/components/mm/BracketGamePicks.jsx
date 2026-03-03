import { getMatchup, getSubsequentGames } from '../../utils/bracketStructure';

const BracketGamePicks = ({ game, picks, onPickChange, bracketGames }) => {

    // if game is null return blank box
    if (!game) {
        return <div className="min-w-0 w-full overflow-hidden border border-gray-200 rounded-lg" />;
    }

    // else parse relevant game fields
    const { id, round } = game;
    // get the matchup for this game slot
    const [team1, team2] = (round === 1 ? [game.team1, game.team2] : getMatchup(picks, id, bracketGames));
    
    // flags for the current game's matchup
    const bothKnown = team1 && team2;
    const currentPick = picks[id] || null;

    // handle interaction with a team name
    const handleClick = (team) => {
        if (!bothKnown) return; // matchup not decided, so can't choose winner
        if (currentPick === team) return; // team already selected, no changes
        onPickChange(id, team); // register pick "team" for game corresponding to 'id'
    };

    // determines team name display based on pick status
    const getTeamStyle = (team) => {
        if (!bothKnown) return 'bg-gray-100 text-gray-400';
        if (!currentPick) return 'text-black cursor-pointer hover:bg-green-200';
        if (currentPick === team) return 'bg-green-400 text-black cursor-pointer hover:bg-green-200';
        return 'text-gray-500 cursor-pointer hover:bg-green-200';
    };

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

export default BracketGamePicks;