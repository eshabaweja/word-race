import React from "react";
import data from "./data";

function newWord(){
    //a function to return random word
    let word = data[Math.floor(Math.random() * data.length)];
    return word
}

//creating a stack of new words
export const words = []
for (let i=0; i<10; i++){
    words[i] = newWord()
}


export default function Stack(){
//the Stack component
    return(
        <div className="Stack">     
            {words.map(item => <div className="stack--word">{item}</div>)}

        </div>
    )
}