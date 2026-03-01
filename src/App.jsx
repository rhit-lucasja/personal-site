import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Bracket from './pages/mm/Bracket';
import Picks from './pages/mm/Picks';
import Leaderboard from './pages/mm/Leaderboard';
import Login from './pages/mm/Login';
import Admin from './pages/mm/Admin';
import Navbar from './components/Navbar';
import Content from './components/Content'
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Content>
          <Routes>
            {/* portfolio routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />

            {/* public March Madness routes */}
            <Route path="/mm/bracket" element={<Bracket />} />
            <Route path="/mm/picks" element={<Picks />} />
            <Route path="/mm/leaderboard" element={<Leaderboard />} />
            <Route path="/mm/login" element={<Login />} />

            {/* private March Madness admin route */}
            <Route path="/mm/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
          </Routes>
        </Content>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;