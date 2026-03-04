import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import BracketDisplay from './BracketDisplay';
import BracketGameUpdate from './BracketGameUpdate';

const BracketUpdate = () => {
    // track games from Firestore and loading status
    const [games, setGames] = useState({});
    const [loading, setLoading] = useState(true);

    // set listener to change games status upon Firestore update
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'bracket'), snapshot => {
            const data = {};
            snapshot.forEach(doc => {
                data[doc.id] = { id: doc.id, ...doc.data() };
            });
            setGames(data);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    // loading buffer
    if (loading) return <div className="text-center mt-16 text-black">
        Loading bracket...
    </div>

    // display bracket with interactive updates
    return (
        <div className="space-y-6">
            <p className="text-lg text-gray-500 text-center">
                Click on a team to update the bracket.
            </p>
            <BracketDisplay games={games} renderGame={(game) => (<BracketGameUpdate key={game.id} game={game} />)} />
        </div>
    );
};

export default BracketUpdate;