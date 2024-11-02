import React from 'react'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import VideoInfo from '../../components/VideoInfo/VideoInfo';
import CommentForm from '../../components/CommentForm/CommentForm';
import CommentSection from '../../components/CommentSection/CommentSection';
import VideoList from '../../components/VideoList/VideoList';
import { useState } from 'react';

import videoDetails from "../../data/video-details.json" //to be replaced with API call

export default function VideoDetails() {
    const [onscreenVideo, setOnscreenVideo] = useState(videoDetails[0]);

    const handleSelectVideo = (clickedVideoID => {
        const selectVideo = videoDetails.find((video) => clickedVideoID === video.id);
        setOnscreenVideo(selectVideo);
    })

    const filterVideoList = videoDetails.filter((video) => video.id !== onscreenVideo.id);
    return (
        <div>
            <VideoPlayer
                videoURL={onscreenVideo.video}
                poster={onscreenVideo.image} />

            <div className="body-container">

                <div className="body-container__inner">

                    <VideoInfo
                        videoInfoObj={onscreenVideo} />

                    <CommentForm />

                    <CommentSection
                        commentArray={onscreenVideo.comments} />
                </div>

                <VideoList
                    filterVideoList={filterVideoList}
                    handleSelectVideo={handleSelectVideo} />
            </div>
        </div>
    )
}
