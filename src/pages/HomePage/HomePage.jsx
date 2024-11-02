import React, { useEffect } from 'react';
import { useState } from 'react';
import "./HomePage.scss";
import axios from 'axios';
import VideoDetailsPage from '../VideoDetailsPage/VideoDetailsPage';

export default function HomePage() {
    const baseURL = "https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=";
    const API_KEY = "49883973-195f-4a6b-86c1-c945da25bccf";

    const [videoDetails, setVideoDetails] = useState([]);

    async function getVideos() {
        try {
            const response = await axios.get(`${baseURL}${API_KEY}`);
            console.log(response.data);
            setVideoDetails(response.data);
        } catch (error) {
            console.error("Error fetching video", error)
        }
    }

    useEffect(() => { getVideos(); }, [])



    return (
        <div>
            <VideoDetailsPage videoDetails={videoDetails} />
        </div>
    )
}