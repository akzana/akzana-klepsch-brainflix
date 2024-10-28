import React from 'react';
import CommentCard from '../CommentCard/CommentCard';
import "./CommentSection.scss";

export default function CommentSection({ commentArray }) {

    return (
        <div className='comment-section'>
            <ul className="comment-section__list">
                {commentArray.map((comment) =>
                    <CommentCard
                        key={comment.id}
                        id={comment.id}
                        name={comment.name}
                        time={comment.timestamp}
                        likes={comment.likes}
                        comment={comment.comment}
                    />
                )}
            </ul>
        </div>
    )
}