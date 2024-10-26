import { useState } from 'react';
import videoDetails from "./data/video-details.json";
import "./App.scss";
import Header from './components/Header/Header';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import VideoInfo from './components/VideoInfo/VideoInfo';
import CommentForm from './components/CommentForm/CommentForm';
import CommentSection from './components/CommentSection/CommentSection';
import VideoList from './components/VideoList/VideoList';



export default function App() {
  console.log(videoDetails.video);
  
  const [onscreenVideo, setOnscreenVideo] = useState(videoDetails[0]);

  const handleSelectVideo = (clickedVideoID) => {
    const slctVideo = videoDetails.find((video) => clickedVideoID === video.id);
    setOnscreenVideo(slctVideo)
  }
  

  return (
    <>
      <Header />
      <VideoPlayer videoURL={onscreenVideo.video} />
      <VideoInfo />
      <CommentForm />
      <CommentSection />
      <VideoList filterVideoList = {filterVideoList} selectVideo={handleSelectVideo} />
    </>
  )
}