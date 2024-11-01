import "./App.scss";
import Header from './components/Header/Header';
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import UploadPage from "./pages/UploadPage/UploadPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Routes>
        <Route path="/upload" element={<UploadPage />} />
      </Routes>
    </BrowserRouter >
  )
}
