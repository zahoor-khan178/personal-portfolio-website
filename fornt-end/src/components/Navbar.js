import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../Css/nav.css';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const toggleNavbar = () => {
    setVisible(!visible);
  };

  return (
    <>
      <nav id="nav-container">
        <div className="div1">
          <p id="portfolio-heading">portfolio</p>
          <div id="humbarger" onClick={toggleNavbar}>
            <div className={`line1 ${visible ? 'toggle' : 'untoggle'} humb-lines`}></div>
            <div className={`line2 ${visible ? 'toggle' : 'untoggle'} humb-lines`}></div>
            <div className={`line3 ${visible ? 'toggle' : 'untoggle'} humb-lines`}></div>
          </div>
        </div>

        <ul className={`links-container ${visible ? 'show' : 'hide'}`}>
          <li className="links-lis"><Link className="links">Home</Link></li>
          <li className="links-lis"><Link className="links">About</Link></li>
          <li className="links-lis"><Link className="links">Projects</Link></li>
          <li className="links-lis"><Link className="links">Experience</Link></li>
          <li className="links-lis"><Link className="links">Services</Link></li>
          <li className="links-lis"><Link className="links">Contact</Link></li>
        </ul>
      </nav>

      {/* Spacer to push content when dropdown is open */}
      <div className={`nav-spacer ${visible ? 'spacer-open' : ''}`}></div>
    </>
  );
};

export default Navbar;
