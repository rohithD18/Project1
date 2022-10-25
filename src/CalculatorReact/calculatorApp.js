import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './calc.css'

const CalculatorApp = () => {

    const [input, setInput] = useState('');
    const [result, setResult] = useState(0)

    const operators= ["/", "*", "+", "-", "."];

    const updateCalc = (value)=>{
        if( (operators.includes(value) && input === '') ||
       ( operators.includes(value) && operators.includes(input.slice(-1)) 
       ) ){
            return;
        }
        setInput(input+value);
        if(!operators.includes(value)){
            setResult(eval(input+value).toString());
        }
    }

    const equalsTo =()=>{
        setInput(eval(input).toString());
    }

    const deleteLast =()=>{
        if(input === ''){
            return;
        }
        const value = input.slice(0, -1);
        setInput(value);
    }

    const clearAll = ()=>{
        if(input === ''){
            return;
        }
        const value = '';
        setInput(value);
    }

  return (
    <div className='calcBody'>
        <input type={'text'} 
        className="inputbtn"
        value={input || "0"}
        /> 
        <div>
        <table>
            <tbody>
            <tr>
            <td><Button onClick={clearAll} >C</Button></td>
            <td><Button onClick={()=>updateCalc('/')} > /</Button></td>
            <td><Button onClick={()=>updateCalc('*')} >*</Button></td>
            <td><Button onClick={()=>updateCalc('-')} 
            style={{width:"50px"}}
            >-</Button></td>
            </tr>
            <tr>
                <td><Button onClick={()=>updateCalc('7')} >7</Button></td>
                <td><Button onClick={()=>updateCalc('8')} >8</Button></td>
                <td><Button onClick={()=>updateCalc('9')} >9</Button></td>
                <td rowSpan={2}><Button  onClick={()=>updateCalc('+')} 
                style={{height:'80px',width:"50px"}}
                >+</Button></td>
            </tr>
            <tr>
                <td><Button onClick={()=>updateCalc('4')} >4</Button></td>
                <td><Button  onClick={()=>updateCalc('5')} >5</Button></td>
                <td><Button  onClick={()=>updateCalc('6')} >6</Button></td>
            </tr>
            <tr>
                <td><Button onClick={()=>updateCalc('1')} >1</Button></td>
                <td><Button onClick={()=>updateCalc('2')} >2</Button></td>
                <td><Button onClick={()=>updateCalc('3')} >3</Button></td>
                <td rowSpan={2}><Button onClick={equalsTo}
                style={{height:'80px', width:"50px"}}
                >=</Button></td>
                
            </tr>
            <tr>
                <td><Button onClick={deleteLast} ><span>&larr;</span></Button></td>
                <td ><Button onClick={()=>updateCalc('0')} >0</Button></td>
                <td><Button onClick={()=>updateCalc('.')} >.</Button></td>                
            </tr>
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default CalculatorApp;