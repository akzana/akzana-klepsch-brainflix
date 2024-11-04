import React from 'react';
import "./VideoInfo.scss";

export default function VideoInfo({ videoInfoObj }) {

    return (
        <div className='video-info'>
            <h1 className="video-info__heading">{videoInfoObj.title}</h1>
            <div className="video-info__container">

                <div className="video-info__channel-info">
                    <p className="video-info__channel">By {videoInfoObj.channel}</p>
                    <p className="video-info__post-date">{new Date(videoInfoObj.timestamp).toLocaleDateString()}</p>
                </div>
                <div className="video-info__interaction-info">
                    <span>
                        <img
                            src="../../src/assets/icons/views.svg"
                            alt="views-icon"
                            className="video-info__interaction-count-icon" />
                        <p className="video-info__interaction-count">{videoInfoObj.views}</p>
                    </span>
                    <span>
                        <img
                            src="../../src/assets/icons/likes.svg"
                            alt="likes-icon"
                            className="video-info__interaction-count-icon" />
                        <p className="video-info__interaction-count">{videoInfoObj.likes}</p>
                    </span>
                </div>
            </div>
            <p className="video-info__description">{videoInfoObj.description}</p>
            <p className="video-info__comment-count">{videoInfoObj.comments.length} Comments</p>
        </div>
    )
}