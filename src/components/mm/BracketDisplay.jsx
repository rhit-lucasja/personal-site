import BracketRegion from './BracketRegion';

// define Firebase tags for each bracket quadrant and their associated labels and display order
const region_tags = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
const region_labels = {
    'top-left': 'Top Left',
    'top-right': 'Top Right',
    'bottom-right': 'Bottom Right',
    'bottom-left': 'Bottom Left'
};
const region_order = {
    'top-left': 'order-1 lg:order-1',
    'top-right': 'order-3 lg:order-2',
    'bottom-left': 'order-2 lg:order-3',
    'bottom-right': 'order-4 lg:order-4'
};

const BracketDisplay = ({ games, renderGame }) => {
    // util to get games in a particular region
    const getRegionGames = (region) =>
        Object.values(games).filter(g => g.region === region);

    return (
        <div className="space-y-8">
            {/* show each of the four regions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {region_tags.map(region => (
                    <BracketRegion key={region} label={region_labels[region]} games={getRegionGames(region)} order={region_order[region]} mirrored={region.endsWith('right')} renderGame={renderGame} />
                ))}
            </div>

            {/* final four and championship */}
            <div className="border border-gray-200 rounded-xl p-4 space-y-4">
                <h2 className="text-lg font-bold text-black text-center">Final Four</h2>
                <div className="max-w-128 mx-auto flex gap-4 justify-center items-center">
                    {renderGame(games['game61'])}
                    <div className="text-gray-400 font-bold">VS</div>
                    {renderGame(games['game62'])}
                </div>
                <div className="flex justify-center">
                    <div className="w-48 space-y-4">
                        <h2 className="text-lg font-bold text-black text-center">
                            Championship
                        </h2>
                        {renderGame(games['game63'])}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BracketDisplay;