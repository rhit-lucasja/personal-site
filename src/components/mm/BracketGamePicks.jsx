import { getPickOptions } from '../../utils/bracketStructure';

const BracketGamePicks = ({ game, picks, onPickChange }) => {

    // if game is null return blank box
    if (!game) {
        return <div className="min-w-0 w-full overflow-hidden border border-gray-200 rounded-lg" />;
    }

    // else parse relevant game fields
    const { id, team1, team2, round } = game;

    // round 1 games are fixed
    if (round === 1) {
        return (
            <div className="min-w-0 w-full border border-gray-200 rounded-lg p-2 space-y-1">
                <div title={team1} className="text-sm px-2 py-1 rounded truncate text-black">
                    {team1 || <span className="text-gray-400">TBD</span>}
                </div>
                <div title={team2} className="text-sm px-2 py-1 rounded truncate text-black">
                    {team2 || <span className="text-gray-400">TBD</span>}
                </div>
            </div>
        );
    }

    // else get pick options for later games and spawn dropdown
    const [op1, op2] = getPickOptions(picks, id);
    const hasOptions = op1 && op2;
    const currentPick = picks[id] || "";

    return (
        <div className="min-w-0 w-full overflow-hidden border border-gray-200 rounded-lg p-2 space-y-1">
            <select value={currentPick} disabled={!hasOptions} onChange={(e) => onPickChange(id, e.target.value)} className="w-full text-sm text-gray-500 border-node outline-none bg-transparent cursor-pointer disabled:text-gray-300 disabled:cursor-not-allowed">
                <option value="">
                    {hasOptions ? 'Select winner' : '-'}
                </option>
                {hasOptions && <option value={option1}>{option1}</option>}
                {hasOptions && <option value={option2}>{option2}</option>}
            </select>
        </div>
    );
};

export default BracketGamePicks;