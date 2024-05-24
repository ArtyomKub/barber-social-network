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
                <Post message="Hi! I am looking a good Barber" likesCount={10}/>
                <Post message="What a FUCK!" likesCount={3}/>
                <Post message="Ulyana is the Best Barber" likesCount={51}/>
                <Post message="No, the best Barber is Maximus" likesCount={12}/>
            </div>
        </div>
    );
};

