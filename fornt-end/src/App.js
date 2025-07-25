
import Navbar from './components/Navbar';
import Image from './components/Image.container';
import {BrowserRouter }from 'react-router-dom';
function App() {
  return (

    <div id='main-page'>


      <BrowserRouter>

      <Navbar />
      <Image/>
      </BrowserRouter>

    </div>
    
  )
    
}

export default App;
