import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    // track state of the March Madness drop-down link
    const [dropdownMM, setDropdownMM] = useState(false);
    const dropdownRef = useRef(null); // tracks location of click target

    // listener that closes dropdown if clicked somewhere else
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdownMM(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full bg-red-900 text-white font-bold flex gap-8 pl-4 py-2 z-50">
            <Link to="/" className="hover:text-gray-400 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-gray-400 transition-colors">About</Link>
            <Link to="/projects" className="hover:text-gray-400 transition-colors">Projects</Link>
            {/* March Madness page dropdown */}
            <div className="relative" ref={dropdownRef}>
                <button onClick={() => setDropdownMM(!dropdownMM)} className="hover:text-gray-400 transition-colors cursor-pointer">
                    March Madness
                </button>
                {/* display dropdown if active */}
                {dropdownMM && (
                    <div className="absolute top-full -left-4 min-w-[calc(100%+2rem)] mt-1 bg-red-900 rounded-b-lg shadow-lg flex flex-col">
                        <Link to="/mm/bracket" onClick={() => setDropdownMM(false)} className="px-4 py-2 hover:text-gray-400 transition-colors">
                            Bracket
                        </Link>
                        <Link to="/mm/picks" onClick={() => setDropdownMM(false)} className="px-4 py-2 hover:text-gray-400 transition-colors">
                            Picks
                        </Link>
                        <Link to="/mm/leaderboard" onClick={() => setDropdownMM(false)} className="px-4 py-2 hover:text-gray-400 transition-colors">
                            Standings
                        </Link>
                        <Link to="/mm/admin" onClick={() => setDropdownMM(false)} className="px-4 py-2 hover:text-gray-400 transition-colors">
                            Admin
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;