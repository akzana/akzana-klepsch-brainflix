import React from 'react'
import "./VideoDetailsPage.scss"
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import VideoInfo from '../../components/VideoInfo/VideoInfo';
import CommentForm from '../../components/CommentForm/CommentForm';
import CommentSection from '../../components/CommentSection/CommentSection';
import VideoList from '../../components/VideoList/VideoList';
import { useState } from 'react';

export default function VideoDetailsPage({ videoDetails }) {
    const [onScreenVideo, setOnScreenVideo] = useState(videoDetails[0]);

    const handleSelectVideo = (clickedVideoID => {
        const selectVideo = videoDetails.find((video) => clickedVideoID === video.id);
        setOnScreenVideo(selectVideo);
        
    })

    const filterVideoList = videoDetails.filter((video) => video.id !== onScreenVideo.id);
    return (
        <div>
            <VideoPlayer
                videoURL={onScreenVideo.video}
                poster={onScreenVideo.image} />

            <div className="body-container">

                <div className="body-container__inner">

                    <VideoInfo
                        videoInfoObj={onScreenVideo} />

                    <CommentForm />

                    <CommentSection
                        commentArray={onScreenVideo.comments} />
                </div>

                <VideoList
                    filterVideoList={filterVideoList}
                    handleSelectVideo={handleSelectVideo} />
            </div>
        </div>
    )
}
