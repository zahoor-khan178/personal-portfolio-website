
import img from './profile-image.jpeg'
import '../Css/image.css';

const Image = () => {

    return (

        <div id='image-container'>

           <img src={img} alt=" Zahoor Khan" id='photo' />

            <div id='image-heading-description'>
                <h2 id='image-heading'>Zahoor Khan</h2>
                <p id='image-description'>Software Engineer ||
Dynamic MERN Stack Developer | Crafting Scalable, Responsive and single page Web Applications with JavaScript, MongoDB, Express, React, and Node.js</p>
            </div>


        </div>
    )
}

export default Image;