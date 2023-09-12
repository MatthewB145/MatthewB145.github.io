import React from "react";
import "./skills.css";
import reactpic from "../../Photos/icons8-react-60.png";
import javapic from "../../Photos/icons8-java-50.png";
import cpic from "../../Photos/icons8-c-50.png";
import firepic from "../../Photos/icons8-firebase-48.png";
import htmlpic from "../../Photos/icons8-html-50.png";
import pythonpic from "../../Photos/icons8-python-50.png";

const Skills = () =>{
    return (
        <section id='skills'>
            <span className="skillTitle">My <span className="skillt">Skills</span></span>
            <span className="skillDescription">I am a skilled developer who specialized in full stack development as well as Java and Python programming. I have experience building fully responsive mobile and web apps as well as creating creating efficient algorithms and scripts.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={javapic} alt="Java" className="skillBarImg"></img>
                    <div className="skillBarText">
                        <h2>Java Proficiency</h2>
                        <p>Tested algorithm efficientcy and written algorithms in the Java language</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={htmlpic} alt="Html" className="skillBarImg"></img>
                    <div className="skillBarText">
                        <h2>Html/Css/JavaScript</h2>
                        <p>Created fully responsive site using Html, Css, and JavaScript</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={cpic} alt="C++" className="skillBarImg"></img>
                    <div className="skillBarText">
                        <h2>C++ Proficiency</h2>
                        <p></p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={reactpic} alt="React" className="skillBarImg"></img>
                    <div className="skillBarText">
                        <h2>React.js/React Native</h2>
                        <p>Built fully responsive mobile apps using React Native as well as single page websites using React.js</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={firepic} alt="Firebase" className="skillBarImg"></img>
                    <div className="skillBarText">
                        <h2>Firebase/Cloud Firestore</h2>
                        <p>Used database functions of Firebase and Cloud Firestore in mobile development</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={pythonpic} alt="Python" className="skillBarImg"></img>
                    <div className="skillBarText">
                        <h2>Python Proficiency</h2>
                        <p>Used Python for script writing and machine learning development</p>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Skills;