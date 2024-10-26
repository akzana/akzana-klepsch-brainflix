import React from 'react';
import "VideoPlayer.scss"

export default function VideoPlayer(videoURL) {
    return (
        <div>
            <video src={videoURL} className="video-player"></video>
        </div>
    )
}
