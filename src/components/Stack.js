import React from "react";
import data from "./data";

export default function Stack(){

        function newWord(){
            let word = data[Math.floor(Math.random() * data.length)];
            return word
        }
    

    return(
        <div className="Stack">
            
            <div className="stack--word">{newWord()}</div>
            <div className="stack--word">{newWord()}</div>
            <div className="stack--word">{newWord()}</div>
            <div className="stack--word">{newWord()}</div>
            <div className="stack--word">{newWord()}</div>
            <div className="stack--word">{newWord()}</div>
            <div className="stack--word">{newWord()}</div>
            <div className="stack--word">{newWord()}</div>
            <div className="stack--word">{newWord()}</div>
            <div className="stack--word">{newWord()}</div> 

        </div>
    )
}