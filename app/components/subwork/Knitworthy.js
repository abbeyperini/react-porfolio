import React from 'react';
import Chrome from '../../images/chrome.svg';
import Github from '../../images/github.svg';
import Knitgif from '../../images/knitworthygif.gif';

function Knitworthy() {
    return (
        <div id="knitworthy" className="subWork">
            <h2 className="subwork_title--primary">Knitworthy</h2>
            <h3 className="subwork_title--secondary">Front End Project</h3>
            <img className="subwork_image" src={Knitgif} alt="gif of a user navigating Knitworthy"/>
            <p className="subwork_text">In the knitting/crochet/fiber arts community, someone who appreciates a handmade gift and takes care of it is considered "knitworthy." 
                Ravelry, a fiber arts website with over 9 million users, created a hub for sharing information about materials and techniques and a 
                way to exchange and sell patterns in pdf form. Users can keep track of their yarn and their projects, entering stats about when they 
                started and finished, the yarn they used, etc. Knitworthy uses the Ravelry API to pull information about users' projects and compares 
                project data to real life time and length measurements to put the amount of love that goes into a handmade gift into perspective for 
                someone who does not knit or crochet.</p>
            <span className="subwork_links">
                <a href="https://github.com/abbeyperini/Knitworthy" target="_blank" rel="noreferrer">
                    <img src={Github} className="work_icon"/></a>
                <a href="http://knitworthy.net/" target="_blank" rel="noreferrer">
                    <img src={Chrome} className="work_icon"/></a>
            </span>
        </div>
    )
}

export default Knitworthy;