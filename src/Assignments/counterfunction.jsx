import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";


const CounterFunc =()=>{
    const [number, setNumber] = useState(0);
    const [temp, setTemp] = useState(26);
    const [backgroundColor, setBackgroundColor] = useState('blue');

    let Increament=()=>{
        setTemp(temp + 1)
        if (temp<=20) {
        setBackgroundColor('aqua')
    }else if(temp>27 && temp<=35){
        setBackgroundColor('green')
    }else if (temp>35) {
        setBackgroundColor('red')
    }else{
        setBackgroundColor('blue')
    }
    }
    let Decreament=()=>{
        setTemp(temp - 1)
        if (temp<=20) {
            setBackgroundColor('aqua')
        }else if(temp>27 && temp<=35){
            setBackgroundColor('green')
        }else if (temp>35) {
            setBackgroundColor('red')
        } else{
            setBackgroundColor('blue')
        }
}
    return(
       <div >
        <h1>{number}</h1>
        <Button onClick={()=>setNumber(number+1)}>Plus 1</Button>
        <Button onClick={()=>setNumber(number-1)}>Minus 1</Button>

        <h1 style={{backgroundColor}}>{temp}<sup>o</sup>C</h1>
        <Button onClick={Increament}>Plus 1</Button>
        <Button onClick={Decreament}>Minus 1</Button>
        {/* <Button onClick={ChangeColor}>Color Change</Button> */}
       </div>
    );
}

export default CounterFunc;