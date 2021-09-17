import React from 'react';
import Arrow from '../images/arrow.svg';


function Header(props) {
    const handleOnClick = () => {
        props.hideHeader()
    }

    return (
        <header>
            <div className="header_text">
                <h1 className="header_name">Davide Domenghini</h1>
                <h2 className="header_title">Frontend Developer</h2>
                <button className="header_button" onClick={handleOnClick}>View my work <span className="icon">navigate_next</span><img src={Arrow} alt="some example image" />

                </button>

            </div>
      </header>
    )
}

export default Header;