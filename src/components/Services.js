
import  '../Css/services.css';

import web_logo from '../thumbnails/web eng.png';
// import mobile_app from '../thumbnails/mobile app.png';
import ui_ux from '../thumbnails/ui-ux.png';
import restful_api from '../thumbnails/restful api logo.png';
import data_design from '../thumbnails/data_design-logo.png';
import security_logo from '../thumbnails/security_logo.png';
import ecommerce_logo from '../thumbnails/ecommerce_logo.png';
import real_time_app from '../thumbnails/real_time_app_logo.png';
import responsive_design from '../thumbnails/responsive_design.png';

const Services = () => {
    return (
        <div className="services-section" id='services'>
        <h2 className='section-heading'> Services I Offer</h2>
        <p className='service-general-description'>Comprehensive web development services — from responsive UI to secure APIs.</p>
       
           <div className='services-container'>

             <div className='web-devlopement-box box'>
                
                <img src={web_logo} className='web-development-logo' alt="web "  />
                <div className='heading_container'><h4>Web Development</h4></div>
                <p>Skilled Web Developer specializing in fast, responsive, user-friendly websites. Experienced in SPAs and e-commerce, leveraging clean code and modern frameworks including HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB.</p>

             </div>
            
            <div className='ui/ux-devlopement-box box'>
           
                <img src={ui_ux} className='ui-ux-logo' alt="ui/ux" />
                <div className='heading_container'><h4>UI/UX Design</h4></div>
                <p>I design modern, user-focused interfaces balancing aesthetics and functionality. Skilled in creating intuitive, visually appealing, and scalable digital experiences that guide users seamlessly while ensuring practicality and ease of development.</p>
            </div>
            <div className='ui/ux-devlopement-box box'>
               
                <img src={restful_api} className='ui-ux-logo' alt="ui/ux" />
                <h4> RESTful API & Backend Development</h4>
                <p>Specialize in building secure, scalable backends with Node.js and Express.js. Skilled in RESTful APIs, authentication, and integrations, delivering robust server-side solutions that ensure seamless communication and power modern applications.</p>
            </div>
            <div className='ui/ux-devlopement-box box'>
                
                <img src={data_design} className='ui-ux-logo' alt="ui/ux" />
                 <div className='heading_container'><h4>Database Design & Management</h4></div>
                <p>I design and manage efficient, scalable, and secure databases with expertise in MongoDB. Skilled in schema design and optimized queries, ensuring reliable, high-performance, and flexible data solutions for modern applications.</p>
            </div>
            <div className='ui/ux-devlopement-box box'>
             
                <img src={security_logo} className='ui-ux-logo' alt="ui/ux" />
                 <div className='heading_container'><h4>Authentication & Authorization</h4></div>
                <p>I implement secure, reliable authentication systems with expertise in JWT. Skilled in login flows and role-based access control (RBAC), ensuring seamless user experience while protecting applications and managing feature access.</p>
            </div>
            <div className='ui/ux-devlopement-box box'>
                <img src={ecommerce_logo} className='ui-ux-logo' alt="ui/ux" />
                <h4>E-commerce & Business Solutions</h4>
                <p>I develop scalable e-commerce platforms and custom business applications. Skilled in combining functionality with seamless design to deliver user-friendly stores and enterprise dashboards that drive sales, efficiency, and customer satisfaction.</p>
            </div>
            <div className='ui/ux-devlopement-box box'>
               
                <img src={real_time_app} className='ui-ux-logo' alt="ui/ux" />
                 <div className='heading_container'><h4>Real-time Applications</h4></div>
                <p>I build real-time applications with WebSockets, Socket.io, and MERN stack. Skilled in delivering instant communication, live updates, and seamless interactions through chat platforms and dashboards, ensuring smooth performance under heavy traffic.</p>
            </div>
            <div className='ui/ux-devlopement-box box'>
                <img src={responsive_design} className='ui-ux-logo' alt="ui/ux" />
                <h4>Responsive Frontend Development</h4>
                <p>I build modern, responsive, and interactive UIs with React.js, HTML, CSS, and JavaScript. Focused on performance, usability, and brand alignment, I create engaging, visually appealing, and highly functional frontends.</p>
            </div>
           

           </div>
      
        </div>
    );
    }

export default Services;