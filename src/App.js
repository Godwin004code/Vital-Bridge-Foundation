import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import RealAboutPage from './components/About/RealAboutPage';
import ScrollToTop from './components/Global/ScrollToTop';
import Media from './components/Media/Media';
import ProjectOne from './components/Media/ProjectOne';
import ProjectTwo from './components/Media/ProjectTwo';
import ProjectThree from './components/Media/ProjectThree';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/what-we-do' element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path='/our-works' element={<Media />} />
      <Route path='/project-cleanup-delta' element={<ProjectOne />} />
      <Route path='/project-end-malaria' element={<ProjectTwo />} />
      <Route path='/project-keepsapeleclean' element={<ProjectThree />} />
      <Route path='about' element={<RealAboutPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
