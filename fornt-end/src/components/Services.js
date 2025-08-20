
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
                <div className='heading_container'><h4>Web Development</h4></div>
                
                <img src={web_logo} className='web-development-logo' alt="web "  />
                <p>As a skilled Web Developer, I specialize in building fast, responsive, and user-friendly websites tailored to client needs. From creating dynamic single-page applications to developing fully functional e-commerce platforms, I combine clean code practices with modern frameworks to deliver seamless user experiences. My expertise includes HTML, CSS, JavaScript, React.js,  Node.js, Express.js, and MongoDB.</p>

             </div>
            {/* <div  className='mobile-app-devlopement-box box'>
                <h4>Mobile App Development</h4>
                <img src={mobile_app} className='mobile-app-evelopment-logo' alt="mobile app " />
            </div> */}
            <div className='ui/ux-devlopement-box box'>
                {/* <h4>UI/UX Design</h4> */}
                <div className='heading_container'><h4>UI/UX Design</h4></div>
                <img src={ui_ux} className='ui-ux-logo' alt="ui/ux" />
                <p>I create modern, user-focused designs that balance aesthetics with functionality. My goal is to deliver intuitive digital experiences that not only look visually appealing but also guide users effortlessly through every interaction. With a strong eye for design and a developer’s mindset, I ensure that every interface is not only beautiful but also practical, scalable, and easy to implement in development.</p>
            </div>
            <div className='ui/ux-devlopement-box box'>
                <h4>RESTful API & Backend Development</h4>
                 {/* <div className='heading_container'><h4>RESTful API & Backend Development</h4></div> */}
                <img src={restful_api} className='ui-ux-logo' alt="ui/ux" />
                <p>I specialize in building secure, scalable, and high-performance backends using Node.js and Express.js. With well-structured RESTful APIs, I ensure smooth communication between the frontend and backend, enabling applications to run seamlessly. From authentication systems to third-party integrations, I design robust server-side solutions that power modern web and mobile applications.</p>
            </div>
            <div className='ui/ux-devlopement-box box'>
                {/* <h4>Database Design & Management</h4> */}
                 <div className='heading_container'><h4>Database Design & Management</h4></div>
                <img src={data_design} className='ui-ux-logo' alt="ui/ux" />
                <p>I design and manage efficient, scalable, and secure databases that form the backbone of modern applications. With expertise in MongoDB, I create well-structured schemas and optimized queries to ensure smooth data storage, retrieval, and performance. My approach focuses on building databases that are not only reliable but also flexible enough to grow with your application.</p>
            </div>
            <div className='ui/ux-devlopement-box box'>
                {/* <h4>Authentication & Authorization</h4> */}
                 <div className='heading_container'><h4>Authentication & Authorization</h4></div>
                <img src={security_logo} className='ui-ux-logo' alt="ui/ux" />
                <p>I implement secure and reliable authentication systems that protect your applications and users. From simple login forms to advanced role-based access control (RBAC), I ensure that only the right users have access to the right features. With expertise in JWT I build authentication flows that are both seamless and secure.</p>
            </div>
            <div className='ui/ux-devlopement-box box'>
                <h4>E-commerce & Business Solutions</h4>
                <img src={ecommerce_logo} className='ui-ux-logo' alt="ui/ux" />
                <p>I develop powerful e-commerce platforms and custom business applications that help brands grow and streamline operations. From user-friendly online stores to enterprise-level dashboards, I combine functionality with seamless design to deliver solutions that drive sales, efficiency, and customer satisfaction.</p>
            </div>
            <div className='ui/ux-devlopement-box box'>
                {/* <h4>Real-time Applications</h4> */}
                 <div className='heading_container'><h4>Real-time Applications</h4></div>
                <img src={real_time_app} className='ui-ux-logo' alt="ui/ux" />
                <p>I build real-time applications that deliver instant communication, live updates, and seamless interactions. Using WebSockets, Socket.io, and MERN stack technologies, I create fast and reliable systems that keep users connected without delays. From chat platforms to live dashboards, I ensure smooth performance even under heavy traffic.</p>
            </div>
            <div className='ui/ux-devlopement-box box'>
                <h4>Responsive Frontend Development</h4>
                <img src={responsive_design} className='ui-ux-logo' alt="ui/ux" />
                <p>I build modern, responsive, and interactive user interfaces that provide seamless experiences across all devices. Using React.js, HTML, CSS, and JavaScript, I transform ideas into visually appealing and highly functional frontends that engage users and align with your brand identity. My focus is on creating designs that are not only attractive but also optimized for performance and usability.</p>
            </div>
           

           </div>
      
        </div>
    );
    }

export default Services;