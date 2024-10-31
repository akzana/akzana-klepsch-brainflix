import React from 'react';
import "./CommentCard.scss";

export default function CommentCard({ likes, time, name, comment }) {
    return (
        <div>
            <li className="comment">
                <img src="" alt="user image" onerror="this.style.display='none'" className='comment__img comment__img--default' />
                <div className="comment__container">
                    <div className="comment__channel-info">
                        <p className="comment__name">{name}</p>
                        <p className="comment__time">{new Date(time).toLocaleDateString()}</p>
                    </div>
                    <p className="comment__comment">{comment}</p>
                </div>
            </li>
        </div>
    )
}