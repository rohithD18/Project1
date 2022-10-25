import React from "react";
import { Button} from "react-bootstrap";

class SimpleCounter extends React.Component{
    constructor(){
        super();
        this.state = {num:0, temp:26,color:'blue'};
         
        
    }
    AddOne=()=>{
        this.setState({
            num : this.state.num + 1
        })
    }
    SubOne=()=>{
        this.setState({
            num: this.state.num -1
        })
    }
    TempPlus=()=>{
        this.setState({
            temp: this.state.temp + 1
        })
        if (this.state.temp<=20) {
            this.setState({
                color: 'aqua'
            })
        } else if (this.state.temp>26 && this.state.temp<=35) {
            this.setState({
                color:'green'
            })
        } else if (this.state.temp>=35) {
            this.setState({
                color:'red'
            })
        }else {
            this.setState({
                color:'blue'
            })
        }
      
    }
    TempMinus=()=>{
        this.setState({
            temp: this.state.temp - 1,
            
        })
        if (this.state.temp<=20) {
            this.setState({
                color: 'aqua'
            })
        } else if (this.state.temp>26 && this.state.temp<=35) {
            this.setState({
                color:'green'
            })
        } else if (this.state.temp>=35) {
            this.setState({
                color:'red'
            })
        }else {
            this.setState({
                color:'blue'
            })
        }
       
    }

    render(){ 
        
        return(
           <div style={{marginLeft:'30%',marginRight:'34%',textAlign:'center '}}>
            <h1 >{this.state.num}</h1>
             <Button onClick={this.AddOne}>Plus 1</Button>
            <Button onClick={this.SubOne}>Subtract 1</Button><br/><br/>

            <h1 style={{backgroundColor:`${this.state.color}`}} >{this.state.temp}<sup>o</sup>C</h1>
            <Button onClick={this.TempPlus} >Temp +1<sup>o</sup>C</Button>
            <Button onClick={this.TempMinus}>Temp -1<sup>o</sup>C</Button>           
           </div>
        );
    }
}
export default SimpleCounter;