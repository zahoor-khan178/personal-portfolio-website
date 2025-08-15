// import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import '../Css/nav.css';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const toggleNavbar = () => {
    setVisible(!visible);
  };




const links_container=useRef(null)



//   useEffect(()=>{

// if(window.innerWidth>768)
// {
//     links_container.current.classList.remove('show');
    

    

// }
//   },[])

  return (
    <>
      <nav id="nav-container">
        <div className="div1">
          <p id="portfolio-heading">Zahoor's portfolio</p>
          <div id="humbarger"  onClick={toggleNavbar}>
            <div className={`line1 ${visible ? 'toggle' : 'untoggle'} humb-lines`}></div>
            <div className={`line2 ${visible ? 'toggle' : 'untoggle'} humb-lines`}></div>
            <div className={`line3 ${visible ? 'toggle' : 'untoggle'} humb-lines`}></div>
          </div>
        </div>

        <ul className={`links-container ${visible ? 'show' : ''}`} ref={links_container}>
          <li className="links-lis"><a href="#image-container" onClick={toggleNavbar} className="links">Home</a></li>
          <li className="links-lis"><a href="#about" onClick={toggleNavbar} className="links">About</a></li>
          <li className="links-lis"><a href="/" onClick={toggleNavbar} className="links">Projects</a></li>
          <li className="links-lis"><a href="/" onClick={toggleNavbar} className="links">Experience</a></li>
          <li className="links-lis"><a href="/" onClick={toggleNavbar} className="links">Skills</a></li>
          <li className="links-lis"><a href="/" onClick={toggleNavbar} className="links">Services</a></li>
          <li className="links-lis"><a href="/" onClick={toggleNavbar} className="links">Contact</a></li>
        </ul>
      </nav>

      {/* Spacer to push content when dropdown is open */}
      <div className={`nav-spacer ${visible ? 'spacer-open' : ''}`}></div>
    </>
  );
};

export default Navbar;
