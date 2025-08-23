
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';



import '../Css/contacts.css';

import githubLogo from '../icons/github.png';
import linkedinLogo from '../icons/linkedin.png';


import whatsappLogo from '../icons/whatsapp.png';
import mailLogo from '../icons/mail.png';
import phoneLogo from '../icons/phone.png';

const Contacts = () => {

     const form = useRef();

    const send_email = (e) => {
        e.preventDefault();


           emailjs
      .sendForm('service_fkv9eoo', 'template_zabh8hu', form.current, {
        publicKey: 'EWVbwGT3M5NQj-umQ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Email sent successfully!');
            e.target.reset(); 
        },
        (error) => {
          console.log('FAILED...', error.text);
            alert('Failed to send email. Please try again later.');
        },
      );

        }
    return (

        <div className="contacts-section" id="contacts">
            <div className='contact-container'>
            <h4 className='contacts-section-heading'>Send Me Email</h4>
                {/* <div className='email-container'> */}

                    <form  ref={form} onSubmit={send_email} className='email-container'>

                    <div className='name-container'>
                        <label htmlFor="">Name <sup>*</sup></label>
                        <input type="text" className='name-field' name='name' required />

                    </div>
                    <div className='email-div'>
                        <label htmlFor="">Email <sup>*</sup></label>
                        <input type="text" className='email-field' name='email' required />
                    </div>
                    <div className='text-area-container'>
                        <label htmlFor="">Message</label>
                        <textarea name="message" className="email-text-area" ></textarea>
                    </div>
                    <button type="submit" className='email-button'>Send Email</button>

                    </form>

                {/* </div> */}
            </div>
            <div className='hyperlinks-container'>

                <div className='linkedin-div inner-div'>

                    <img src={linkedinLogo} alt="" />

                    <a href="https://www.linkedin.com/in/zahoor-khan-170363324/">https://www.linkedin.com/in/zahoor-khan-170363324/</a>

                </div>
                <div className='github-div inner-div'>

                    <img src={githubLogo} alt="" />

                    <a href="https://github.com/zahoor-khan178">https://github.com/zahoor-khan178</a>

                </div>
                <div className='whattsapp-div inner-div'>


                    <img src={whatsappLogo} alt="" />
                    <p>03140436120</p>

                </div>
                <div className='phone-div inner-div'>
                    <img src={phoneLogo} alt="" />
                    <p>03415886575</p>
                </div>
                <div className='email-div inner-div'>

                    <img src={mailLogo} alt="" />

                    <p>zahoorkhan112257@gmail.com</p>

                </div>

            </div>
        </div>
    )
}

export default Contacts;