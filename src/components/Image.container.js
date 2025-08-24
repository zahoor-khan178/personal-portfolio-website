import img from './profile-image.jpeg'
import '../Css/image.css';

const Image = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        // Use process.env.PUBLIC_URL to get the correct path in a deployed environment
        link.href = process.env.PUBLIC_URL + '/Zahoor-CV.pdf';
        link.download = 'Zahoor-CV.pdf'; // sets the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <div id='image-container'>
                <img src={img} alt=" Zahoor Khan" id='photo' />
                <div id='image-heading-description'>
                    <p id='image-heading'>Zahoor Khan</p>
                    <span id="soft-engineer-span">Software Engineer </span>
                    <p id='image-description'>
                    Dynamic <span className='mern-span mern'>MERN</span> Stack Developer || Crafting Scalable, Responsive and single page Web Applications with <span className='mern-span'>JavaScript</span>, <span className='mern-span'>MongoDB</span>, <span className='mern-span'>Express</span>, <span className='mern-span'>React</span>, and <span className='mern-span'>Node.js</span></p>
                </div>
            </div>
            <div className='download-cv-container'>
                <button className='download-cv cv-container-buttons' onClick={handleDownload }>download cv</button>
                <a className='download-cv ' id='hire-me' href='#contacts'>Hire Me</a>
            </div>
        </>
    )
}

export default Image;
