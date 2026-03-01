import { Link } from 'react-router-dom';
import pfp from '../assets/red.jpg';

const Home = () => {
    return (
        <div className="flex-1 flex items-center justify-center bg-white">
            {/* Tagline & Links */}
            <div className="relative text-center space-y-4">
                <img src={pfp} alt="Profile Photo" className="w-40 h-50 rounded-4xl object-cover mx-auto" />
                <h1 className="text-5xl font-bold text-black">
                    Jack Lucas
                </h1>
                <p className="text-xl text-gray-500">
                    Software Developer | Mathematician | Student
                </p>
                <div className="flex gap-4 justify-center">
                    <Link to="/about" className="px-6 py-3 bg-red-900 text-white rounded-lg hover:bg-red-400 transition-colors">
                        About Me
                    </Link>
                    <Link to="/projects" className="px-6 py-3 bg-red-900 text-white rounded-lg hover:bg-red-400 transition-colors">
                        My Work
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;