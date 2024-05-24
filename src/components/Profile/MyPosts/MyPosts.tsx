import React from 'react';
import s from './MyPosts.module.css';

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
                <button>Delete Post</button>
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    <img
                        src="https://e3.365dm.com/21/10/768x432/skynews-colin-kaepernick-black-and-white_5561588.jpg?20211027182700"
                        alt="avatar"/>
                    Post 1
                </div>
                <div className={s.item}>Post 2</div>
                <div className={s.item}>Post 3</div>
                <div className={s.item}>Post 4</div>
            </div>
        </div>
    );
};

