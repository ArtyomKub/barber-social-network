import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';

export const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src="https://static.wixstatic.com/media/b40ba8e9258a4c589b794d706d9d1e0f.jpg/v1/crop/x_0,y_214,w_4000,h_1191/fill/w_940,h_280,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Man%20Getting%20a%20Haircut.jpg"
                    alt="content"/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>
    );
};

