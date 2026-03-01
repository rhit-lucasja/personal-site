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

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/mm/bracket" element={<Bracket />} />
          <Route path="/mm/picks" element={<Picks />} />
          <Route path="/mm/leaderboard" element={<Leaderboard />} />
          <Route path="/mm/login" element={<Login />} />
          <Route path="/mm/admin" element={<Admin />} />
        </Routes>
      </Content>
    </BrowserRouter>
  );
};

export default App;