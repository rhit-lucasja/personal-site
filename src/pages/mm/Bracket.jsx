import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import BracketDisplay from '../../components/mm/BracketDisplay';
import BracketGame from '../../components/mm/BracketGame';

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

    return (
        <div className="px-4 py-8">
            <BracketDisplay games={games} renderGame={(game) => <BracketGame key={game.id} game={game} />} />
        </div>
    );
};

export default Bracket;