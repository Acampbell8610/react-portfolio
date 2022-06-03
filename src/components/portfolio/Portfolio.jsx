import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Run Buddy.png'
import IMG2 from '../../assets/Cocktail Party (3).png'
import IMG3 from '../../assets/MuMa.png'
import IMG4 from '../../assets/Landscape.png'
import IMG5 from '../../assets/Plan It.png'
import IMG6 from '../../assets/Weather Forecast.png'

const data = [
  {
    id:1,
    image:IMG1,
    title: 'Run Buddy',
    github: 'https://github.com/Acampbell8610/run-buddy-2.0',
    demo: 'https://acampbell8610.github.io/run-buddy-2.0/',
  },
  {
    id:2,
    image:IMG2,
    title: 'Cocktail Party',
    github: 'https://github.com/Acampbell8610/cocktailParty',
    demo: 'https://cocktail-party-jp-ac.herokuapp.com/',
  },
  {
    id:3,
    image:IMG3,
    title: 'MuMa',
    github: 'https://github.com/Acampbell8610/MuMa',
    demo: 'https://acampbell8610.github.io/MuMa/',
  },
  {
    id:4,
    image:IMG4,
    title: 'Photo Port',
    github: 'https://github.com/Acampbell8610/photo-port',
    demo: 'https://acampbell8610.github.io/photo-port/',
  },
  {
    id:5,
    image:IMG5,
    title: 'Tech Blog',
    github: 'https://github.com/Acampbell8610/Plan-It-Organizer',
    demo: 'https://plan-it-organizer.herokuapp.com/',
  },
  {
    id:6,
    image:IMG6,
    title: 'Weather Forcast',
    github: 'https://github.com/Acampbell8610/alex-campbell-weather-forcast',
    demo: 'https://acampbell8610.github.io/alex-campbell-weather-forcast/',
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
  
              <h3>{title}</h3>
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