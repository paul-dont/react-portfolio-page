import React from 'react';
import './about.css';
import ME from '../../assets/me-about.webp';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const about = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="" className="about__me-image" />
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>15+ Years Working in other industry</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Web Development</h5>
              <small>1 Year of Experience</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
          </div>
          <p className="pitch">{`<Pitch>`}</p>
          <p>
            Highly motivated web developer. Familiar with many modern frameworks
            and tools like React.js, Tailwind, PhotoShop and more.
          </p>
          <p className="pitch">{`</Pitch>`}</p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
