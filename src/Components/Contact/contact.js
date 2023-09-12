import React, {useRef} from "react";
import "./contact.css";
import Facebook from "../../Photos/icons8-facebook-48.png";
import Github from "../../Photos/icons8-github-50.png";
import Linkedin from "../../Photos/icons8-linkedin-48.png";
import Instagram from "../../Photos/icons8-instagram-48.png";
import emailjs from '@emailjs/browser';


const Contact = () =>{
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_f5raihe', 'template_hl5mtuj', form.current, '2z8lEYvI7QKfeAFM6')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent!');
          }, (error) => {
              console.log(error.text);
          });
      };

    return(
        <div id="contact">
            <h1 className="contactTitle"><span className="contactTitle2">Contact</span> Me!</h1>
            <span className="contactDesc">Please fill out this short form to contact me for any opportunities or questions.</span>
            <form ref={form} className="contactForm" onSubmit={sendEmail}>
                <input type="text" name='from_name' className="name" placeholder="Your Name" />
                <input type="text" name="from_email" className="email" placeholder="Your Email" />
                <textarea className="msg" name="message" rows={5} placeholder="Your Message"></textarea>
                <button className="submitBtn" type="submit" value='send'>Submit</button>
                <div className="links">
                    <a href="https://www.linkedin.com/in/matthew-bierie-385b18288/" target="_blank" rel="noreferrer">
                    <img src={Linkedin} alt="linkedin" className="link"></img>
                    </a>
                    <a href="https://github.com/MatthewB145" target="_blank" rel="noreferrer">
                    <img src={Github} alt="Github" className="link"></img>
                    </a>
                    <a href="https://www.instagram.com/matt_c_b_/?next=%2F" target="_blank" rel="noreferrer">
                    <img src={Instagram} alt="Instagram" className="link"></img>
                    </a>
                    <a href="https://www.facebook.com/matthew.bierie" target="_blank" rel="noreferrer">
                    <img src={Facebook} alt="Facebook" className="link"></img>
                    </a>

                </div>
            </form>
        </div>
    )
}


export default Contact;

