import React from 'react';
import "./Header.scss";

export default function Header() {
    return (
        <div>
            <div className="heading">
                <a href="index.html" className="heading__link">
                    <img src="src\assets\logo\BrainFlix-logo.svg" alt="brainflix-icon" className="heading__brainflix-icon" />
                </a>
            </div>
            <div className="header-form">
                <form type="submit" className="header-form__form">
                    <input id="search" type="text" placeholder='Search' className="header-form__search-bar" />
                    <img src="src\assets\images\Mohan-muruge.jpg" alt="user-image" className="header-form__user-img" />
                    <button className="header-form__button">Upload</button>
                </form>
            </div>
        </div>
    )
}