import React from 'react';
import "./CommentForm.scss";

export default function CommentForm() {
    return (
        <div className="comment-form">
            <form
                action="submit"
                className="comment-form__form">
                <div className='comment-form__container'>
                    <img
                        src="../../assets/images/Mohan-muruge.jpg"
                        alt="Mohan Muruge side profile"
                        className="comment-form__user-img" />
                    <label htmlFor="comment-form__user-input" className="comment-form__input-label">JOIN THE CONVERSATION
                        <input
                            placeholder="Add a new comment"
                            type="text"
                            className="comment-form__user-input"
                            id="comment-form__user-input" />
                    </label>
                </div>
                <button className="comment-form__button">COMMENT</button>
            </form>
        </div>
    )
}