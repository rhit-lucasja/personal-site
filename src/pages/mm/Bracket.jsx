import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import BracketRegion from '../../components/mm/BracketRegion';
import BracketGame from '../../components/mm/BracketGame';

// define Firebase region tags and their bracket labels, and the order they appear
const region_tags = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
const region_labels = {
    'top-left': 'Top Left',
    'top-right': 'Top Right',
    'bottom-right': 'Bottom Right',
    'bottom-left': 'Bottom Left'
}
const region_order = {
    'top-left': 'order-1 lg:order-1',
    'top-right': 'order-3 lg:order-2',
    'bottom-left': 'order-2 lg:order-3',
    'bottom-right': 'order-4 lg:order-4'
}

const Bracket = () => {

    // get states for the set of games and page loading status
    const [games, setGames] = useState({})
    const [loading, setLoading] = useState(true);

    // set up listener, so games update whenever Firebase undergoes changes
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'bracket'), (snapshot) => {
            const data = {};
            snapshot.forEach(doc => {
                data[doc.id] = { id: doc.id, ...doc.data() };
            });
            setGames(data);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    // loading buffer screen
    if (loading) return <div className="text-center mt-16 text-black">
        Loading bracket...
    </div>

    // function to filter games by a particular region
    const getRegionGames = (region) =>
        Object.values(games).filter(g => g.region === region);

    // the last three games that are weird
    const finalFourLeft = games['game61'];
    const finalFourRight = games['game62'];
    const championship = games['game63'];

    return (
        <div className="px-4 py-8 space-y-8">
            {/* display regions, 2 on each side for desktop, stacked on mobile */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {region_tags.map(region => (
                    <BracketRegion key={region} label={region_labels[region]} games={getRegionGames(region)} order={region_order[region]} />
                ))}
            </div>

            {/* final four and championship */}
            <div className="border border-gray-200 rounded-xl p-4 space-y-4">
                <h2 className="text-lg font-bold text-black">
                    Final Four & Championship
                </h2>
                <div className="flex gap-4 justify-center items-center">
                    <BracketGame game={finalFourLeft} />
                    <div className="text-gray-400 font-bold">VS</div>
                    <BracketGame game={finalFourRight} />
                </div>
                <div className="flex justify-center">
                    <div className="w-48">
                        <p className="text-xs text-gray-400 text-center mb-2">
                            Championship
                        </p>
                        <BracketGame game={championship} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bracket;