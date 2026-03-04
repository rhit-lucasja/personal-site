import { useState } from 'react';
import { doc, writeBatch } from 'firebase/firestore';
import { db } from '../../firebase';
import { getSeedingOrder } from '../../utils/bracketStructure';

const order = getSeedingOrder();
const region_labels = ["Top Left", "Bottom Left", "Top Right", "Bottom Right"];
const seeds = [1, 16, 8, 9, 5, 12, 4, 13, 6, 11, 3, 14, 7, 10, 2, 15];

const SeedingEntry = () => {
    // keep track of form entries and saving status
    const [entries, setEntries] = useState(Array(64).fill(''));
    const [saving, setSaving] = useState(false);

    // handle a change in the form by updating state
    const handleChange = (index, value) => {
        setEntries(prev => {
            const updated = [...prev];
            updated[index] = value;
            return updated;
        });
    };

    // handle submission of team names
    const handleSubmit = async () => {
        // confirmation window to prevent accidental bracket reset
        const confirmed = window.confirm(
            "Submitting this form will reset the entire bracket. Do you want to proceed?"
        );
        if (!confirmed) return;

        setSaving(true); // so no conflicting submissions
        try {
            // group entries by gameID according to established order
            const gameUpdates = {};
            order.forEach(({ gameID, field }, index) => {
                if (!gameUpdates[gameID]) gameUpdates[gameID] = {};
                gameUpdates[gameID][field] = entries[index] || null;
            });

            // use a batch to write all game updates at once
            const batch = writeBatch(db);

            // first clear teams and winners of all games
            for (let i = 1; i <= 63; i++) {
                const gameID = `game${String(i).padStart(2, '0')}`;
                batch.update(doc(db, 'bracket', gameID), {
                    team1: null,
                    team2: null,
                    winner: null
                });
            }

            // then add the seedings for all round 1 games
            Object.entries(gameUpdates).forEach(([gameID, fields]) => {
                batch.update(doc(db, 'bracket', gameID), fields);
            });

            // send batch to Firestore to update
            await batch.commit();
            alert("Seeding saved!");
        } catch (err) {
            console.error(err);
            alert("Error while saving seeds.");
        }
        setSaving(false);
    };

    // render seeding entry form
    return (
        <div className="space-y-6">
            {/* form display */}
            <div className="grid grid-flow-col grid-rows-2 gap-4">
                {region_labels.map((label, regionIndex) => (
                    <div key={label} className="border border-gray-200 rounded-xl p-4 space-y-4">
                        <h2 className="text-lg font-bold text-black">
                            {label}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {Array.from({ length: 8 }, (_, gameIndex) => {
                                const slotIndex = regionIndex * 16 + gameIndex * 2;
                                return (
                                    <div key={gameIndex} className="space-y-1">
                                        <input type="text" placeholder={`${seeds[gameIndex * 2]}.`} value={entries[slotIndex]} onChange={(e) => handleChange(slotIndex, e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:border-2 focus:border-red-900" />
                                        <input type="text" placeholder={`${seeds[gameIndex * 2 + 1]}.`} value={entries[slotIndex + 1]} onChange={(e) => handleChange(slotIndex + 1, e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:border-2 focus:border-red-900" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            {/* submit button */}
            <div className="flex justify-center">
                <button onClick={handleSubmit} disabled={saving} className="px-6 py-3 bg-red-900 text-white rounded-lg cursor-pointer hover:bg-red-400 transition-colors disabled:opacity-50">
                    {saving ? 'Saving...' : 'Submit Seeding'}
                </button>
            </div>
        </div>
    );
};

export default SeedingEntry;