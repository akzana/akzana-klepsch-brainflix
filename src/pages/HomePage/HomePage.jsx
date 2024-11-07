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

    const [videosDetails, setVideosDetails] = useState([]);
    const [onScreenVideo, setOnScreenVideo] = useState(null);

    const getVideoById = async () => {
        try {
            const response = await axios.get(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${videoId}?api_key=${import.meta.env.VITE_API_KEY}`);
            setOnScreenVideo(response.data);

            const nextVideos = await axios.get(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=${import.meta.env.VITE_API_KEY}`)
            setVideosDetails(nextVideos.data.filter((video) => video.id !== videoId));

        } catch (error) {
            console.error("Error fetching video by ID", error)
        }
    };

    async function defaultVideo() {
        try {
            const videoList = await axios.get(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=${import.meta.env.API_KEY}`)
            setVideosDetails(videoList.data.slice(1))

            const defaultVid = await axios.get(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${videoList.data[0].id}?api_key=${import.meta.env.API_KEY}`)

            setOnScreenVideo(defaultVid.data)
        }
        catch (error) { console.error("Error fetching default video") };
    }

    useEffect(() => {
        videoId ? getVideoById() : defaultVideo();

        return () => {
            setOnScreenVideo(null);
            setVideosDetails([]);
        };
    }, [videoId]);

    if (!onScreenVideo) { return (null) };

    return (
        <div>
            <VideoPlayer
                videoURL={onScreenVideo.video}
                poster={onScreenVideo.image} />

            <div className="body-container">

                <div className="body-container__inner">

                    <VideoInfo videoInfoObj={onScreenVideo} />

                    <CommentForm />

                    <CommentSection commentArray={onScreenVideo.comments} />
                </div>

                <VideoList filterVideoList={videosDetails} />
            </div>
        </div>
    )
}