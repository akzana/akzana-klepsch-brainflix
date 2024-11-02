import "./App.scss";
import Header from './components/Header/Header';
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import UploadPage from "./pages/UploadPage/UploadPage";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import VideoDetails from "./pages/VideoDetailsPage/VideoDetailsPage";

export default function App() {

  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/submit" element={<HomePage />} />
        <Route path="/video" element={<Navigate to="/" />} />
        <Route path="/video/:videoid" element={<VideoDetails />} />
        <Route path="/upload" element={<UploadPage />} />
      </Routes>

    </BrowserRouter >
  )
}