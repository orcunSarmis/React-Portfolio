import { useEffect, useState } from 'react'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const interval = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return() => clearInterval(interval);
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          Full-stack web developer with a Certificate IV in Programming from Upskilled and currently completing a 6-month 
            Coding Bootcamp with the University of Adelaide. I have developed skills in JavaScript, CSS and HTML, as well as jQuery,
            Node.JS, Express.JS, Web-APIs, Third-Party-APIs and Server-Sid-APIs, MVC, ORM, REACT and MERN. 
          </p>
          <p align="LEFT">
          I have also worked with .Net, C#, as well \
            as MySQL and NoSQL database, following object-oriented and agile methodology principles. I am recognised for my attention to details and 
            problem-solving skills. 
          </p>
          <p>
          I am passionate about learning and constantly building on my skills to deliver the best possible user 
            experience and quality projects. I am currently looking for opportunities to join a team of developers to continue to put 
            my skills into practice and continue to grow.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About;