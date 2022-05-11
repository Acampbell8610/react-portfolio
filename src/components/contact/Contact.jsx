import React, { useRef } from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineFacebook} from 'react-icons/ai'
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4h6x6wv', 'template_hi9ahun', form.current, 'SNLx_q80rjHeSXO4A')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
          <AiOutlineMail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>Acampbell8610@gmail.com</h5>
          <a href="mailto:acampbell8610@gmail.com"target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
          <AiOutlineFacebook className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>Facebook</h5>
          <a href="https://m.me/alex.campbell.9678"target="_blank">Send a message</a>
          </article>
        </div>
        <form ref= {form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name"required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required  rows="7"></textarea> 
          <button type="submit" className="btn btn-primary">Send Message</button>  
          </form>
      </div>


    </section>
  )
}

export default Contact