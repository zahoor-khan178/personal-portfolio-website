
import '../Css/budget_tracker.css'

import budgetVideo from '../projects.videos/budget.mp4';


const Budget_tracker_app = () => {
    return (
        <div className='budget-tracker-app'>
            <div className='budget-tracker-app-video-section'>

                <video src={budgetVideo} className='budget_video' controls autoPlay  muted loop ></video>
                <h1 className='budget-tracker-heading'>Budget Tracker Application</h1>
                <p className='budget-tracker-description'>This is a full-stack Budget Tracker application developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js).
It enables users to efficiently manage their personal finances by allowing them to add, view, and categorize both income and expense entries. The intuitive user interface provides a clear and organized overview of the user’s financial activity, helping them better understand their spending patterns and make informed financial decisions.<br></br><br></br>

The backend is powered by Node.js and Express.js, handling RESTful APIs and ensuring smooth communication with the MongoDB database, where all user and transaction data is securely stored. On the frontend, React.js provides a dynamic and responsive interface, offering real-time updates and an enhanced user experience.<br></br><br></br>

Security is a key focus in this project. JSON Web Tokens (JWT) are used for user authentication and authorization, ensuring that sensitive user data is protected and access to the application is properly controlled.<br></br><br></br>

The application is fully responsive, meaning it adapts seamlessly to different screen sizes and devices, from desktops to smartphones. Custom CSS and media queries were implemented to enhance both usability and visual appeal across all platforms.<br></br><br></br>

Overall, this budget tracker is a practical and user-friendly solution for anyone looking to stay on top of their financial health.
This is a full-stack </p>

                <div className='features-section'>
                <h3 className='features-headin'>Features</h3>
                  <li className='pages-heading'>Homw page:</li>
                <ul className='pages-lis'>

                    <li>Displays total income, total expenses, and the current balance.</li>
                    <li>Visualizes these details using a bar graph for easy understanding.</li>
                </ul>
                <li className='pages-heading'>Add Transaction Page:</li>
                <ul className='pages-lis'>

                    <li>A user-friendly form to add new transactions.</li>
                    <li>Input fields for transaction title, amount, category, and transaction type (income or expense).</li>
                </ul>
                <li className='pages-heading'>View Transactions Page:</li>
                <ul className='pages-lis'>

                    <li>Displays a detailed list of all recorded transactions.</li>
                    <li>Each record shows the title, amount, category, type, and date of the transaction.</li>
                </ul>
                </div>

                <div className='technologes-section'>

                    <h3 className='tecnologies-heading'>Technologies Used</h3>

                    <li className='front-end-heading '>Fornt End:</li>
                    <li className='frontend-technologies react '>React.js</li>
                    <li className='frontend-technologies '> HTML</li>
                    <li className='frontend-technologies '>CSS</li>
                    <li className='frontend-technologies '>Chart.js (for bar graph)</li>

                    <li className='front-end-heading '>Backend:</li>
                    <li className='frontend-technologies react '>Node.js</li>
                    <li className='frontend-technologies '> Express.js</li>


    
                    


                    <li className='front-end-heading '>Database:</li>
                    <li className='frontend-technologies react '>MongoDB</li>


                      <li className='front-end-heading '>Github Link:</li>
                    <a href='https://github.com/zahoor-khan178/Budget-Tracker-Application'  target="_blank"  rel="noopener noreferrer" className='github-link '>https://github.com/zahoor-khan178/Budget-Tracker-Application</a>
                     
                      <li className='front-end-heading '>Live Website Link:</li>
                    <a href='https://budget-tracker-application-bb2h.vercel.app'  target="_blank"  rel="noopener noreferrer" className='github-link '>https://budget-tracker-application-bb2h.vercel.app</a>
                    
                </div>


            </div>

        </div>
    );
}


export default Budget_tracker_app;