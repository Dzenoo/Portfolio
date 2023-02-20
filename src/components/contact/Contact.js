import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import "./Contact.css";

const contactText = "Let's Chat";

const Contact = () => {
  return (
    <div>
      <div className="contact_container">
        <div className="contact_text">
          <h1>
            {contactText.split(" ").map((word, index) => (
              <span key={index}>
                {word.split("").map((char, index) => (
                  <span key={index} className="char">
                    {char}
                  </span>
                ))}
                {index < contactText.split(" ").length - 1 && (
                  <span>&nbsp;</span>
                )}
              </span>
            ))}
            <br />
            Tell me about your current project
          </h1>
          <p>
            Interested in working together on a MERN stack project? Reach out
            and let's discuss how we can collaborate.
          </p>
          <p>Let's create something </p>
          <p className="mail">
            <span>
              <AiOutlineMail />
            </span>
            <span className="mail_se">frontprogramer@gmail.com</span>
          </p>
        </div>
        <form className="contact_form">
          <h1>Send Me a Message🚀</h1>
          <div className="flex">
            <div className="form_control ">
              <input required="required" type="text" />
              <span>Name</span>
            </div>
            <div className="form_control ">
              <input required="required" type="email" />
              <span>Email</span>
            </div>
          </div>

          <textarea placeholder="Message" rows={30}></textarea>
          <button className="send_button">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
