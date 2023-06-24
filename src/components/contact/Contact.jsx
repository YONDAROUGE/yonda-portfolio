import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_1pwb858', 'template_majm5ly', form.current, 'YFN5-6Z_wiSV8GDq_')
      e.target.reset() 
      
  };
    return (
      <section id="contact">
        <h5>To get in touch</h5>
        <h2>Contact me through</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__option__icon" />
              <h4>Email</h4>
              <h5>niccinchami@gmail.com</h5>
              <a
                href="mailto:niccinchami@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Mail me
              </a>
            </article>

            <article className="contact__option">
              <AiOutlineLinkedin className="contact__option__icon" />
              <h4>LinkedIn</h4>
              <h5>Profile</h5>
              <a
                href="https://www.linkedin.com/in/nicci-nchami-b18bb227b/"
                target="_blank"
                rel="noreferrer"
              >
                Get to me on LinkedIn
              </a>
            </article>

            <article className="contact__option">
              <BsWhatsapp className="contact__option__icon" />
              <h4>Whatsapp</h4>
              <h5>Direct message</h5>
              <a
                href="https://web.whatsapp.com/send?phone=+2376676619103"
                target="_blank"
                rel="noreferrer"
              >
                Chat with me on Whatsapp
              </a>
            </article>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="full name" placeholder="full name" required />
            <input
              type="email"
              name="email"
              placeholder="your email"
              required
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="your message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Testified
            </button>
          </form>
        </div>
      </section>
    );
}

export default Contact
