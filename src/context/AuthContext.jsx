import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // user and authentication states
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // listener upon user change/login
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={{ user}}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

// cleaner shortcut for accessing auth state
export const useAuth = () => useContext(AuthContext);