import React from 'react'

export default function CommentCard({ likes, time, name, comment}) {
    return (
        <div>
            <li className="comment">
                <p className="comment__name">{name}</p>
                <p className="comment__time">{new Date(time).toLocaleDateString()}</p>
                <p className="comment__comment">{comment}</p>

            </li>
        </div>
    )
}
