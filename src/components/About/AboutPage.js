import React, { Fragment, useState } from "react";

import "./AboutPage.scss";
import Modal from "../UI/Modal";
import Button from "../UI/Button";

import img from "../../assets/ja2.png";
import js from "../../assets/JavaSc.jpg";
import re from "../../assets/Reactt.jpg";
import Trophy from "../../assets/Trophy.png";
import Desk from "../../assets/Desk.png";
import Folder from "../../assets/folder.png";

import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const AboutPage = (props) => {
  const [modalIsShow, setModalShow] = useState(false);

  const ShowModal = () => {
    setModalShow(true);
  };

  const HideModal = () => {
    setModalShow(false);
  };

  return (
    <Fragment>
      <div className="about__section">
        <div className="about__content">
          <h1>About Me</h1>
          <p>
            I'm front end web developer from Serbia. My interest in this job
            sparked during my Primary and High school. I'm working for some
            small companies. In 2020 i decided to set up remote work, which has
            led me on an exciting journey. Every day i love being able to work
            and discuss with clients, discussing their problems and showing my
            knowledge!
          </p>
          {modalIsShow && (
            <Modal onClose={HideModal}>
              <div className="modalDiv">
                <span>My Info</span>
                <ul className="basicInfo">
                  <li>
                    <b>Name:</b> Dzenis
                  </li>
                  <li>
                    <b>Surname: </b>Gudzevic
                  </li>
                  <li>
                    <b>Phone: </b>+381 644535968
                  </li>
                  <li>
                    <b>Email: </b>frontprogramer@gmail.com
                  </li>
                  <li>
                    <b>Country: </b>Serbia
                  </li>
                  <li>
                    <b>Languages:</b> English,Bosnian
                  </li>
                </ul>
                <span>Socials</span>
                <ul className="socials">
                  <li>
                    <a href="https://github.com/Dzenoo">
                      <FaGithub />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/_dzenis_g/">
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/dzenis-gudzevic-41460b244/">
                      <FaLinkedin />
                    </a>
                  </li>
                </ul>
                <span>Certificates</span>
                <div className="images">
                  <img src={js} />
                  <img src={re} />
                </div>
              </div>
              <Button onClick={HideModal}>Close</Button>
            </Modal>
          )}
          <h1>My Hobies</h1>
          <div className="about__hobies">
            <span>Gym</span>
            <span>Movies</span>
            <Button onClick={ShowModal}>Show aditional info</Button>
          </div>
        </div>
        <div className="about__img">
          <img src={img} />
        </div>
      </div>
      <section id="experience">
        <div>
          <h1 className="experience__title">
            I know that <span>Good Apps</span> means <br />
            <span>Good Business</span>
          </h1>
        </div>
        <div className="container">
          <div className="item">
            <img src={Trophy} />
            <h1>React developer</h1>
            <p>
              I'm React developer with a passion to building beautiful and
              functional web applications
            </p>
          </div>
          <div className="item">
            <img src={Desk} />
            <h1>Front End Developer</h1>
            <p>
              I'm Front End Developer which create advanced websites and making
              them honorable
            </p>
          </div>
          <div className="item">
            <img src={Folder} />
            <h1>Web Designer</h1>
            <p>
              I'm Web Designer with passion to design websites with most
              beautiful designs
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AboutPage;
