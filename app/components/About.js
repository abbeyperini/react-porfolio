import React from 'react';
import headshot from '../images/sabrina-smirk800.jpg';
import JSLogo  from '../images/javascript.svg';
import PythonLogo from '../images/python.svg';
import HTMLLogo from '../images/html.svg';
import CSSLogo from '../images/css3.svg';
import NodeLogo from '../images/node.svg';
import ReactLogo from '../images/react.svg';
import ReduxLogo from '../images/redux.svg';
import PostgreSQLLogo from '../images/postgresql.svg';


function About() {

    return (
        <div className="container_about">
            <h2 className="section_title">About Abbey</h2>
            <div className="subAbout">
                <img alt="Abbey Perini" src={headshot} className="about_headshot" />
                <p className="about_text">My name is Abbey Perini, but my friends call me Abbey Normal. I've always been an out of the box thinker 
                    and worked in multiple industries before falling in love with coding. My organization and attention to detail
                    are outstanding, but my main strength is in spotting problems and solving them. You can see some of my more
                    creative problem solving in my work. For more details about my experience and skills, download my <a href="" download="AbbeyPeriniResume">resume</a>.
                    Outside of work, I am a person of many hobbies. I'm a certified yoga teacher. I love creating fiber arts projects 
                    and costumes, but I also dabble in video games, embroidery, baking, cooking, and art of many kinds. I live just
                    outside Atlanta with my husband and dog.</p>
                <div className="container_skills-icon">
                    {/* <JSLogo className="skills-icon" title="JavaScript" />
                    <PythonLogo className="skills-icon" />
                    <HTMLLogo className="skills-icon" />
                    <CSSLogo className="skills-icon" />
                    <NodeLogo className="skills-icon" />
                    <ReactLogo className="skills-icon" />
                    <ReduxLogo className="skills-icon" title="Redux" /> */}
                    {/* <Rute component={PostgreSQLLogo} className="skills-icon" /> */}
                </div>
            </div>
        </div>
    )
}

export default About;