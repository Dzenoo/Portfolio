import React from "react";

import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact_container">
        <div className="contact_text">
          <h1>Contact Me</h1>
          <p>
            Interested in working together on a MERN stack project? Reach out
            and let's discuss how we can collaborate.
          </p>
        </div>
        <form className="contact_form">
          <div className="form_control ">
            <input required="required" type="text" />
            <span>Name</span>
            <i></i>
          </div>

          <div className="form_control ">
            <input required="required" type="email" />
            <span>Email</span>
            <i></i>
          </div>
          <textarea placeholder="Message" rows={30}></textarea>
          <button className="send_button">Send</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
