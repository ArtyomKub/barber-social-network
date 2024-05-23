import React from 'react';
import './App.css';
import {Header} from './Header';
import {Technologies} from './Technologies';
import {Footer} from './Footer';

function App() {
    return (
        <div className={'app-wrapper'}>
            <header>
                <img src="https://i.pinimg.com/736x/8d/0c/79/8d0c79c25cee23c9af669d1ff9ee4246.jpg" alt="logo"/>
            </header>
            <nav>
                <div>Profile</div>
                <div>Messages</div>
            </nav>
            <div>
                Main content
            </div>


            {/*<Header/>*/}
            {/*<Technologies/>*/}
            {/*<Footer/>*/}
        </div>
    );
}

export default App;
