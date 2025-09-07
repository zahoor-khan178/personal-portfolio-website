
import '../Css/budget_tracker.css'

import ecommerceVideo from '../projects.videos/ecommerceapp.mp4';



const Ecommerceapp = () => {
    return (
        <div className='budget-tracker-app'>
            <div className='budget-tracker-app-video-section'>

                <video src={ecommerceVideo} className='budget_video' controls autoPlay  muted loop ></video>
                <h1 className='budget-tracker-heading'>Ecommerce Website</h1>
                <p className='budget-tracker-description'>This E-Commerce application is a full-stack project built using the MERN stack (MongoDB, Express.js, React.js, and Node.js).
It offers a streamlined and secure platform for managing products within an online store environment, designed to support both functionality and user experience.<br></br><br></br>

The backend is powered by Node.js and Express.js, which handle the server-side logic and API development. The MongoDB database stores all product information, user data, and transaction history in a scalable, document-based structure. React.js is used on the frontend to deliver a fast, responsive, and interactive user interface.<br></br><br></br>

Security is a key focus in this project. JSON Web Tokens (JWT) are used for user authentication and authorization, ensuring that sensitive user data is protected and access to the application is properly controlled.<br></br><br></br>

The application is fully responsive, meaning it adapts seamlessly to different screen sizes and devices, from desktops to smartphones. Custom CSS and media queries were implemented to enhance both usability and visual appeal across all platforms.<br></br><br></br>

</p> 

                <div className='features-section'>
                <h3 className='features-headin'>Features</h3>
                  <li className='pages-heading'>Add Product:</li>
                <ul className='pages-lis'>

                    <li>A user-friendly interface for adding new products to the store. Administrators can input product details such as name, price, category and company.</li>
                    {/* <li>Visualizes these details using a bar graph for easy understanding.</li> */}
                </ul>
                <li className='pages-heading'>Update Product:</li>
                <ul className='pages-lis'>

                    <li> Allows administrators to edit existing product information. This ensures that product details are always up-to-date.</li>
                    {/* <li>Input fields for transaction title, amount, category, and transaction type (income or expense).</li> */}
                </ul>
                <li className='pages-heading'>Product List:</li>
                <ul className='pages-lis'>

                    <li>Displays all available products in the form of table. Users can view product details, and search for specific product.</li>
                    {/* <li>Each record shows the title, amount, category, type, and date of the transaction.</li> */}
                </ul>
                <li className='pages-heading'>Home: </li>
                <ul className='pages-lis'>

                    <li> The landing page that showcases featured products and provides navigation to other sections of the application.</li>
                    {/* <li>Each record shows the title, amount, category, type, and date of the transaction.</li> */}
                </ul>
                </div>

                <div className='technologes-section'>

                    <h3 className='tecnologies-heading'>Technologies Used</h3>

                    <li className='front-end-heading '>Fornt End:</li>
                    <li className='frontend-technologies react '>React.js</li>
                    <li className='frontend-technologies '> HTML</li>
                    <li className='frontend-technologies '>CSS</li>
                    {/* <li className='frontend-technologies '>Chart.js (for bar graph)</li> */}

                    <li className='front-end-heading '>Backend:</li>
                    <li className='frontend-technologies react '>Node.js</li>
                    <li className='frontend-technologies '> Express.js</li>
                    


                    <li className='front-end-heading '>Database:</li>
                    <li className='frontend-technologies react '>MongoDB</li>


                        <li className='front-end-heading '>Github Link:</li>
                    <a href='https://github.com/zahoor-khan178/E-commerce-dashboard' target="_blank"  rel="noopener noreferrer" className='github-link '>https://github.com/zahoor-khan178/E-commerce-dashboard</a>
                    
                        <li className='front-end-heading '>Live Website Link:</li>
                    <a href='https://e-commerce-dashboard-cen9.vercel.app' target="_blank"  rel="noopener noreferrer" className='github-link '>https://e-commerce-dashboard-cen9.vercel.app</a>
                    
                </div>


            </div>

        </div>
    );
}


export default Ecommerceapp;