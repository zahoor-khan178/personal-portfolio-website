
import img from './profile-image.jpeg'
import githubLogo from '../icons/github.png';
import linkedinLogo from '../icons/linkedin.png';
// import  cv from '../icons/Zahoor-CV.pdf';
import '../Css/image.css';

const Image = () => {

   const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/Zahoor-CV.pdf'; // must match the public file path
  link.download = 'Zahoor-CV.pdf'; // optional, sets the filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};



    return (

        <>
        <div id='image-container'>

           <img src={img} alt=" Zahoor Khan" id='photo' />

            <div id='image-heading-description'>
                <h2 id='image-heading'>Zahoor Khan</h2>
                <p id='image-description'>Software Engineer ||
Dynamic <span className='mern-span mern'>MERN</span> Stack Developer | Crafting Scalable, Responsive and single page Web Applications with <span className='mern-span'>JavaScript</span>, <span className='mern-span'>MongoDB</span>, <span className='mern-span'>Express</span>, <span className='mern-span'>React</span>, and <span className='mern-span'>Node.js</span></p>
            </div>
            


        </div>
        <div className='download-cv-container'>
            <button className='download-cv cv-container-buttons' onClick={handleDownload }>download cv</button>
            <a className='linked-in cv-container-buttons' href='https://www.linkedin.com/in/zahoor-khan-170363324/' target="_blank"    rel="noopener noreferrer"><img src={linkedinLogo} alt='linked in'></img></a>
            <a className='github cv-container-buttons' href='https://github.com/zahoor-khan178' target="_blank"    rel="noopener noreferrer"><img src={githubLogo} alt='github'></img></a>
        </div>
        </>
    )
}

export default Image;