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
                <a href='/profile'>NEWS</a>
            </div>
            <div className={s.item}>
                <a href='/profile'>MUSIC</a>
            </div>
            <div className={s.item}>
                <a href='/profile'>SETTINGS</a>
            </div>
        </nav>
    );
};

