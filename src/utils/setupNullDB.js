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

export const resetGames = async () => {
    try {
        for (let i = 1; i <= 63; i++) {
            const id = `game${String(i).padStart(2, '0')}`;
            await setDoc(doc(db, 'bracket', id), {
                team1: null,
                team2: null,
                winner: null
            }, { merge: true });
        }
    } catch (err) {
        console.error('Error adding null team slots:', err);
    }
};