

const BracketGame = ({ game }) => {

    // if game is null return blank box
    if (!game) {
        return <div className="h-16 border border-gray-200 rounded-lg" />;
    }

    // else parse the different fields from the game
    const { team1, team2, winner } = game;

    return (
        <div className="min-w-0 w-full overflow-hidden border border-gray-200 rounded-lg p-2 space-y-1">
            <div title={team1} className={`text-sm px-2 py-1 rounded truncate ${!winner ? (team1 ? 'text-black' : 'bg-gray-100') : winner === team1 ? 'bg-green-400 text-black' : 'text-gray-500'}`}>
                {team1 || <span className="text-gray-400">TBD</span>}
            </div>
            <div title={team2} className={`text-sm px-2 py-1 rounded truncate ${!winner ? (team2 ? 'text-black' : 'bg-gray-100') : winner === team2 ? 'bg-green-400 text-black' : 'text-gray-500'}`}>
                {team2 || <span className="text-gray-400">TBD</span>}
            </div>
        </div>
    );
};

export default BracketGame;