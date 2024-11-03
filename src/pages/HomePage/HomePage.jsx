import React, { useEffect } from 'react';
import { useState } from 'react';
import "./HomePage.scss";
import axios from 'axios';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import VideoDetailsPage from '../VideoDetailsPage/VideoDetailsPage';

export default function HomePage() {

    return (
        <div>
            <VideoDetailsPage />
        </div>
    )
}