import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import PicksForm from '../../components/mm/PicksForm';
import SeedingEntry from '../../components/mm/SeedingEntry';
import BracketUpdate from '../../components/mm/BracketUpdate';

const Admin = () => {
    // states to track which tab of admin page is active
    const [activeTab, setActiveTab] = useState('results');
    const navigate = useNavigate();

    // handle logout from admin page
    const handleLogout = async () => {
        await signOut(auth);
        navigate('/mm/login');
    };

    return (
        <div className="px-4 py-8 space-y-6">

            {/* header */}
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-black">
                    Admin Dashboard
                </h1>
                <button onClick={handleLogout} className="px-4 py-2 rounded-lg text-white bg-red-900 hover:bg-red-400 transition-colors cursor-pointer">
                    Logout
                </button>
            </div>

            {/* tab selection */}
            <div className="flex gap-4 border-b border-gray-200">
                <button onClick={() => setActiveTab('picks')} className={`pb-2 px-1 text-sm transition-colors cursor-pointer ${activeTab === 'picks' ? 'border-b-2 border-red-900 text-red-900' : 'text-gray-500 hover:text-gray-700'}`}>
                    Enter Picks
                </button>
                <button onClick={() => setActiveTab('results')} className={`pb-2 px-1 text-sm transition-colors cursor-pointer ${activeTab === 'results' ? 'border-b-2 border-red-900 text-red-900' : 'text-gray-500 hover:text-gray-700'}`}>
                    Update Results
                </button>
                <button onClick={() => setActiveTab('setup')} className={`pb-2 px-1 text-sm transition-colors cursor-pointer ${activeTab === 'setup' ? 'border-b-2 border-red-900 text-red-900' : 'text-gray-500 hover:text-gray-700'}`}>
                    Setup Bracket
                </button>
            </div>

            {/* tab content */}
            {activeTab === 'picks' && <PicksForm />}
            {activeTab === 'results' && <BracketUpdate />}
            {activeTab === 'setup' && <SeedingEntry />}

        </div>
    );
};

export default Admin;