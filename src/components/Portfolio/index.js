import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import HollyView from '../../assets/images/HollyView.png';
import sklhub1 from '../../assets/images/sklhub1.png';
import commentA from '../../assets/images/commentA.png';
import WeatherDashboard from '../../assets/images/WeatherDashboard.png';
import "./index.scss";
// import { getDocs, collection } from 'firebase/firestore';


const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    useEffect(() => {
        // getPortfolio();
    }, []);
    // const getPortfolio = async () => {
        // const querySnapshot = await getDocs(collection('portfolio'));
        // setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
    // }
    console.log(portfolio);

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                <div className="image-box" >
                <img src={HollyView} className="portfolio-image" alt="cinema seats" /> 
                <div className="content">
                                    <p className="title">HollyView</p>
                                    <h4 className="description">movie's information from OMDB's API </h4>
                                    <button
                                        className="btn"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href='https://nolie88.github.io/appvengers-assemble/';
                                            }}
                                    >View</button>
                                </div>
                </div>  
                <div className="image-box" >             
                <img src={sklhub1} className="portfolio-image" alt="sklhub landing page" />
                                <div className="content">
                                    <p className="title">SklHub</p>
                                    <h4 className="description">Will facilitate money-free bartering system</h4>
                                    <button
                                        className="btn"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href='https://warm-citadel-17427.herokuapp.com/';
                                            }}
                                    >View</button>
                                </div>
                </div>            
                <div className="image-box" >             
                <img src={commentA} className="portfolio-image" alt="techBlog landing page" />
                                <div className="content">
                                    <p className="title">TechBlog</p>
                                    <h4 className="description">Tech Blog is a CMS-style blog site</h4>
                                    <button
                                        className="btn"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href='https://fast-ocean-21178.herokuapp.com/';
                                            }}
                                    >View</button>
                                </div>
                </div>       
                <div className="image-box" >             
                <img src={WeatherDashboard} className="portfolio-image" alt="WeatherDashboard landing page" />
                                <div className="content">
                                    <p className="title">WeatherDashboard</p>
                                    <h4 className="description">Designed to display weather conditions</h4>
                                    <button
                                        className="btn"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href='https://orcunsarmis.github.io/Weather-Dashboard/';
                                            }}
                                    >View</button>
                                </div>
                </div>  

                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img 
                                src={port.image}
                                className="portfolio-image"
                                alt="portfolio" />
                                <div className="content">
                                    <p className="title">{port.name}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }


    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderPortfolio(portfolio)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;