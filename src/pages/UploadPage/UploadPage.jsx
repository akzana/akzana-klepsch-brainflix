import React from 'react';
import "./UploadPage.scss";
import { Link, useNavigate } from 'react-router-dom';

export default function UploadPage() {
    const nav = useNavigate();

    const handleForm = (event) => {
        event.preventDefault();
        alert("Video upload successful... Redirecting to Home Page");
        nav("/submit");
    };

    return (
        <div className='upload'>
            <h1 className="upload__heading">Upload Video</h1>
            <form
                className="upload__form"
                action="submit"
                onSubmit={handleForm}>
                <div className="upload__thumbnail-container">
                    <label
                        htmlFor="upload__thumbnail"
                        className="upload__thumbnail-label">VIDEO THUMBNAIL
                        <img
                            src="./src/assets/images/Upload-video-preview.jpg"
                            alt="upload video preview"
                            className="upload__thumbnail" />
                    </label>
                    <div className="upload__inputs-container">
                        <label
                            htmlFor="upload__video-title"
                            className="upload__video-title-label">TITLE YOUR VIDEO
                            <input
                                type="text"
                                className="upload__video-title"
                                id="upload__video-title"
                                placeholder="Add a title to your video" />
                        </label>
                        <label
                            htmlFor="upload__video-description"
                            className="upload__video-description-label">ADD A VIDEO DESCRIPTION
                            <input
                                placeholder="Add a description to your video"
                                id="upload__video-description"
                                type="text"
                                className="upload__video-description" />
                        </label>
                    </div>
                </div>
                <div className="upload__interaction-container">
                    <button className="upload__button upload__button--mobile" >PUBLISH</button>
                    <Link
                        to="/"
                        className='upload__cancel-link'>CANCEL</Link>
                    <button className="upload__button upload__button--tablet" >PUBLISH</button>
                </div>
            </form>
        </div>
    )
}
