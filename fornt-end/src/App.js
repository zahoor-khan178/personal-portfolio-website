// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Image from './components/Image.container';
import About from './components/About';
import Projects from './components/Projects';
import './Css/main-page.css';

function App() {
  return (
    <div id='main-page'>

       {/* <BrowserRouter> */}
   
      <Navbar />
      <Image />
      <About />
      <Projects />

      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
