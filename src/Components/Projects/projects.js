import React from "react";
import "./projects.css";
import websitephoto from "../../Photos/img4.jpg";
import admyre from "../../Photos/admyre.jpg";

const Projects = () => {
    return (
        <section id="projects">
            <h2 className="projectsTitle">My <span className="projectsTitle2">Projects</span></h2>
            <span className="projectsDescription">Some of the works I have done in various fields of software development and computer science.</span>
            <div className="projectsImgs">
                <a href="https://github.com/MatthewB145/Personal-website" target="_blank" rel="noreferrer" className="links">
                <img src={websitephoto} alt="Website Photo" className="projectsImg"></img>
                </a>
                <a href="https://github.com/acm-projects/adMYre" target="_blank" rel="noreferrer" className="links">
                <img src={admyre} alt="" className="projectsImg"></img>
                </a>
            </div>
            <a href="https://github.com/MatthewB145" target="_blank" rel="noreferrer">
            <button className="projectsBtn">See More!</button>
            </a>
        </section>
    )
}

export default Projects;