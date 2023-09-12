import React from "react";
import "./navbar.css";
import logo from '../../Photos/My-Logo-White.png';
import {Link} from "react-scroll";
import contactIcon from "../../Photos/envelope.png";

const NavBar = () =>{
    return (
        <nav className="navbar">
            <img src={logo} alt="" className="logo"/>
            <div className="desktopSections">
                <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-160}  duration={500} className="desktopSectionItem">Home</Link>
                <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-140}  duration={500} className="desktopSectionItem">Skills</Link>
                <Link activeClass="active" to='projects' spy={true} smooth={true} offset={-100}  duration={500} className="desktopSectionItem">Projects</Link>
            </div>
            <button className="desktopButton" onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
                <img src={contactIcon} alt="" className="desktopButtonIcon" />Contact Me
            </button>
        </nav>
    )
}

export default NavBar