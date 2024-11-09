import React from 'react';
import "./UploadPage.scss";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function UploadPage() {
    const nav = useNavigate();
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const apiKey = import.meta.env.VITE_API_KEY;

    const handleForm = (event) => {
        event.preventDefault();
        const postVideo = async (videoObj) => {
            try {
                // const videoJSONString = JSON.stringify(videoObj);
                const postReq = await axios.post(`${baseUrl}/videos?api_key=${apiKey}`, videoObj);
                return postReq;
            }
            catch (err) {
                console.error(err);
            }
        }
        const newUpload = {
            title: event.target.title.value,
            description: event.target.description.value,
        }
        console.log(newUpload);

        postVideo(newUpload);
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
                                name="title"
                                placeholder="Add a title to your video" />
                        </label>
                        <label
                            htmlFor="upload__video-description"
                            className="upload__video-description-label">ADD A VIDEO DESCRIPTION
                            <input
                                placeholder="Add a description to your video"
                                id="upload__video-description"
                                name='description'
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
