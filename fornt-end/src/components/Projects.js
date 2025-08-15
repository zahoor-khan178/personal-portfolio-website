

import '../Css/projects.css';


import budget_tracker_app from '../thumbnails/budget summary.png';
import ecommerce_app from '../thumbnails/ecommerce app.png';
import textutils from '../thumbnails/textutils.png';
import crud_app from '../thumbnails/crud app.png';

const Projects = () => {



    return (
        <div className="projects-section">
            <h1 className="projects-heading">Projects</h1>

            <div className="projects-container">

                <div className="project project1">

                    <img src={budget_tracker_app} alt="budget" className='budget-img' />
                    <h3>Budget Tracker app</h3>
                    <p className='project-dectiption budget-decription'>This is a full-stack budget tracker application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to track their income and expenses, providing a clear overview of their financial situation. This project leverages JWTs for secure authentication and authorization.</p>
                    

                </div>

                <div className="project project2">

                    <img src={ecommerce_app} alt="ecommerce" className='ecommerce-img' />
                    <h3>Budget Tracker app</h3>
                </div>
                <div className="project project3">
                    <img src={textutils} alt="ecommerce" className='textutils-img' />
                    <h3>Budget Tracker app</h3>
                </div>
                <div className="project project4">
                     <img src={crud_app} alt="ecommerce" className='crud-img' />
                    <h3>Budget Tracker app</h3>
                </div>
             
              


            </div>

        </div>
    )
}

export default Projects;