import React from 'react';
import './App.css';
import {Header} from './Header';
import {Technologies} from './Technologies';
import {Footer} from './Footer';

function App() {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img src="https://th.bing.com/th/id/OIP.fCDkjGeHw9blnre1P9Vj9wHaHa?rs=1&pid=ImgDetMain" alt="logo"/>
            </header>
            <nav className="nav">
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className="content">
                <img
                    src="https://static.wixstatic.com/media/b40ba8e9258a4c589b794d706d9d1e0f.jpg/v1/crop/x_0,y_214,w_4000,h_1191/fill/w_940,h_280,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Man%20Getting%20a%20Haircut.jpg"
                    alt="content"/>
            </div>


            {/*<Header/>*/}
            {/*<Technologies/>*/}
            {/*<Footer/>*/}
        </div>
    );
}

export default App;
