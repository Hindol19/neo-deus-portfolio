import React, { useRef } from "react";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-layout">
        <div className="contact-card">
          <h1 className="contact-head">Contact Me</h1>
          <form ref={form} onSubmit={sendEmail} className="contact-text">
            <input
              type="text"
              name="user_name"
              id=""
              className="name"
              placeholder="Enter your name"
            />
            <input
              type="text"
              name="user_email"
              id=""
              className="email"
              placeholder="Enter your email"
            />
            {/* <textarea name="message" id="" cols="30" rows="10" ></textarea> */}
            <input
              type="text"
              name="message"
              id=""
              className="message"
              placeholder="Enter your message"
            />
            <button type="submit" value="Send">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
