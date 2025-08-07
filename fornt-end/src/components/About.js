
import '../Css/about.css'

import jsLogo from '../icons/javascript-icon4.png';
import cppLogo from '../icons/c++.svg';
import htmlLogo from '../icons/html.png';
import cssLogo from '../icons/css.png';
import bootstrapLogo from '../icons/bootstrap.png';
import reactLogo from '../icons/react.svg';
import gitLogo from '../icons/git-icon2.png';
import githubLogo from '../icons/github.png';
import nodeLogo from '../icons/node.js.png';
import expressLogo from '../icons/express.js.png';
import sqlLogo from '../icons/sql.png';
import mongodbLogo from '../icons/mongodb.png';
const About = () => {
   return (

      <>
         <div className="about-container" id='about'>
            <h2 id='about-heading'>About Me</h2>
            <p id='about-description'>I'm a passionate MERN Stack Developer with a strong foundation in building full-stack web applications using MongoDB, Express.js, React, and Node.js. With a keen eye for clean code and intuitive UI/UX, I specialize in creating responsive, high-performance single-page applications (SPAs)  that solve real-world problems.<br></br><br></br>

               From developing RESTful APIs to designing dynamic front-end interfaces, I thrive on turning complex challenges into elegant, scalable applications. I stay up-to-date with the latest JavaScript frameworks and web development trends, always striving to write efficient and maintainable code.<br></br><br></br>

               Whether it's collaborating with cross-functional teams or working independently, I bring a results-driven mindset and a deep curiosity for learning and innovation. Let’s build something impactful together.
            </p>
         </div>
         <div className='technologies'>

            <h3>Technologies</h3>

            <div className='inner-sections-container'>
            <div className='programing-languages inner-section'>
               <h6>Programing Languages</h6>
               <div className='logo-div'>
                  <img src={jsLogo} alt='javascript'></img>
                  <img src={cppLogo} alt='c++'></img>
               </div>
            </div>
            <div className='front-end inner-section'>
               <h6>Frontend</h6>
               <div className='logo-div front-end-logos'>
                  <img src={htmlLogo} alt='html'></img>
                  <img src={cssLogo} alt='css'></img>
                  <img src={bootstrapLogo} alt='bootstrap'></img>
                  <img src={reactLogo} alt='react.js'></img>
               </div>
            </div>
            <div className='back-end inner-section'>
               <h6>Backend</h6>
               <div className='logo-div'>
                  <img src={nodeLogo} alt='node.js'></img>
                  <img src={expressLogo} alt='express.js'></img>
               </div>
            </div>
            <div className='databases inner-section'>
               <h6>Databases</h6>
               <div className='logo-div'>
                  <img src={mongodbLogo} alt='mongodb'></img>
                  <img src={sqlLogo} alt='sql'></img>
               </div>
            </div>
            <div className='tools inner-section'>
               <h6>Tools</h6>
               <div className='logo-div'>
                  <img src={gitLogo} alt='git'></img>
                  <img src={githubLogo} alt='github'></img>
               </div>
            </div>
            </div>
         </div>
      </>
   )


}

export default About;