import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <video autoPlay={true} loop muted id={'video'} className='cover'>
            <source src={'https://media.istockphoto.com/id/1251555171/pl/filmy/vintage-fryzjer-wn%C4%99trze-ruch-wzd%C5%82u%C5%BC-krzese%C5%82-drewnianych-sto%C5%82%C3%B3w-i-luster-stylowe-studio-w%C5%82os%C3%B3w.mp4?s=mp4-640x640-is&k=20&c=6XbuvNh-4uNTREsK2sYXZAxAxbvPUXk2M3HD7Gej960='}/>
        </video>
        <App/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
