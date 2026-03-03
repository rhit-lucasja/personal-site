import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import PicksForm from '../../components/mm/PicksForm';

const Admin = () => {
    // states to track which tab of admin page is active
    const [activeTab, setActiveTab] = useState('picks');
    const navigate = useNavigate();

    // handle logout from admin page
    const handleLogout = async () => {
        await signOut(auth);
        navigate('/mm/bracket');
    };

    return (
        <div className="px-4 py-8 space-y-6">

            {/* header */}
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-black">
                    Admin Dashboard
                </h1>
                <button onClick={handleLogout} className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
                    Logout
                </button>
            </div>

            {/* tab selection */}
            <div className="flex gap-4 border-b border-gray-200">
                <button onClick={() => setActiveTab('picks')} className={`pb-2 px-1 text-sm transition-colors ${activeTab === 'picks' ? 'border-b-2 border-black text-black' : 'text-gray-400 hover:text-gray-700'}`}>
                    Picks Entry
                </button>
                <button onClick={() => setActiveTab('bracket')} className={`pb-2 px-1 text-sm transition-colors ${activeTab === 'bracket' ? 'border-b-2 border-black text-black' : 'text-gray-400 hover:text-gray-700'}`}>
                    Bracket Setup
                </button>
            </div>

            {/* tab content */}
            {activeTab === 'picks' && <PicksForm />}
            {activeTab === 'bracket' && (
                <p className="text-black">Bracket setup coming soon.</p>
            )}

        </div>
    );
};

export default Admin;