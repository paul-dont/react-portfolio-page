import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/moshify.png';
import IMG2 from '../../assets/mapty.png';
import IMG3 from '../../assets/tip.png';
import IMG4 from '../../assets/faq.png';
import IMG5 from '../../assets/expenses.png';
import IMG6 from '../../assets/cart.png';

const portfolioData = [
  {
    id: 1,
    image: IMG1,
    title:
      'Landing page builded with mobile first approach and css flex & grid.',
    github: 'https://github.com/paul-dont/moshify-landing-page',
    demo: 'https://mellifluous-snickerdoodle-6095d0.netlify.app/',
  },
  {
    id: 2,
    image: IMG2,
    title:
      'A Map application based on the leaflet API that stores data about gymnastic activities.',
    github: 'https://github.com/paul-dont/mapty-web-app',
    demo: 'https://keen-churros-aa0cb3.netlify.app/',
  },
  {
    id: 3,
    image: IMG3,
    title:
      'A tip calculator application that computes the amount of money each person has to pay.',
    github: 'https://github.com/paul-dont/tip-calculator-app',
    demo: 'https://dapper-centaur-5ca8b3.netlify.app',
  },
  {
    id: 4,
    image: IMG4,
    title:
      'A simple FAQ component made with vanilla HTML/CSS and some JS functionality.',
    github: 'https://github.com/paul-dont/faq-accordion-card',
    demo: 'https://boisterous-figolla-e14da5.netlify.app',
  },
  {
    id: 5,
    image: IMG5,
    title:
      'A usefull application for storing monthly/yearly expenses data made with react.',
    github: 'https://github.com/paul-dont/monthly-expenses-app',
    demo: 'https://vermillion-gnome-e3664d.netlify.app',
  },
  {
    id: 6,
    image: IMG6,
    title:
      'A nice looking responsive product page with a classic cart functionality.',
    github: 'https://github.com/paul-dont/ecommerce-product-page-main',
    demo: 'https://steady-biscotti-ddf347.netlify.app/',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolioData.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
