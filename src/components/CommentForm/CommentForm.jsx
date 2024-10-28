import React from 'react';
import "./CommentForm.scss";

export default function CommentForm() {
    return (
        <div className="comment-form">
            <h3 className="comment-form__section-heading">JOIN THE CONVERSATION</h3>
            <form action="submit" className="comment-form__form">
                <img src="src\assets\images\Mohan-muruge.jpg" alt="user-image" className="comment-form__user-img" />
                <input placeholder="Add a new comment" type="textarea" className="comment-form__user-input" id="comment-form__user-input" />
                <button className="comment-form__button">COMMENT</button>
            </form>
        </div>
    )
}