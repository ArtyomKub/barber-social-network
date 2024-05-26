import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div >
                    <div>
                        <NavLink to={'dialogs/1'}
                                 className={dialogsData => dialogsData.isActive ? s.active : s.dialogsItems}>Artsem</NavLink>
                    </div>
                    <div>
                        <NavLink to={'dialogs/2'}
                                 className={dialogsData => dialogsData.isActive ? s.active : s.dialogsItems}>Ulyana</NavLink>
                    </div>
                    <div>
                        <NavLink to={'dialogs/3'}
                                 className={dialogsData => dialogsData.isActive ? s.active : s.dialogsItems}>Teona</NavLink>
                    </div>
                    <div>
                        <NavLink to={'dialogs/4'}
                                 className={dialogsData => dialogsData.isActive ? s.active : s.dialogsItems}>Sofia</NavLink>
                    </div>
                    <div>

                        <NavLink to={'dialogs/5'}
                                 className={dialogsData => dialogsData.isActive ? s.active : s.dialogsItems}>Natalia</NavLink>
                    </div>
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
