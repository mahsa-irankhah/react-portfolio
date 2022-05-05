import { Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import './App.scss';

//components
import Landing from './components/Landing';
import About from "./components/About";
import Work from './components/Work';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<Work />} />
    </Routes>
  );
}

export default App;
