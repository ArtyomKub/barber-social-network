import React from 'react';
import './VideoBackground.css'

export const VideoBackground = () => {
    return (
        <video autoPlay={true} loop muted id={'video'} className="cover">
            <source
                src={'https://media.istockphoto.com/id/1251555171/pl/filmy/vintage-fryzjer-wn%C4%99trze-ruch-wzd%C5%82u%C5%BC-krzese%C5%82-drewnianych-sto%C5%82%C3%B3w-i-luster-stylowe-studio-w%C5%82os%C3%B3w.mp4?s=mp4-640x640-is&k=20&c=6XbuvNh-4uNTREsK2sYXZAxAxbvPUXk2M3HD7Gej960='}/>
        </video>
    );
};

