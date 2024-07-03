import React, { useState } from "react";
import "./Calculator.css";
let value;

let result = 0;
function calc() {
  result = document.getElementsByClassName("key").value += value;
}

function Calculator() {
  return (
    <div className="cal">
      <div className="title">
        <h1>Calculator</h1>
      </div>
      <div className="keys">
        <div className="button">
          <p className="key">0</p>
        </div>

        <div className="button" onClick={calc()}>
          <p className="key " value="1">
            1
          </p>
        </div>

        <div className="button">
          <p className="key" value="2">
            2
          </p>
        </div>

        <div className="button">
          <p className="key" value="3">
            3
          </p>
        </div>

        <div className="button">
          <p className="key" value="4">
            4
          </p>
        </div>

        <div className="button">
          <p className="key" value="5">
            5
          </p>
        </div>

        <div className="button">
          <p className="key" value="6">
            6
          </p>
        </div>

        <div className="button">
          <p className="key" value="7">
            7
          </p>
        </div>

        <div className="button">
          <p className="key" value="8">
            8
          </p>
        </div>

        <div className="button">
          <p className="key" value="9">
            9
          </p>
        </div>
        {/* Special charachters */}
        <div className="button">
          <p className="key">P</p>
        </div>

        <div className="button">
          <p className="key">F</p>
        </div>

        <div className="button">
          <p className="key">E</p>
        </div>

        <div className="button">
          <p className="key">R</p>
        </div>
      </div>
      <div className="solution">
        <p className="sol">{result}</p>
      </div>
    </div>
  );
}

export default Calculator;
