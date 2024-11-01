import "./App.scss";
import Header from './components/Header/Header';
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function App() {



  return (
    <>
      <Header />


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

    </>
/* 
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path=`/` element={} />
      <Route path=`*` element={<NotFoundPage/>} />

      </Route>
    </Routes>
  </BrowserRouter>

*/
  )
}
