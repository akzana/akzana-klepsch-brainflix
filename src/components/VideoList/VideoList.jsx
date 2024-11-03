import React from 'react';
import VideoCard from '../VideoCard/VideoCard';
import "./VideoList.scss";
import { Link } from 'react-router-dom';

export default function VideoList({ filterVideoList, handleSelectVideo }) {

    return (
        <div>
            <ul className="video-list">
                <h3 className="video-list__heading">NEXT VIDEOS</h3>
                {/* {filterVideoList.map((video) =>
                <Link to={`/videos/${id}`}>
                    <VideoCard
                        key={video.id}
                        id={video.id}
                        img={video.image}
                        title={video.title}
                        channel={video.channel}
                        handleSelectVideo={handleSelectVideo}
                    /></Link>
                )} */}
            </ul>
            
        </div>
    )
}