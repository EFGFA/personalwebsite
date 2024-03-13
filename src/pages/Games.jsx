import React, { useState, useRef, useEffect } from 'react';
import './Games.css';

const Games = () => {

    const [interval, setintervalnum] = useState(3000);
    let speed;
    const item = useRef();
    const score = useRef(0); 
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        start();
        return () => {
            clearInterval(speed);
        };
    }, []);

    const start = () => {
        getmark();
        move();
    };

    const getmark = () => {
        document.getElementById('score').innerHTML = score.current;
        speed = window.setInterval(move, interval);
    };

    const move = () => {
        if (item.current) {
            const newX = Math.random() * 600;
            const newY = Math.random() * 500;
            item.current.addEventListener("click", checkclick, false);
            setPosition({ x: newX, y: newY });
        }
    };

    const checkclick = () => {
        item.current.removeEventListener("click", checkclick);
        score.current = score.current + 1;
        document.getElementById('score').innerHTML = score.current;
        setintervalnum( {interval} - 1000);
        clearInterval(speed);
        speed = window.setInterval(move, interval);
        move();
    };
    



    const resetSpeed = () => { 
        clearInterval(speed);
        setintervalnum(3000); 
        
        speed = window.setInterval(move, 3000);
        alert("Speed reset");
        
       
    };
    

    const resetScore = () => {
        score.current = 0;
        document.getElementById('score').innerHTML = score.current;
        alert("Score reset");
    };


    return (
        <div id="set">
            <label id="scorelabel">Score: </label>
            <label id="score">{score.current}</label>
       
            <button id="reset_speed" onClick={resetSpeed} type="button">reset speed</button>
            <button id="reset_score" onClick={resetScore} type="button">reset score</button>
            <div id="canvas">
                <img
                    src={require('./GamesPics/gura.gif')}
                    alt="gura"
                    width="70px"
                    height="100px"
                    ref={item}
                    style={{ position: 'absolute', left: position.x + 'px', top: position.y + 'px' }}
                />
            </div>
        </div>
    );
};

export default Games;
