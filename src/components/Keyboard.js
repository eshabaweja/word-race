import React from "react";

export default function Keyboard() {

    let line1 = "qwertyuiop"
    const row1 = line1.split("");
    let line2 = "asdfghjkl"
    const row2 = line2.split("");
    let line3 = "zxcvbnm"
    const row3 = line3.split("");

    return (
        <div className="Keyboard">

            <input id="key--input" type="text" autoComplete="off" autoFocus

                //event listener for pressed key feedback to user
                onKeyDown={function (e) {
                    const pressed = document.querySelector(`div.key[id='${e.key}']`);
                    if (!pressed) return;
                    pressed.classList.add(`key-pressed`);
                    setTimeout(() => {
                        pressed.classList.remove("key-pressed");
                    }, 100);
                }}
            />

            <div className="row">
                {
                    row1.map(item => {
                        return (
                            <div className="key" id={item}>{item.toUpperCase()}</div>
                        )
                    })
                }
            </div>

            <div className="row">
                {
                    row2.map(item => {
                        return (
                            <div className="key" id={item}>{item.toUpperCase()}</div>
                        )
                    })
                }
            </div>

            <div className="row">
                {
                    row3.map(item => {
                        return (
                            <div className="key" id={item}>{item.toUpperCase()}</div>
                        )
                    })
                }
            </div>

        </div>
    )
}