import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;