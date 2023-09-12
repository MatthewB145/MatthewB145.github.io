import React from "react";
import './intro.css';
import bg from "../../Photos/IMG_2563.jpg";
import btnImg from "../../Photos/angle-right.png";
import {Link} from "react-scroll";

const Intro = () => {
    return(<section id="intro">
        <div className="introContent">
            <span className="hello">Hi!</span>
            <span className="introText">I'm<span className="introName"> Matthew</span>,<br />Software Engineer</span>
            <p className="introPara">I am currently a student at UT Dallas completing a degree in Computer Science <br /> looking for opportunities to showcase my skills in the industry</p>
            <Link><button className="btn">Hire Me!</button></Link>
        </div>
        <img src={bg} alt="" className="bg"></img>
    </section>
    )
}


export default Intro;







