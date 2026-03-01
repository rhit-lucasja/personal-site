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
        e.preventDefault();
        setError(null);
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
        <p></p>
    );
};

export default Login;