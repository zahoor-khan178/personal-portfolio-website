
import '../Css/experience.css';


const Experience = () => {
    return (
        <div className='experience-section' id='experience'>
            <div className='experience-container'>
                <h1 className='experience-heading'>Experience</h1>
                <h3 className='intern-software-developer-heading'>Intern software developer</h3>
                <h4 className='company-name'> Irfan Textiles (Pvt) Ltd</h4>
                <h4 className='company-name expreience-time'>Jan 2024 - present</h4>
              
                <div className='experience-projects'>
                    <ul>
                        <li>Developed and deployed full-stack web applications, using Node.js, Express.js for backend APIs, and React.js for dynamic user interfaces, with data persistence handled by MongoDB.</li>
                        <br></br>
                        <li>Designed and implemented RESTful APIs to support core application functionalities, including user authentication, data retrieval, and CRUD operations, ensuring efficient communication between frontend and backend.</li>
                        <br></br>
                        <li> Contributed to frontend development by crafting responsive and interactive user interfaces using React.js.</li>
                        <br></br>
                        <li> Gained practical Experience with Single Page Application (SPA) development principles, specifically using React.js to build modular, component-based UIs with efficient client-side routing.</li>
                        <br></br>
                        <li> Gained practical experience with database management in MongoDB, including schema design.</li>
                        <br></br>
                        <li>Applied JSON Web Tokens (JWT) in projects to secure API endpoints, demonstrating an understanding of token-based authentication flows.</li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Experience;