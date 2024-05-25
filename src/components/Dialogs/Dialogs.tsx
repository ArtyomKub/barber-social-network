import React from 'react';
import s from './Dialogs.module.css'


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    Artyom
                </div>
                <div className={s.dialog}>
                    Uliana
                </div>
                <div className={s.dialog}>
                    Teona
                </div>
                <div className={s.dialog}>
                    Sofia
                </div>
                <div className={s.dialog}>
                    Natalia
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
