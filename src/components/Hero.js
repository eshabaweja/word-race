import React from "react";

export default function Hero(){

    let level = 0;
    let score = 0;
    let multiplier = 1;

    return(
        <div className="Hero">
            <div className="level"><h2>{level}</h2>level</div>
            <div className="score"><h2>{score}</h2>score</div>
            <div className="multiplier"><h2>{`${multiplier}x`}</h2>multiplier</div>
        </div>
    )
}