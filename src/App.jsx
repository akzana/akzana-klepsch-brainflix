import "./App.scss";
import Header from './components/Header/Header';
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import UploadPage from "./pages/UploadPage/UploadPage";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

export default function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/submit" element={<Navigate to="/" />} />
        <Route path="/videos" element={<Navigate to="/" />} />
        <Route path="/videos/:videoId" element={<HomePage />} />
        <Route path="/upload" element={<UploadPage />} />
      </Routes>
    </BrowserRouter >
  )
}