import React from 'react';
import s from './Navbar.module.css';

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <a href='/profile'>PROFILE</a>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <a href='/dialogs'>MESSAGES</a>
            </div>
            <div className={s.item}>
                <a href='/news'>NEWS</a>
            </div>
            <div className={s.item}>
                <a href='/music'>MUSIC</a>
            </div>
            <div className={s.item}>
                <a href='/settings'>SETTINGS</a>
            </div>
        </nav>
    );
};

