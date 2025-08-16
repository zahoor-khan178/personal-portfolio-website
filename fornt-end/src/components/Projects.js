

import '../Css/projects.css';


import budget_tracker_app from '../thumbnails/budget summary.png';
import ecommerce_app from '../thumbnails/ecommerce app.png';
import textutils from '../thumbnails/textutils.png';
import crud_app from '../thumbnails/crud app.png';




import reactLogo from '../icons/react.svg';
import nodeLogo from '../icons/node.js.png';
import expressLogo from '../icons/express.js.png';
import mongodbLogo from '../icons/mongodb.png';

const Projects = () => {



    return (
        <div className="projects-section">
            <h1 className="projects-heading">Projects</h1>

            <div className="projects-container">

                <div className="project project1">

                    <img src={budget_tracker_app} alt="budget" className='project-image budget-img' />
                    <div className='project-detail'>
                        <h3 className='project-heading'>Budget Tracker app</h3>
                        <p className='project-dectiption budget-decription'> This is a full-stack budget tracker application built using the MERN stack. It allows users to track their income and expenses. This project leverages JWTs for secure authentication and authorization.</p>

                        <div className='project-icons'>
                            <img src={mongodbLogo}></img>
                            <img src={expressLogo}></img>
                            <img src={reactLogo}></img>
                            <img src={nodeLogo}></img>

                        </div>

                        <button className='project-button'>view detail</button>
                    </div>


                </div>

                <div className="project project2">

                    <img src={ecommerce_app} alt="ecommerce" className='project-image ecommerce-img' />
                      <div className='project-detail'>
                        <h3 className='project-heading'>Ecommerce Website</h3>
                        <p className='project-dectiption budget-decription'> This E-Commerce project is built using the MEARN stack. It provides a comprehensive platform for managing products in an online store, secured with JSON Web Tokens (JWT)</p>

                        <div className='project-icons'>
                            <img src={mongodbLogo}></img>
                            <img src={expressLogo}></img>
                            <img src={reactLogo}></img>
                            <img src={nodeLogo}></img>

                        </div>

                        <button className='project-button'>view detail</button>
                    </div>
                </div>
                <div className="project project3">
                    <img src={textutils} alt="ecommerce" className='project-image textutils-img' />
                     <div className='project-detail'>
                        <h3 className='project-heading'>TextUtils</h3>
                        <p className='project-dectiption budget-decription'> TextUtils is a text analyzing tool developed to help users manipulate and analyze their text efficiently.</p>

                        <div className='project-icons'>
                            <img src={mongodbLogo}></img>
                            <img src={expressLogo}></img>
                            <img src={reactLogo}></img>
                            <img src={nodeLogo}></img>

                        </div>

                        <button className='project-button'>view detail</button>
                    </div>
                </div>
                <div className="project project4">
                    <img src={crud_app} alt="ecommerce" className='project-image crud-img' />
                     <div className='project-detail'>
                        <h3 className='project-heading'>Crud Application</h3>
                        <p className='project-dectiption budget-decription'> This full stack CRUD application allows users to manage their registration details effectively. </p>

                        <div className='project-icons'>
                            <img src={mongodbLogo}></img>
                            <img src={expressLogo}></img>
                            <img src={reactLogo}></img>
                            <img src={nodeLogo}></img>

                        </div>

                        <button className='project-button'>view detail</button>
                    </div>
                </div>




            </div>

        </div>
    )
}

export default Projects;