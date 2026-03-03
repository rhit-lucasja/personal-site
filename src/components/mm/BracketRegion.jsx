const rounds = [1, 2, 3, 4];

const BracketRegion = ({ label, games, order, mirrored, renderGame }) => {
    // group games by round
    const byRound = rounds.reduce((acc, round) => {
        acc[round] = games.filter(g => g.round === round);
        return acc;
    }, {});

    // render all the games in this region
    return (
        <div className={`border border-gray-200 rounded-xl p-4 space-y-4 ${order}`}>
            {/* displays the region label above the region block */}
            <h2 className={`text-lg font-bold text-black ${mirrored ? 'text-right' : 'text-left'}`}>{label}</h2>
            <div className={`flex ${mirrored ? 'flex-row-reverse' : ''} gap-4`}>
                {rounds.map(round => (
                    <div className="flex flex-col justify-between gap-2 flex-1 min-w-0">
                        {/* displays the round label above each */}
                        <p className="text-xs text-gray-400 text-center">
                            {round === 1 ? 'Round of 64' : round === 2 ? 'Round of 32' : round === 3 ? 'Sweet 16' : 'Elite 8'}
                        </p>

                        {/* displays game cards for this round & region */}
                        <div key={round} className="flex flex-col justify-around gap-2 flex-1">
                            {byRound[round].map(game => renderGame(game))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BracketRegion;