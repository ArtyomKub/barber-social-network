import React from 'react';
import s from './Header.module.css';

export const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwBKnXwLKErdLytz8S-8-AJZeX1oz8ldv1Fufgq6_sTtuzBrtuRmrIKqaYw2bqvzuNEbQ&usqp=CAU"
                 alt="logo"/>
        </header>
    );
};
