import React from "react";
import { Button } from "react-bootstrap";


class ComponentPhases extends React.Component{
  constructor(props){
    super(props);
    this.state ={methods: 'Three Phases', phase2:' ',phase3:'3'}
  }
  static getDerivedStateFromProps(props){
        return {phase1:props.phase1}    
  }
  addingPhases=()=>{
    this.setState({phase2:' Updating'})
  }
  shouldComponentUpdate(){
    return true;
  }
  componentDidMount(){
    setTimeout(()=>{
    this.setState({phase3:'3. UnMounting'})
  },3000)
  }
  // componentDidUpdate(){
  //   alert('Components Updated')
  // }
  // componentWillUnmount(){
  //   setTimeout(() => {
  //     alert('will Unmount')
  //     // this.setState({phase3:'Component will Unmount'})
  //   }, 4000);
  // }
  render(){
    return(
      <div>
        <h2 style={{color:'red'}}>Hi this page is about Components:-</h2>
        <h4> Components has {this.state.methods}. They are:</h4>
        <h5> {this.props.phase1} </h5>
        <h5>2.  {this.state.phase2}</h5>
       
        <h5>{this.state.phase3}</h5>
        <Button onClick={this.addingPhases}>Click to get 2nd Phase</Button>
      </div>
    );
  }
}

export default ComponentPhases;
