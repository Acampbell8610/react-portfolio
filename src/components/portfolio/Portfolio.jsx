import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Run Buddy.png'
import IMG2 from '../../assets/Run Buddy.png'
import IMG3 from '../../assets/Run Buddy.png'
import IMG4 from '../../assets/Run Buddy.png'
import IMG5 from '../../assets/Run Buddy.png'
import IMG6 from '../../assets/Run Buddy.png'


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Run Buddy" />
          </div>

            <h3>This is a portfolio item title</h3>
            <div className="porfolio__item-cta">
            <a href="https://github.com/" className="btn" target="_blank">Github</a>
            <a href="https://github.com/" className="btn btn-primary" trarget="_blank">Live Demo</a>
            </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Run Buddy" />
          </div>

            <h3>This is a portfolio item title</h3>
            <div className="porfolio__item-cta">
            <a href="https://github.com/" className="btn" target="_blank">Github</a>
            <a href="https://github.com/" className="btn btn-primary" trarget="_blank">Live Demo</a>
            </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Run Buddy" />
          </div>

            <h3>This is a portfolio item title</h3>
            <div className="porfolio__item-cta">
            <a href="https://github.com/" className="btn" target="_blank">Github</a>
            <a href="https://github.com/" className="btn btn-primary" trarget="_blank">Live Demo</a>
            </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Run Buddy" />
          </div>

            <h3>This is a portfolio item title</h3>
            <div className="porfolio__item-cta">
            <a href="https://github.com/" className="btn" target="_blank">Github</a>
            <a href="https://github.com/" className="btn btn-primary" trarget="_blank">Live Demo</a>
            </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Run Buddy" />
          </div>

            <h3>This is a portfolio item title</h3>
            <div className="porfolio__item-cta">
            <a href="https://github.com/" className="btn" target="_blank">Github</a>
            <a href="https://github.com/" className="btn btn-primary" trarget="_blank">Live Demo</a>
            </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Run Buddy" />
          </div>

            <h3>This is a portfolio item title</h3>
            <div className="porfolio__item-cta">
            <a href="https://github.com/" className="btn" target="_blank">Github</a>
            <a href="https://github.com/" className="btn btn-primary" trarget="_blank">Live Demo</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio