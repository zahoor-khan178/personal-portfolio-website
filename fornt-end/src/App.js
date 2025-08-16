import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Image from './components/Image.container';
import About from './components/About';
import Projects from './components/Projects';

import Budgetapp from './components/Budgetapp';
import Crudapplication from './components/Crudapplication';
import Ecommerceapp from './components/Ecommerceapp';
import Textutils from './components/Textutils';
import './Css/main-page.css';

function App() {
  return (
    <div id='main-page'>
      <BrowserRouter>
        <Navbar />

        <Routes>
        
          <Route path="/" element={<> <Image /> <About /> <Projects /></>} />

        
          <Route path="/budget" element={<Budgetapp />} />
          <Route path="/crud" element={<Crudapplication />} />
          <Route path="/ecommerce" element={<Ecommerceapp />} />
          <Route path="/textutils" element={<Textutils />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
