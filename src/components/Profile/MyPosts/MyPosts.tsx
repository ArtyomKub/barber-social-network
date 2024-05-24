import React from 'react';
import s from './MyPosts.module.css';

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>New post</div>
            <div className={s.posts}>
                <div className={s.item}>Post 1</div>
                <div className={s.item}>Post 2</div>
                <div className={s.item}>Post 3</div>
                <div className={s.item}>Post 4</div>
            </div>
        </div>
    );
};

