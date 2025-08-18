import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Image from './components/Image.container';
import About from './components/About';
import Projects from './components/Projects';

import Budgetapp from './components/Budgetapp';
import Crudapplication from './components/Crudapplication';
import Ecommerceapp from './components/Ecommerceapp';
import Textutils from './components/Textutils';
import ScrollToTop from './components/ScrollToTop';
import './Css/main-page.css';

function AppContent() {
  const location = useLocation();

  
  const hideNavbarPaths = ["/budget", "/crud", "/ecommerce", "/textutils"];

  const shouldShowNavbar = !hideNavbarPaths.includes(location.pathname);

  return (
    <div id='main-page'>
      {shouldShowNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<> <Image /> <About /> <Projects /> </>} />
        <Route path="/budget" element={<Budgetapp />} />
        <Route path="/crud" element={<Crudapplication />} />
        <Route path="/ecommerce" element={<Ecommerceapp />} />
        <Route path="/textutils" element={<Textutils />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
