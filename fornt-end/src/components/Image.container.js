
import img from './profile-image.jpeg'
import '../Css/image.css';

const Image = () => {

    return (

        <div id='image-container'>

           <img src={img} alt=" Zahoor Khan" id='photo' />

            <div id='image-heading-description'>
                <h2 id='image-heading'>Zahoor Khan</h2>
                <p id='image-description'>Software Engineer ||
Dynamic <span className='mern-span mern'>MERN</span> Stack Developer | Crafting Scalable, Responsive and single page Web Applications with <span className='mern-span'>JavaScript</span>, <span className='mern-span'>MongoDB</span>, <span className='mern-span'>Express</span>, <span className='mern-span'>React</span>, and <span className='mern-span'>Node.js</span></p>
            </div>


        </div>
    )
}

export default Image;