import { useState, useEffect } from 'react';
import { collection, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import BracketGamePicks from '../mm/BracketGamePicks';
import BracketDisplay from '../mm/BracketDisplay';
import { getSubsequentGames } from '../../utils/bracketStructure';

const PicksForm = () => {
    // states to track changes in form
    const [participants, setParticipants] = useState({});
    const [selectedParticipant, setSelectedParticipant] = useState(null);
    const [games, setGames] = useState({});
    const [picks, setPicks] = useState({});
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    // fetch participants and games from Firebase
    useEffect(() => {
        // retrieves participant documents
        const unsubParticipants = onSnapshot(collection(db, 'participants'), snapshot => {
            const data = {};
            snapshot.forEach(doc => {
                data[doc.id] = { id: doc.id, ...doc.data() };
            });
            setParticipants(data);
        });
        // retrieves game documents
        const unsubGames = onSnapshot(collection(db, 'bracket'), snapshot => {
            const data = {};
            snapshot.forEach(doc => {
                data[doc.id] = { id: doc.id, ...doc.data() };
            });
            setGames(data);
            setLoading(false); // once done with this, bracket form can be filled out
        });
        // for cleanup
        return () => {
            unsubParticipants();
            unsubGames();
        };
    }, []);

    // clear subsequent games after a game in form is changed
    const handlePickChange = (gameID, value) => {
        setPicks(prev => {
            const successors = getSubsequentGames(gameID);
            const cleared = successors.reduce((acc, id) => {
                acc[id] = null;
                return acc;
            }, {});
            // write original picks, then overwrite with cleared, then with current pick
            return { ...prev, ...cleared, [gameID]: value };
        });
    };

    // handler for submitting the picks form
    const handleSubmit = async () => {
        if (!selectedParticipant) return; // if no one selected then can't update
        setSaving(true); // flag that we're in process of writing to Firebase
        try {
            await updateDoc(doc(db, 'participants', selectedParticipant), {picks});
            alert(`Picks submitted for ${selectedParticipant}!`);
        } catch (err) {
            console.error(err);
            alert('Error saving picks.');
        }
        setSaving(false); // finished Firebase update
    };

    // handler to get the games in a particular region
    const getRegionGames = (region) =>
        Object.values(games).filter(g => g.region === region);

    // util to display an interactive game form
    const renderGame = (game) => (
        <BracketGamePicks key={game.id} game={game} picks={picks} onPickChange={handlePickChange} bracketGames={games} />
    );

    // upon page buffer
    if (loading) return <div className="text-center mt-16 text-black">
        Loading bracket...
    </div>

    // now time to actually render the bracket and picks form
    return (
        <div className="space-y-6">

            {/* select which participant to enter picks for */}
            <div className="flex items-center gap-4">
                <label className="font-medium text-gray-700">
                    Entering Picks For:
                </label>
                <select value={selectedParticipant || ""} onChange={(e) => setSelectedParticipant(e.target.value)} className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 cursor-pointer">
                    <option value="">Select a participant</option>
                    {Object.values(participants).map(p => (
                        <option key={p.id} value={p.id}>
                            {p.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* bracket/picks form - only displays when a participant has been selected */}
            {selectedParticipant && (
                <>
                    {/* bracket */}
                    <BracketDisplay games={games} renderGame={renderGame} />

                    {/* form submit button */}
                    <div className="flex justify-center">
                        <button onClick={handleSubmit} disabled={saving} className="px-6 py-3 bg-red-900 text-white rounded-lg cursor-pointer hover:bg-red-400 transition-colors disabled:opacity-50">
                            {saving ? 'Saving...' : 'Submit Picks'}
                        </button>
                    </div>
                </>
            )}

        </div>
    );
};

export default PicksForm;