import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';


class ClassApp extends Component {
    Plus=()=>{
        this.props.dispatch({
            type: "INCREMENt"
        })
    }
    Minus=()=>{
        this.props.dispatch({
            type: "DECREMENT"
        })
    }
  render() {
    return (
      <div>
        <h1> {this.props.count} </h1>
        <Button onClick={this.Plus}>Plus</Button>
        <Button onClick={this.Minus}>Minus</Button>
      </div>
    )
  }
}
const mapStatetoProps=(state)=>{
    return{
        count: state.count
    }
}
export default connect(mapStatetoProps)(ClassApp)



// import React, { Component } from 'react';
// import { Button } from 'react-bootstrap';
// import { connect} from 'react-redux';

// class ClassApp extends Component {
//     Increment=()=>{
//         this.props.dispatch({
//             type:'INCREMENT'
//         })
//     };
//     Decrement=()=>{
//         this.props.dispatch({
//             type:'DECREMENT'
//         })
//     }
//   render() {
//     return (
//       <div>
//         <h1> {this.props.count} </h1>
//         <Button onClick={this.Increment}>Increment</Button>
//         <Button onClick={this.Decrement}>Decrement</Button>
//       </div>
//     )
//   }
// }

// const mapStatetoProps=(state)=>{
//     return {
//         count: state.count,
//     };
// }

// export default connect(mapStatetoProps)(ClassApp);