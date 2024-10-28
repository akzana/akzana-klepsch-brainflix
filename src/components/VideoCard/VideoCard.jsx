import React from 'react';
import "./VideoCard.scss";

export default function VideoCard({ id, img, handleSelectVideo, channel, title }) {
    const clickHandler = () => {
        handleSelectVideo(id)
    }

    return (
        <div onClick={clickHandler} >
            <li className="video-list-item" key={id}>
                <img src={img} alt={`${title}`} className="video-list-item__img" />
                <div className="video-list-item__video-info">
                    <p className="video-list-item__video-title">{title}</p>
                    <p className="video-list-item__video-channel">{channel}</p>
                </div>
            </li>
        </div>
    )
}