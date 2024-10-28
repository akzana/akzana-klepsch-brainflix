import React from 'react';
import "./VideoInfo.scss";

export default function VideoInfo({ videoInfoObj }) {
    return (
        <div className='video-info'>
            <h1 className="video-info__heading">{videoInfoObj.title}</h1>
            <p className="video-info__channel">By {videoInfoObj.channel}</p>
            <p className="video-info__post-date">{new Date(videoInfoObj.timestamp).toLocaleDateString()}</p>
            <img src="src/assets/icons/views.svg" alt="views-icon" className="video-info__interaction-count-icon" /><p className="video-info__interaction-count">{videoInfoObj.views}</p>
            <img src="src/assets/icons/likes.svg" alt="likes-icon" className="video-info__interaction-count-icon" /><p className="video-info__interaction-count">{videoInfoObj.likes}</p>
            <p className="video-info__description">{videoInfoObj.description}</p>
            <p className="video-info__commment-count">{videoInfoObj.comments.length} Comments</p>
        </div>
    )
}
