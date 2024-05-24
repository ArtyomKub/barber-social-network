import React from 'react';
import s from './Header.module.css';

export const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://png.pngtree.com/png-vector/20220606/ourmid/pngtree-barbershop-logo-png-image_4925346.png"
                 alt="logo"/>
        </header>
    );
};
