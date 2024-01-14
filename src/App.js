import './App.css';
import "./style.css";
//for routing the pages
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//importing components
import NavbarMenu from './components/NavbarMenu';
import MainBody from './components/home/MainBody';
import ArtGal from './components/artgallery/ArtGal';
// import About from './components/about/About';
// import PublicSpeaking from './components/publicspeaking/PublicSpeaking';
// import Contact from './components/contact/Contact';
import Vgp from './components/videogameprogramming/Vgp';
import Poetry from './components/poetrycollection/PoetryCollection';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <NavbarMenu />
        <Route path="/" element={<MainBody />} />
        {/* <Route path="about" element={<About />} /> */}
        {/* <Route path="speaking" element={<PublicSpeaking />} /> */}
        {/* <Route path="contact" element={<Contact />} /> */}
        <Route path="vgp" element={<Vgp />} />
        <Route path="art" element={<ArtGal />} />
        <Route path="poetry" element={<Poetry />} />
     </Routes>
    </BrowserRouter>
</>
  );
}

export default App;


