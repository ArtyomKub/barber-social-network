import React from 'react';
import s from './Post.module.css';

export const Post = () => {
    return (
        <div className={s.item}>
            <img
                src="https://e3.365dm.com/21/10/768x432/skynews-colin-kaepernick-black-and-white_5561588.jpg?20211027182700"
                alt="avatar"/>
            Post 1
            <div>
                <button>Like</button>
            </div>
        </div>
    );
};

