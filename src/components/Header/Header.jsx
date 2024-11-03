import React from 'react';
import "./Header.scss";
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="header">
            <div className="heading">
                <Link to="/"><img src="src\assets\logo\BrainFlix-logo.svg" alt="brainflix-logo" className="heading__brainflix-icon" /></Link>
            </div>
            <div className="header-form">
                <form action="submit" className="header-form__form">
                    <div className="header-form__container">
                        <input id="search" type="text" placeholder='Search' className="header-form__search-bar" />
                        <button className="header-form__button header-form__button--tablet">Upload</button>
                        <img src="src\assets\images\Mohan-muruge.jpg" alt="Mohan Muruge side profile" className="header-form__user-img" />
                    </div>
                    <button className="header-form__button header-form__button--mobile">Upload</button>
                </form>
            </div>
        </div>
    )
}