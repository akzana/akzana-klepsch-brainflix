import React from 'react';
import VideoCard from '../VideoCard/VideoCard';
import "./VideoList.scss";
import { Link } from 'react-router-dom';

export default function VideoList({ filterVideoList }) {

    return (
        <div>
            <ul className="video-list">
                <h3 className="video-list__heading">NEXT VIDEOS</h3>
                {filterVideoList.map((video) =>
                    <Link
                        to={`/videos/${video.id}`}
                        key={video.id}>
                        <VideoCard
                            id={video.id}
                            img={video.image}
                            title={video.title}
                            channel={video.channel}
                        />
                    </Link>
                )}
            </ul>
        </div>
    )
}