import React from "react";
import data from "./data";

export default function Stack(){

        function newWord(){
            let word = data[Math.floor(Math.random() * data.length)];
            return word
        }

        const words = []
        for (let i=0; i<10; i++){
            words[i] = newWord()
        }
    

    return(
        <div className="Stack">     
            {words.map(item => <div className="stack--word">{item}</div>)}

        </div>
    )
}