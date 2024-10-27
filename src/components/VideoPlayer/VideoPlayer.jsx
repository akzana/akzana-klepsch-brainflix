import React from 'react';
import "./VideoPlayer.scss"

export default function VideoPlayer({videoURL, poster}) {
    return (
        <div>
            <video poster={poster} controls className="video-player" width="250" type="video/webm">
                <source src={videoURL} className="video-player__source" />
            </video>
        </div>
    )
}
