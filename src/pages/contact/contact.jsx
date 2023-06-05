import "./contact.css";


import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";


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
    <StyledContactForm>
      <h1 align='center'>Contact us</h1>
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
    </StyledContactForm>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 100%;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 50%;
      height: 35px;
      padding: 7px;
      outline: none;
      margin-left:375px;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      margin-left:375px;
      max-width: 50%;
      min-width: 50%;
      width: 50%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
      margin-left:375px;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
      // margin-bottom:150px;
      margin-bottom: 40.4375em;
    }
  }


`;
