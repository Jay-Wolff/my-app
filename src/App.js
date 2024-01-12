import './App.css';
import "./style.css";
import NavbarMenu from './components/NavbarMenu';
import MainBody from './components/home/MainBody';
import FooterMenu from './components/FooterMenu';

function App() {
  return (
    <>
      <NavbarMenu></NavbarMenu>
      <MainBody className="MainBody"></MainBody>
      <FooterMenu className="FooterMenu"></FooterMenu>
    
    </>
  );
}

export default App;


