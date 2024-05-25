import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                   <NavLink to='/dialogs/1'>Artyom</NavLink>


                    {/*<NavLink to="/profile" className={navData => navData.isActive ? s.active : s.item}>PROFILE</NavLink>*/}


                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/1'>Uliana</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/1'>Teona</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/1'>Sofia</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/1'>Natalia</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you</div>
                <div className={s.message}>I am GOD!</div>
            </div>
        </div>
    );
};
