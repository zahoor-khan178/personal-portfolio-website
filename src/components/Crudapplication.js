
import '../Css/budget_tracker.css'

// import crud_app from '../thumbnails/crud app.png';
import CrudAppVideo from '../projects.videos/crud app video.mp4';



const Crudapplication = () => {
    return (
        <div className='budget-tracker-app'>
            <div className='budget-tracker-app-video-section'>


                {/* <img src={crud_app} alt="crud" className='budget_video' /> */}
                <video src={CrudAppVideo} className='budget_video' controls autoPlay muted loop ></video>

                <h1 className='budget-tracker-heading'>Crud Application</h1>
                <p className='budget-tracker-description'>This is a full-stack CRUD (Create, Read, Update, Delete) application developed using the MERN stack, which combines the power of modern JavaScript technologies to build fast, responsive, and scalable web applications.
                    <br></br> <br></br>
                    This CRUD application allows users to manage their registration details effectively. The project features two main pages: one for inserting and updating user information (name, email, and password) and another for viewing and deleting existing records in a tabular format.
                    <br></br> <br></br>
                    Responsive & User-Friendly:
                    This application is designed with responsiveness in mind, ensuring a seamless user experience across different devices and screen sizes. Clean UI and intuitive navigation make it easy for users to interact with the system.
                    <br></br> <br></br>
                    Whether you are learning full-stack development or building a foundation for a more complex app, this CRUD project serves as a solid example of integrating frontend and backend technologies using modern development practices.

                </p>

                <div className='features-section'>
                    <h3 className='features-headin'>Features</h3>
                    <li className='pages-heading'>Registration and Update Page:</li>
                    <ul className='pages-lis'>

                        <li>Users can enter their name, email, and password to register or update existing records.</li>

                    </ul>
                    <li className='pages-heading'>View and Delete Page:</li>
                    <ul className='pages-lis'>

                        <li>Users can view all their records in a table.</li>
                        <li>Users can delete records with a single action.</li>
                    </ul>

                </div>

                <div className='technologes-section'>

                    <h3 className='tecnologies-heading'>Technologies Used</h3>

                    <li className='front-end-heading '>Fornt End:</li>
                    <li className='frontend-technologies react '>JavaScript</li>
                    <li className='frontend-technologies '> HTML</li>
                    <li className='frontend-technologies '>CSS</li>


                    <li className='front-end-heading '>Backend:</li>
                    <li className='frontend-technologies react '>Node.js</li>
                    <li className='frontend-technologies '> Express.js</li>



                    <li className='front-end-heading '>Database:</li>
                    <li className='frontend-technologies react '>MongoDB</li>


                    <li className='front-end-heading '>Github Link:</li>
                    <a href='https://github.com/zahoor-khan178/crud-application' className='github-link '>https://github.com/zahoor-khan178/crud-application</a>

                </div>


            </div>

        </div>
    );
}


export default Crudapplication;