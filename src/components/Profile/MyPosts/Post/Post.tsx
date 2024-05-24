import React from 'react';
import s from './Post.module.css';

export const Post = () => {
    return (
        <div className={s.item}>
            <img
                src="https://www.famousbirthdays.com/faces/siriboe-kofi-image.jpg"
                alt="avatar"/>
            Post 1
            <div>
                <button>Like</button>
            </div>
        </div>
    );
};

