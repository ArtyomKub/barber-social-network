import React from 'react';
import s from './Navbar.module.css';

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <a>PROFILE</a>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <a>MESSAGES</a>
            </div>
            <div className={s.item}>
                <a>NEWS</a>
            </div>
            <div className={s.item}>
                <a>MUSIC</a>
            </div>
            <div className={s.item}>
                <a>SETTINGS</a>
            </div>
        </nav>
    );
};

