import React from 'react';
import "./Header.scss";

export default function Header() {
    return (
        <div className="header">
            <div className="heading">
                <a href="index.html" className="heading__link">
                    <img src="src\assets\logo\BrainFlix-logo.svg" alt="brainflix-icon" className="heading__brainflix-icon" />
                </a>
            </div>
            <div className="header-form">
                <form type="submit" className="header-form__form">
                    <div className="header-form__container">
                        <input id="search" type="text" placeholder='Search' className="header-form__search-bar" />
                        <button className="header-form__button header-form__button--tablet">Upload</button>
                        <img src="src\assets\images\Mohan-muruge.jpg" alt="user-image" className="header-form__user-img" />
                    </div>
                    <button className="header-form__button header-form__button--mobile">Upload</button>
                </form>
            </div>
        </div>
    )
}