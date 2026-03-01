import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-red-900 text-white font-bold flex gap-8 pl-4 py-2">
            <Link to="/" className="hover:text-gray-400 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-gray-400 transition-colors">About</Link>
            <Link to="/projects" className="hover:text-gray-400 transition-colors">Projects</Link>
            <Link to="/mm/bracket" className="hover:text-gray-400 transition-colors">March Madness</Link>
        </nav>
    );
};

export default Navbar;