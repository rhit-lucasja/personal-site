import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-red-800 text-white font-bold flex gap-8 pl-4 py-2">
            <Link to="/" className="hover:text-gray-400">Home</Link>
            <Link to="/about" className="hover:text-gray-400">About</Link>
            <Link to="/projects" className="hover:text-gray-400">Projects</Link>
        </nav>
    );
};

export default Navbar;