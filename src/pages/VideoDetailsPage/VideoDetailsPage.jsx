import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./VideoDetailsPage.scss";
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import VideoInfo from '../../components/VideoInfo/VideoInfo';
import CommentForm from '../../components/CommentForm/CommentForm';
import CommentSection from '../../components/CommentSection/CommentSection';
import VideoList from '../../components/VideoList/VideoList';

export default function VideoDetailsPage() {
    // console.log("videoDetails: ", videoDetails);
    
    

    const [videoDetails, setVideoDetails] = useState([]);
    console.log("HomePage Response",videoDetails);
    async function getVideos() {
        try {
            const response = await axios.get(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=${import.meta.env.API_KEY}`);
            
            setVideoDetails(response.data);
        } catch (error) {
            console.error("Error fetching video", error)
        }
    }

    useEffect(() => { getVideos(); }, []);
    

    
    // console.log("from params: ", videoId);

    const [onScreenVideo, setOnScreenVideo] = useState([]);
    // console.log("onScreenVideo: ", onScreenVideo);
    

    // const handleSelectVideo = (clickedVideoID => {
    //     const selectVideo = videoDetails.find((video) => clickedVideoID === video.id);
    //     setOnScreenVideo(selectVideo);
    //     console.log(onScreenVideo)
    // })
    const { videoId } = useParams();

    const getVideoById = async (id) => {
        try {import.meta.env.API_KEY
            const response = await axios.get(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${id}?api_key=${import.meta.env.API_KEY}`);
            setOnScreenVideo(response.data);
            console.log("From axios response:", response);

        } catch (error) {
            console.error("Error fetching video by ID", error)
        }
    };
    useEffect(() => { getVideoById(videoId) }, [videoId])

    const handleSelectVideo = (clickedVideoID => {
        // const selectVideo = onScreenVideo.find((video) => clickedVideoID === video.id);
        // setOnScreenVideo(selectVideo);

        console.log("From handleSelectVideo: ", onScreenVideo)
    })

    

    const filterVideoList = videoDetails.filter((video) => video.id !== onScreenVideo.id);
    console.log(videoDetails);
    

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