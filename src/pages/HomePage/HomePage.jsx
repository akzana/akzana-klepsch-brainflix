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
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const apiKey = import.meta.env.VITE_API_KEY;
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const getVideos = async () => {
        try {
            const response = await axios.get(`${baseUrl}/videos?api_key=${apiKey}`);
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
            const response = await axios.get(`${baseUrl}/videos/${id}?api_key=${apiKey}`);
            setSelectedVideo(response.data);

            const upNextVideos = await axios.get(`${baseUrl}/videos?api_key=${apiKey}`)
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