import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
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
        </Routes>
      </Content>
    </BrowserRouter>
  );
};

export default App;