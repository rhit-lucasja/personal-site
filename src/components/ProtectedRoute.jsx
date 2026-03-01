import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    // get user in current session
    const { user } = useAuth();

    // if no user logged in, navigate to login
    if (!user) {
        return <Navigate to="/mm/login" />;
    }

    // else if logged in, render child page elements
    return children;
};

export default ProtectedRoute;