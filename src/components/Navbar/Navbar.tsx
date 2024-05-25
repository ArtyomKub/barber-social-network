import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile">PROFILE</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs">MESSAGES</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news">NEWS</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music">MUSIC</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings">SETTINGS</NavLink>
            </div>
        </nav>
    );
};

