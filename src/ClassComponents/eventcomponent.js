import React from "react";
import { Button } from "react-bootstrap";


class EventComponent extends React.Component{
    constructor(){
        super();
        this.state = {naam:'Hello'}
    }
    changeTo=()=>{
        this.setState({naam: 'Rohith'})
    }
    overTo=()=>{
        this.setState({naame: 'Dudam.'})
    }
    leaveTo=()=>{
        this.setState({leave: 'You Left me.'})
    }
    render(){
        return(
            <div>
                <h1>Hii {this.state.naam} {this.state.naame} {this.state.leave} </h1>
                <Button onClick={this.changeTo} >Click Me</Button>
                <Button onMouseOver={this.overTo}>Onhover</Button>
                <Button onMouseLeave={this.leaveTo}>OnLeave</Button>
            </div>


        );
    }
}

export default EventComponent;