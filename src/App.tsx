import React from 'react';
import './App.css';
import {Header} from './Header';
import {Technologies} from './Technologies';
import {Footer} from './Footer';

function App() {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src="https://th.bing.com/th/id/OIP.fCDkjGeHw9blnre1P9Vj9wHaHa?rs=1&pid=ImgDetMain" alt="logo"/>
            </header>
            <nav className="nav">
                <div>Profile</div>
                <div>Messages</div>
            </nav>
            <div className='content'>
                Main content
            </div>


            {/*<Header/>*/}
            {/*<Technologies/>*/}
            {/*<Footer/>*/}
        </div>
    );
}

export default App;
