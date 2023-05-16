import React from "react";
import "./Contact.scss";
function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-layout">
        <div className="contact-card">
          <h1 className="contact-head">Contact Me</h1>
          <div className="contact-text">
            <input
              type="text"
              name="name"
              id=""
              className="name"
              placeholder="Enter your name"
            />
            <input
              type="text"
              name="email"
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
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
