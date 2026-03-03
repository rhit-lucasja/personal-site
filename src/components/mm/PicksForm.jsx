import { useState, useEffect } from 'react';
import { collection, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import BracketRegion from '../mm/BracketRegion';
import BracketGamePicks from '../mm/BracketGamePicks';
import BracketGame from '../mm/BracketGame';
import { getSubsequentGames } from '../../utils/bracketStructure';

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

const PicksForm = () => {
    // states to track changes in form
    const [participants, setParticipants] = useState({});
    const [selectedParticipant, setSelectedParticipant] = useState(null);
    const [games, setGames] = useState({});
    const [picks, setPicks] = useState({});
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    

};

export default PicksForm;