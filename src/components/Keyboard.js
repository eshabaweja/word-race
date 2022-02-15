import React from "react";

export default function Keyboard() {

    let line1 = "QWERTYUIOP"
    const row1 = line1.split("");
    let line2 = "ASDFGHJKL"
    const row2 = line2.split("");
    let line3 = "ZXCVBNM"
    const row3 = line3.split("");

    return (
        <div className="Keyboard">

<input type="text" autocomplete="off" autoFocus/>

            <div className="row">
                {
                row1.map(item => {
                    return (
                        <div className="key" id={item}>{item}</div>
                    )
                })
                }
            </div>

            <div className="row">
            {
                row2.map(item => {
                    return (
                        <div className="key" id={item}>{item}</div>
                    )
                })
                }
            </div>

            <div className="row">
            {
                row3.map(item => {
                    return (
                        <div className="key" id={item}>{item}</div>
                    )
                })
                }
            </div>

        </div>
    )
}