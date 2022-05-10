import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Run Buddy.png'
import IMG2 from '../../assets/Run Buddy.png'
import IMG3 from '../../assets/Run Buddy.png'
import IMG4 from '../../assets/Run Buddy.png'
import IMG5 from '../../assets/Run Buddy.png'
import IMG6 from '../../assets/MuMa.png'

const data = [
  {
    id:1,
    image:IMG1,
    title: 'Run Buddy',
    github: 'http://github.com/',
    demo: 'http://github.com/',
  },
  {
    id:2,
    image:IMG2,
    title: 'Run Buddy2',
    github: 'http://github.com/',
    demo: 'http://github.com/',
  },
  {
    id:3,
    image:IMG3,
    title: 'Run Buddy3',
    github: 'http://github.com/',
    demo: 'http://github.com/',
  },
  {
    id:4,
    image:IMG4,
    title: 'Run Buddy4',
    github: 'http://github.com/',
    demo: 'http://github.com/',
  },
  {
    id:5,
    image:IMG5,
    title: 'Run Buddy5',
    github: 'http://github.com/',
    demo: 'http://github.com/',
  },
  {
    id:6,
    image:IMG6,
    title: 'Run Buddy6',
    github: 'http://github.com/',
    demo: 'http://github.com/',
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       {
         data.map(({id,image,title,github,demo}) => {
          return (
            <article  key={id}className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
  
              <h3>This is a portfolio item title</h3>
              <div className="porfolio__item-cta">
              <a href={github} className="btn" target="_blank">Github</a>
              <a href={demo} className="btn btn-primary" trarget="_blank">Live Demo</a>
              </div>
          </article>
          )
         })
         
         }
       
      </div>
    </section>
  )
}

export default Portfolio