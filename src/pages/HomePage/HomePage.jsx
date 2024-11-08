import React, { useEffect, useState } from 'react';
import "./HomePage.scss";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import VideoInfo from '../../components/VideoInfo/VideoInfo';
import CommentForm from '../../components/CommentForm/CommentForm';
import CommentSection from '../../components/CommentSection/CommentSection';
import VideoList from '../../components/VideoList/VideoList';

export default function HomePage() {
    const { videoId } = useParams();
    const API_KEY = import.meta.env.VITE_API_KEY
    const [videos, setVideos] = useState([]); 
    const [selectedVideo, setSelectedVideo] = useState(null); //selectedVideo

    const getVideos = async () => {
        try {
            const response = await axios.get(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=${API_KEY}`);
            if (videoId) {
                getVideoById(videoId);
            } else {
                getVideoById(response.data[0].id);
            }
        } catch (err) {
            console.error("error fetching video", err)
        }
    };

    const getVideoById = async (id) => {
        try {
            const response = await axios.get(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${id}?api_key=${API_KEY}`);
            setSelectedVideo(response.data);

            const upNextVideos = await axios.get(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=${API_KEY}`)
            setVideos(upNextVideos.data.filter((video) => video.id !== videoId));
        } catch (error) {
            console.error("Error fetching video by ID", error)
        }
    };

    useEffect(() => {
        getVideos();

    }, []);

    useEffect(
        () => {
            videoId ? getVideoById(videoId) : getVideos();

            window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
            });

        }, [videoId]);

    if (!selectedVideo) { return (null) };

    return (
        <div>
            <VideoPlayer
                videoURL={selectedVideo.video}
                poster={selectedVideo.image} />

            <div className="body-container">

                <div className="body-container__inner">

                    <VideoInfo videoInfoObj={selectedVideo} />

                    <CommentForm />

                    <CommentSection commentArray={selectedVideo.comments} />
                </div>

                <VideoList filterVideoList={videos} />
            </div>
        </div>
    )
}