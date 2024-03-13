import React from 'react';
import './Games.css'



const Games = () => {
let interval = 3000;
let speed;

const item = React.useRef();
const score = React.useRef();
let x_value ;
let y_value;

window.onload = function start() {
	item.addEventListener("click", checkclick);
    getmark();
}
function getmark() {
    document.getElementById('score').innerHTML = score;
    speed = window.setInterval(move, interval );
  }

function move(){
    x_value = Math.random() * 600;
    y_value = Math.random() * 500;
	item.style.left = (x_value) + "px";
	item.style.top = (y_value)  + "px";
    item.addEventListener("click", checkclick, false);

}
function checkclick() {
	item.removeEventListener("click", checkclick)
	score = score + 1
	document.getElementById('score').innerHTML = score;
	interval = interval - 200;
	clearInterval(speed);
	speed = window.setInterval(move, interval);
    move()
}

function resetSpeed() {
    interval = 3000
    clearInterval(speed);
    speed = window.setInterval(move, interval);
    alert("Speed reset");
}
    
function resetScore() {
    score = 0;
    document.getElementById('score').innerHTML = score;
    alert("Score reset");
}

function bug() {
    interval = 0
    clearInterval(speed);
    speed = window.setInterval(move, interval);
    alert("BUG SPEED");
}
    return<div id="set">

        <label id="scorelabel">Score: </label>
        <label ref={score} id="score">100</label>

        <button id="reset_speed" onclick ={resetSpeed} type="button">reset speed</button>
        <button id="reset_score" onclick={resetScore} type="button">reset score</button>
        <button id="bugmode" onclick={bug} type="button">supper boost</button>
        <div id="canvas">
            <img SRC= {require('./GamesPics/gura.gif')} alt="gura"width="70px" height="100px" id="item" ref={item}/>

        </div>
    </div>;
  };
  
  export default Games;
