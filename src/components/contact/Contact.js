import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "emailjs-com";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

const contactText = "Let's Chat";

const Contact = () => {
  const sendEmailHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eggshcb",
        "template_d785fqr",
        e.target,
        "Gg5MgAyf0bp2kUhaE"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    toast.success("Email has sent!");

    e.target.reset();
  };

  return (
    <>
      <ToastContainer />
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
          <p className="mail">
            <span>
              <AiOutlineMail />
            </span>
            <span className="mail_se">frontprogramer@gmail.com</span>
          </p>
        </div>
        <form className="contact_form" onSubmit={sendEmailHandler}>
          <h1>Send Me a Message🚀</h1>
          <div className="flex">
            <div className="form_control ">
              <input required="required" type="text" id="name" name="name" />
              <span>Name</span>
            </div>
            <div className="form_control ">
              <input required="required" type="email" id="email" name="email" />
              <span>Email</span>
            </div>
          </div>

          <textarea placeholder="Message" rows={30} name="message"></textarea>
          <button type="submit" className="send_button">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
