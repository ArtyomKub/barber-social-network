import React from 'react';
import s from './Post.module.css';

type PostType = {
    message: string
}

export const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img
                src="https://www.famousbirthdays.com/faces/siriboe-kofi-image.jpg"
                alt="avatar"/>
            {props.message}
            <div>
                <button>Like</button>
            </div>
        </div>
    );
};

