import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <article className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>User stories.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User flow charts, diagrams.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content strategy.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Brand and design system development.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Design technology consulting.</p>
            </li>
          </ul>
        </article>

        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Websites and web apps using cutting edge technologies like
                React.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Modern CSS design with styled components / tailwind.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Step by step creation using flowcharts figma and other tools.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Cross-Browser development.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Social media friendly designs.</p>
            </li>
          </ul>
        </article>
      </article>
      {/* END OF CONTENT CREATION */}
    </section>
  );
};

export default Services;
