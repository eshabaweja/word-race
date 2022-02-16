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

