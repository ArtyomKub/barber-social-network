import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <div>
                    <button>Add Post</button>
                    <button>Delete Post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
};

