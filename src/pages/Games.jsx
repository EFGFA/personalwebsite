import React, { useState, useRef, useEffect } from 'react';
import './Games.css';

const Games = () => {

    let interval = 3000;
    const item = useRef();
    const score = useRef(0); 
    const intervalspeed = useRef(null); 
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        getmark();
        move();
        start();
        getspeed();
 
    }, []
    );
    

    const start = () => {
       
        intervalspeed.current=setInterval(() => move(), interval);
        

    }

    const getmark = () => {

        document.getElementById('score').innerHTML = score.current;
            
    };
    const getspeed = () => {

        document.getElementById('speed').innerHTML = interval;
            
    };

    const move = () => {
        if (item.current) {
            const newX = Math.random() * 600;
            const newY = Math.random() * 500;
            setPosition({ x: newX, y: newY });

        }
        item.current.addEventListener("click", checkclick, false);

    };


    const checkclick = () => {
        item.current.removeEventListener("click", checkclick);
        score.current = score.current + 1;
        document.getElementById('score').innerHTML = score.current;
        clearInterval(intervalspeed.current);
        interval = interval - 300;
        start()
        move();      
        getspeed();


        
    };
    



    const resetSpeed = () => { 
        item.current.removeEventListener("click", checkclick);

        clearInterval(intervalspeed.current);
        interval = 3000;
        intervalspeed.current=setInterval(() => move(), interval);
        getspeed();
       

    };
    

    const resetScore = () => {
        score.current = 0;
        document.getElementById('score').innerHTML = score.current;
        alert("Score reset");
    };


    return (
        <div id="set">
            <label id="scorelabel">Score:  </label>
            <label id="score">{score.current}</label>
            <label id="speedlabel">Invertal(ms):  </label>
            <label id="speed"></label>
            <br />
       
            <button id="reset_speed" onClick={resetSpeed} type="button">reset speed</button>
            <button id="reset_score" onClick={resetScore} type="button">reset  score</button>
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


/**
 * 
 * import React, { useState, useRef, useEffect } from 'react';
import './Games.css';

const Games = () => {
    const [interval, setIntervalnum] = useState(3000);
    const item = useRef();
    const score = useRef(0);
    const timeoutRef = useRef(null); // Ref to store timeout reference
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        getmark();
        move();
        start();
    }, []);

    const start = () => {
        timeoutRef.current = setTimeout(() => move(), interval);
    };

    const getmark = () => {
        document.getElementById('score').innerHTML = score.current;
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
        setIntervalnum(interval - 1000);
        clearTimeout(timeoutRef.current); // Clear previous timeout
        start(); // Start new timeout
    };

    const resetSpeed = () => {
        setIntervalnum(3000);
        clearTimeout(timeoutRef.current); // Clear previous timeout
        start(); // Start new timeout
    };

    const resetScore = () => {
        score.current = 0;
        document.getElementById('score').innerHTML = score.current;
        alert("Score reset");
    };

    return (
        <div id="set">
            <label id="scorelabel">Score: {interval}</label>
            <label id="score">{score.current}</label>
            <button id="reset_speed" onClick={resetSpeed} type="button">Reset Speed</button>
            <button id="reset_score" onClick={resetScore} type="button">Reset Score</button>
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

 */