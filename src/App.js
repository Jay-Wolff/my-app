import './App.css';
import "./style.css";
import NavbarMenu from './components/NavbarMenu';
import MainBody from './components/home/MainBody';
import FooterMenu from './components/FooterMenu';
import ArtGal from './components/artgallery/ArtGal'

//for routing the pages
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <NavbarMenu></NavbarMenu>
      <MainBody className="MainBody"></MainBody>

      <ArtGal className="ArtGal"></ArtGal>
      <FooterMenu className="FooterMenu"></FooterMenu>
    
   

    <BrowserRouter>
      <Routes>
        <Route path="art" element={<ArtGal />} />
     </Routes>
    </BrowserRouter>

</>
  );
}

export default App;


