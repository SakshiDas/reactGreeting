import React from 'react';
import './index.css';


function App() {
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
    return(
        <>
            <div>
                <h1>
                    Hello, <span style ={cssStyle}>{greet}</span>
                </h1>
            </div>
        </>
    );
}

export default App;