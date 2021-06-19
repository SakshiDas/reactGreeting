import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const cssStyle ={};

let currDate = new Date();
currDate = currDate.getHours();
let greet = '';
 if(currDate>=3 && currDate < 12){
    greet = 'Good Morning';
    cssStyle.color = 'Green';
 }else if(currDate>=12 && currDate <19){
    greet = 'Good Afternoon';
    cssStyle.color = 'Orange';
 }else{
     greet = "Good Night";
     cssStyle.color = 'Blue';
 }

ReactDOM.render(
    <>
        <div>
            <h1>
                Hello, <span style ={cssStyle}>{greet}</span>
            </h1>
        </div>
    </>,
    document.getElementById("root")
);