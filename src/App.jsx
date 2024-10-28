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

  const [onscreenVideo, setOnscreenVideo] = useState(videoDetails[0]);

  const handleSelectVideo = (clickedVideoID => {
    const selectVideo = videoDetails.find((video) => clickedVideoID === video.id);
    setOnscreenVideo(selectVideo);
  })

  const changeActiveVideo = (id) => {
    setActiveVideo(id)
  }

  const filterVideoList = videoDetails.filter((video) => video.id !== onscreenVideo.id);

  return (
    <>
      <Header />
      <VideoPlayer videoURL={onscreenVideo.video} poster={onscreenVideo.image} />
      <VideoInfo videoInfoObj={onscreenVideo} />
      <CommentForm />
      <CommentSection commentArray={onscreenVideo.comments} />
      <VideoList filterVideoList={filterVideoList} handleSelectVideo={handleSelectVideo} />
    </>
  )
}