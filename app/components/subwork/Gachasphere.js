import React from 'react';
import Gachagif from '../../images/gachasphereMobile.gif';
import Chrome from '../../images/chrome.svg';
import Github from '../../images/github.svg';


function Gachasphere() {
    return (
        <div id="gachasphere" className="subWork">
            <h2 className="subwork_title--primary">Gachasphere</h2>
            <h3 className="subwork_title--secondary">Capstone Project</h3>
            <img id="gachaGif" className="subwork_image" src={Gachagif} alt="Gachasphere mobile walkthrough"/>
            <p className="subwork_text">Gachasphere was built with the intention of being a central hub for all things mobile gaming. Due to the free-to-play nature of Gacha games, 
                most players are actively playing multiple games at the same time. Unfortunately, the communities for each individual game remain isolated. 
                Gachasphere hopes bridge the gap between existing communities and connect players from all over the world together.</p>
            <span className="subwork_links">
                <a href="https://github.com/brodri4/Gachasphere-client" target="_blank" rel="noreferrer">
                <img src={Github} className="work_icon"/></a>
                <a href="http://gachasphere.surge.sh/" target="_blank" rel="noreferrer">
                    <img src={Chrome} className="work_icon"/></a>
            </span>
        </div>
    )
}

export default Gachasphere;