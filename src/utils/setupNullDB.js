import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

const generateNullPicks = () => {
    const picks = {};
    for (let i = 1; i <= 63; i++) {
        const gameID = `game${String(i).padStart(2, '0')}`;
        picks[gameID] = null;
    }
    return picks;
};

const participants = [
    "Allen",
    "Cindy",
    "Carly",
    "Matthew",
    "Margaret",
    "Jack",
    "Tina",
    "Brian",
    "Hannah",
    "Elizabeth"
];

export const addParticipants = async () => {
    try {
        for (let i = 1; i <= 10; i++) {
            const name = participants[i - 1];
            const id = `participant${String(i).padStart(2, '0')}`;
            await setDoc(doc(db, 'participants', id), {
                name: name,
                picks: generateNullPicks()
            });
        }
    } catch (err) {
        console.error('Error adding participants:', err);
    }
};

export const addTeams = async () => {
    try {
        const seeds = [1, 16, 8, 9, 5, 12, 4, 13, 6, 11, 3, 14, 7, 10, 2, 15];
        let j = 0;
        for (let i = 1; i <= 64; i++) {
            const teamID = `team${String(i).padStart(2, '0')}`;
            await setDoc(doc(db, 'teams', teamID), {
                name: null,
                seed: seeds[j]
            });
            j = (j + 1) % 16;
        }
    } catch (err) {
        console.error('Error adding null team slots:', err);
    }
};