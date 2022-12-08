import React from "react";
import { motion } from "framer-motion";

import "./Kontakt.scss";

import ContactImg from "../../assets/Contact.png";

const Kontakt = () => {
  return (
    <motion.div
      className="contact__section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      exit={{ opacity: 0 }}
    >
      <h1>Contact Me</h1>
      <div className="contact__center">
        <div className="center">
          <form
            action="mailto:frontprogramer@gmail.com"
            method="post"
            enctype="text/plain"
          >
            <div className="txt_field">
              <input type="text" required />
              <label>Name</label>
              <span></span>
            </div>
            <div className="txt_field">
              <input type="email" required />
              <label>Email</label>
              <span></span>
            </div>
            <div className="txt_field">
              <input type="text" required />
              <label>Message</label>
              <span></span>
            </div>
            <input type="submit" />
          </form>
        </div>
        <div className="contact__img">
          <img src={ContactImg} />
        </div>
      </div>
    </motion.div>
  );
};

export default Kontakt;
