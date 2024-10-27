import React from 'react';
import "./VideoInfo.scss";

export default function VideoInfo({videoInfoObj}) {
    const postDate = new Date(videoInfoObj.timestamp)
    return (
        <div className='video-info'>
            <p className="video-info__channel">By {videoInfoObj.channel}</p>
            <p className="video-info__post-date">{postDate}</p>
        </div>
    )
}
