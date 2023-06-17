import "./contact.css";
import Typewriter from 'typewriter-effect';

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_loms57r', 'template_bgegy5t', form.current, '5IK-W54MeupZifUAA')
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
  <div className="StyledContactForm">
        <div className="App">
        <Typewriter
          options={{
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter.typeString('CONTACT US').pauseFor(1000).deleteAll().start();
          }}
        />
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name:</label>
        <input type="text" name="user_name" />
        <label>Email:</label>
        <input type="email" name="user_email" />
        <label>Phone No:</label>
        <input type="text" name="user_phone" />    
        <label>Message:</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      </div>
  );
};

export default Contact;

// Styles
