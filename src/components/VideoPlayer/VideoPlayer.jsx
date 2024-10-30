import React from 'react';
import "./VideoPlayer.scss"

export default function VideoPlayer({ videoURL, poster }) {
    return (
        <div className="video-player">
            <video
                poster={poster}
                controls
                className="video-player__player"
                width="250" type="video/webm">
                <source
                    src={videoURL}
                    className="video-player__source" />
            </video>
        </div>
    )
}
