import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


//event listener for pressed key feedback to user
document.getElementById('key--input').addEventListener('keydown', function (e) {
  const pressed = document.querySelector(`div[id='${e.key}']`)
  if (!pressed) return; //if pressed key is not an alphabet

  pressed.classList.add(`key-pressed`);
})

function removeTransition(e) {
  this.classList.remove(`key-pressed`)
}

document.querySelectorAll(`.key`).forEach(key => key.addEventListener(`transitionend`, removeTransition))

//to compare input and arr top
document.getElementById('key--input').addEventListener('keydown', function (e) {
  if (e.key === "Enter" || e.key === " ") {
    let wordEntered = this.value
    console.log(wordEntered)

    //if(arr[0]===wordEntered)
    //score++
    //arr.pop()

    this.value = ""; //to clear the input box

  }
})

