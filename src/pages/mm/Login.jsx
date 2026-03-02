import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
    // get login info as states
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { user } = useAuth();

    // if logged in, redirect to admin dashboard
    if (user) {
        navigate('/mm/admin');
    }

    // blocking function to attempt Firebase sign-in
    const handleLogin = async (e) => {
        e.preventDefault(); // prevents page reload upon button click
        setError(null); // clears stale error messages
        try {
            // sign in and then redirect to admin page
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/mm/admin');
        } catch (err) {
            // error with login authentication
            setError('Invalid email or password.');
        }
    };

    // render a login UI
    return (
        <div className="flex-1 flex items-center justify-center">
            <div className="w-full max-w-sm space-y-6">
                <h1 className="text-3xl font-bold text-black text-center">
                    Admin Login
                </h1>

                {/* display error if it exists */}
                {error && (
                    <p className="text-red-500 text-center text-sm">
                        {error}
                    </p>
                )}

                {/* email + password login form */}
                <div className="space-y-4">
                    {/* email entry */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-gray-300 rounded-lg px-2 py-2 focus:border-2 focus:border-black" />
                    </div>
                    {/* password entry */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border border-gray-300 rounded-lg px-2 py-2 focus:border-2 focus:border-black" />
                    </div>
                    {/* login button */}
                    <button onClick={handleLogin} className="w-full bg-red-900 text-white py-2 rounded-lg hover:bg-red-400 transition-colors">
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;