import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import axios from "axios";

const LoginComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    sessionStorage.getItem("isLoggedIn") || null
  );
  const handleSuccess = (res) => {
    let userData = res.profileObj;
    console.log(userData);

    axios
      .get(`http://localhost:3001/users/${res.profileObj.googleId}`)
      .then((response) => {
        console.log(response);
        sessionStorage.setItem("isLoggedIn", true);
        setIsLoggedIn(true);
      })
      .catch((error) => {
          axios.post("http://localhost:3001/users", {
            ...userData,
            id: userData.googleId,
          });
          sessionStorage.setItem("isLoggedIn", true);
          setIsLoggedIn(true);
        }
      );
  };
  const handleFailure = (err) => {
    console.log(err);
  };
  const handleLogout = (response) => {
    sessionStorage.clear();
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <GoogleLogout
          clientId="813755426604-c14fjkrfta5up8p97rptleprf7ua6l3l.apps.googleusercontent.com"
          buttonText="Gmail Logout"
          onLogoutSuccess={(response) => {
            handleLogout(response);
          }}
        />
      ) : (
        <GoogleLogin
          clientId="813755426604-c14fjkrfta5up8p97rptleprf7ua6l3l.apps.googleusercontent.com"
          buttonText="Gmail Login"
          onSuccess={(response) => {
            handleSuccess(response);
          }}
          onFailure={(response) => {
            handleFailure(response);
          }}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      )}
    </div>
  );
};

export default LoginComponent;



// import React, { useEffect, useState } from "react";

// const ExampleFunc=()=>{
//   const[car, setCar]=useState({
//     brand: 'BMW',
//     model: 'x7',
//     type: 'suv',
//     color:'blue'
//   });
//   const [count,setCount]=useState(0)
//   const changeColor=()=>{
//     setCar(previous=>{
//       return{...previous,color:'black'}      
//     })
//   }
//   useEffect(()=>{
//     setTimeout(()=>{
//       setCount((count)=>count+1)
//     },1000)
//   },[])
//   return(
//     <div>
//       <h1>My Car brand is {car.brand}  </h1>
//     <h1>It is {car.model} model {car.type} type with color {car.color}</h1>
//     <button type="button" onClick={changeColor}>Black</button>
//     <h1>I counted {count} times</h1>
//     </div>
//   );
// }
// export default ExampleFunc;



// // -Controlled Component-----------------------------------------
// import React from "react";
// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import ControlledComp from "./controlledcomp";
// // import Home from "./Home";

// export default class BrowRouter extends React.Component{
//   render(){
//     return(
//      <div>
//       <BrowserRouter>
//       <ul>
//         {/* <li><Link to='/home' >Home</Link></li> */}
//         <li><Link to="/controlledcomp">Controlled Component</Link></li>
//       </ul>
//       <Routes>
//         {/* <Route path="/home" element={<Home />} /> */}
//         <Route path="/controlledcomp" element={<ControlledComp />} />
//       </Routes>
//       </BrowserRouter>
//      </div>
//     );
//   }
// }




// // login Page---------
// import axios from "axios";
// import React from "react";
// import { Button } from "react-bootstrap";

// const LoginPage =()=>{
//     // const [info, setInfo]= useState([])
//     let loginButton=()=>{
//         axios.get('http://localhost:3001/posts').then((response)=>response.data)
//         if (response.data === true) {
//             <h1>Welcome</h1>
//         } else {
//             <h1>wrong crendentials  </h1>          
//         }
//     }
//     return(
//         <form>
//         <label>Username</label><br/>
//         <input type="text" name="username"  required></input>
//         <br/>
//         <label>Password</label>
//         <br/>
//         <input type="password" name="password" required></input>
//         <br/>
//         <br/>
       
        
//         <Button type= "button" onClick={loginButton}>Login</Button> 
        
//         </form>
//     );
// }
// export default LoginPage;





// import React from 'react';
// import axios from 'axios';
// import { Button, Table } from 'react-bootstrap';

// class AxiosDataFetch extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//           list:[],
//           data:[]
//         }
        
//     }
    
//     handleAllRecords = () => {
//         axios.get(`https://jsonplaceholder.typicode.com/users` )
//             .then((response) => {               
//                 this.setState({ list: response.data });                
//             }); 
//     }

//     handlePostMethod = ()=>{
//       let dataObj ={
//         title: "The devil",
//         author: "Rohith"
//       }
//       axios.post("http://localhost:3001/posts", {
//         data: dataObj}).then((response)=>console.log(response.data))
//     }
//     componentDidMount() {  
       
//         this.handleAllRecords();       
//     }
   
//     handleRecords = (event) => {
//         let switchRecords;

//         switch (event.target.name) {
//             case 'twoRecords':
//                 switchRecords = 2;
//                 break;
//             case 'threeRecords': switchRecords = 3;
//                 break;
//             case 'fourRecords': switchRecords = 4;
//                 break;
//             case 'fiveRecords': switchRecords = 5;
//                 break; 
//             case 'allRecords': this.handleAllRecords();
//                  break;
//             default:
//                 break;
//         }

//         axios.get(`https://jsonplaceholder.typicode.com/users`, {
//             params: {
//                 _limit: switchRecords,
//             }
//         } )
//             .then((response) => {               
//                 this.setState({ list: response.data });                
//             });

//     }
//     render() {
//         return (
//             <div >
//               <Table  bordered hover variant="dark" style={{ border:'1px solid  green' }}>
//                 <thead >
//                     <tr>
//                         <th>Name</th>
//                         <th>Username</th>
//                         <th>Email</th>
//                         <th>City</th>
//                         <th>Suite</th>
//                         <th>Zipcode</th>
//                     </tr>
//                 </thead >
//                 <tbody >
//                     {
//                         this.state.list.map((listValue) =>
//                         <tr key={listValue.id} >
//                                 <td >{ listValue.name}</td>
//                                 <td>{listValue.username}</td>
//                                 <td>{ listValue.email}</td>
//                                 <td>{listValue.address.city }</td>
//                                 <td>{ listValue.address.suite}</td>
//                                 <td>{ listValue.address.zipcode}</td>
//                     </tr>
//                         )
//                     }
//                 </tbody>
//             </Table>

//                 <Button name="twoRecords" onClick={this.handleRecords}>Limit 2 Records</Button>
//                 <Button name="threeRecords" onClick={this.handleRecords}>Limit 3 Records</Button>
//                <Button name="fourRecords" onClick={this.handleRecords}>Limit 4 Records</Button>
//                 <Button name="fiveRecords" onClick={this.handleRecords}>Limit 5 Records</Button>
//                 <Button name="allRecords" onClick={this.handleRecords}>All Records</Button>
//                     <br />

//                 <Button name="addRecords" onClick={this.handlePostMethod}>Add New Records</Button>


//             </div>
//         )
//     }
// }

// export default AxiosDataFetch;
//------------------------------------------------------------------




// // -----------Axios in Function---------------
// import React,{useEffect, useState} from "react";
// import axios from "axios";

// let ApiFunc = () => {
// let[data, setData] = useState([]);
// const url = "https://jsonplaceholder.typicode.com/users";
// useEffect(()=>{
//       axios.get(url)
//       .then((response)=>{ setData(response.data)
//       // console.log(response.data)
//     })
// },[])
// let printRecord = (event) => {
//   let allRecords = () => {
//     axios.get(url)
//     .then((response)=>setData(response.data))
//   }
//   let records;
//   switch(event.target.name){
//     case "one" :
//       records = 1;
//       break;
//     case "two" :
//       records = 2;
//     break;
//     case "four" :
//       records = 4;
//       break;
//     case "six" :
//       records = 6;
//     break;
//     case "eight" :
//       records = 8;
//       break;
//     case "ten" :
//       records = 10;
//       break;
//     case "all" :
//       records = allRecords();
//       break
//       default:
//     break;
//   }

//     axios.get(url, {
//       params:{
//         _limit: records
//       }
//     })
//     .then((response)=>setData(response.data))
// }

//   return(
//     <div>
      
//       { <table style={{border:"1px solid blue"}}>
//         <thead >
//           <tr style={{border:"1px solid black"}}>
//             <th>Name</th>
//             <th>Username</th>
//             <th>Email</th>
//             <th>street</th>
//             <th>City</th>
//             <th>Zipcode</th>
//           </tr>
//         </thead>
//         <tbody>
//          {
//           data.map((value) =>
//            <tr key={value.id}>
//                 <td>{value.name}</td>
//                 <td>{value.username}</td>
//                 <td>{value.email}</td>
//                 <td>{value.address.street}</td>
//                 <td>{value.address.city}</td>
//                 <td>{value.address.zipcode}</td>
//           </tr>)
//          }
//         </tbody>
//       </table> }

//       <button name={"one"} onClick={printRecord}> print one Record</button>
//       <button name={"two"} onClick={printRecord}> print two Record</button>
//       <button name={"four"} onClick={printRecord}> print four Record</button>
//       <button name={"six"} onClick={printRecord}> print six Record</button>
//       <button name={"eight"} onClick={printRecord}> print eight Record</button>
//       <button name={"ten"} onClick={printRecord}> print ten Record</button>
//       <button name={"all"} onClick={printRecord}> print all Record</button>
//     </div>
    
//   )
// }


// export default ApiFunc;
// //----------------------------------------------------------------------


// //-----Axios in Class Component----------------------
// import React from 'react';
// import axios from 'axios';
// import { Button, Table } from 'react-bootstrap';

// class AxiosDataFetch extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {list:[]}
//     }
    
//     handleAllRecords = () => {
//         axios.get(`https://jsonplaceholder.typicode.com/users` )
//             .then((response) => {               
//                 this.setState({ list: response.data });                
//             }); 
//     }
//     componentDidMount() {        
//         this.handleAllRecords();       
//     }
   
//     handleRecords = (event) => {
//         let switchRecords;

//         switch (event.target.name) {
//             case 'twoRecords':
//                 switchRecords = 2;
//                 break;
//             case 'threeRecords': switchRecords = 3;
//                 break;
//             case 'fourRecords': switchRecords = 4;
//                 break;
//             case 'fiveRecords': switchRecords = 5;
//                 break; 
//             case 'allRecords': this.handleAllRecords();
//                  break;
//             default:
//                 break;
//         }

//         axios.get(`https://jsonplaceholder.typicode.com/users`, {
//             params: {
//                 _limit: switchRecords,
//             }
//         } )
//             .then((response) => {               
//                 this.setState({ list: response.data });                
//             });

//     }
//     render() {
//         return (
//             <div ><Table  bordered hover variant="dark" style={{ border:'1px solid  green' }}>
//                 <thead >
//                     <tr>
//                         <th>Name</th>
//                         <th>Username</th>
//                         <th>Email</th>
//                         <th>City</th>
//                         <th>Suite</th>
//                         <th>Zipcode</th>
//                     </tr>
//                 </thead >
//                 <tbody >
//                     {
//                         this.state.list.map((listValue) =>
//                         <tr key={listValue.id} >
//                                 <td >{ listValue.name}</td>
//                                 <td>{listValue.username}</td>
//                                 <td>{ listValue.email}</td>
//                                 <td>{listValue.address.city }</td>
//                                 <td>{ listValue.address.suite}</td>
//                                 <td>{ listValue.address.zipcode}</td>
//                     </tr>
//                         )
//                     }
//                 </tbody>
//             </Table>
//                 <Button name="twoRecords" onClick={this.handleRecords}>Limit 2 Records</Button>
//                 <Button name="threeRecords" onClick={this.handleRecords}>Limit 3 Records</Button>
//                <Button name="fourRecords" onClick={this.handleRecords}>Limit 4 Records</Button>
//                 <Button name="fiveRecords" onClick={this.handleRecords}>Limit 5 Records</Button>
//                 <Button name="allRecords" onClick={this.handleRecords}>All Records</Button>
//             </div>
//         )
//     }
// }

// export default AxiosDataFetch;
// //------------------------------------------------------------------


// // --------Hook concept by using useState-------------------
// import React, { useState } from "react";
// import { Button } from "react-bootstrap";


// const HookUseState=()=>{
// const [naam, setNaam] = useState('Rohith');
// const [surname, setSurname] = useState('Dudam')
//   return(
//     <div>
//       <h1>Hi my Name is {naam} {surname} </h1>
//       <Button onClick={()=>[setNaam("Dudam"), setSurname('Rohith')]}>Change</Button>
//     </div>
//   );
// }

// export default HookUseState;
// //-------------------------------------------------------------------


// // --------------------Router------------------------------------
// import React from "react";
// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import Home from './Home'
// import NavbarEx from './NavbarEx'

// class RouterClass extends React.Component{
//   render(){
//     return(
//       <BrowserRouter>
//       <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/NavbarEx">NavBar</Link></li>
//         </ul>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/NavbarEx" element={<NavbarEx />} />
//         </Routes>
        
//       </BrowserRouter>
//     );
//   }
// }
// export default RouterClass;
// //----------------------------------------------------------------------



// //-------TODO LIST IN FORM---------------------------------------------
// import React from 'react';
// import  Button from 'react-bootstrap/Button';

// class TodoList extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             searchData: '',
//             list : [],
//             store:' ',
//         }
//     }
//     handleChange = (event) => {
//         this.setState({
//             [event.target.name]  : event.target.value,
//         })
//     }
//     handleSubmit = (event) => {
//         event.preventDefault();
//         let newList = [...this.state.list];
//         newList.push(this.state.searchData);
//         this.setState({
//             list:newList,
//         })
//         // console.log(this.state);
        
//     }
//     render() {
//       let store = this.state.list.map(
//         lit =>
//         <li>
//           {lit}
//           </li>
        
//       )
//         return (
//             <div style={{marginLeft:'40%'}}>
//                 <h1>Todo List</h1>
//                 <form onSubmit={this.handleSubmit}>
//                     <input type="text" name="searchData" id="searchData" autoComplete='off'
//                      onChange={this.handleChange} />
//                     <br /><br />
//                     <Button  type='submit' >Submit</Button>
//                     <ul>{store}</ul>
                   
//                 </form>
//             </div>
//         )
       
//     }
// }

// export default TodoList;
// //----------------------------------------------------------------------




// // // ------------Form Events---------------------
// import React from "react";
// import { Form } from "react-bootstrap";
// import Button from "react-bootstrap/Button";


// class FormEvents extends React.Component{
//   constructor(){
//     super();
//     this.state = {email: '', password: '',errMssg:''};
//   }
//   handleEvent=(event)=>{
//    this.setState({
//     [event.target.name]: event.target.value
//    })
//   }
  // handleSubmit= (event)=>{
  //     event.preventDefault();

  //     if (this.state.email === 'rohithdudam@gmail.com'&& this.state.password === 'rohith') {
  //       this.setState({
  //         errMssg: `Welcome ${this.state.email}`
  //       });

  //     }else{
  //         this.setState({
  //           errMssg:'Incorrect Crendtials'
  //         })
  //     }
  // }
//     render(){
//     return(
//       <Form style={{width:'300px',paddingLeft:'50px'}} onSubmit={this.handleSubmit}>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email"  name="email" onChange={this.handleEvent}/>
//         <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password"  name="password" onChange={this.handleEvent}/>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicCheckbox">
//         <Form.Check type="checkbox" label="Check me out" />
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//       {this.state.email && <h2> {this.state.email}</h2>}
//       {this.state.password&& <h2>{this.state.password}</h2>}
//       {this.state.errMssg && <h1>{this.state.errMssg}</h1>}
//     </Form>
//     );
//   }
// }

// export default FormEvents;
// //-------------------------------------------------------------------


// //----------Conditional rendering, UL Events,-------
// import React from 'react';
// import { Button } from 'react-bootstrap';


// class conditionalScrap extends React.Component{
//   constructor(){
//     super();
//     this.state={isLoggedIn: false}
//   }
// handleLogin=()=>{
//   this.setState({
//     isLoggedIn:true,
//   })
// }
// handleLogout=()=>{
//   this.setState({
//     isLoggedIn:false
//   })
// }
 
  // render(){
    // let button;
    // if (this.state.isLoggedIn) {
    //   button = <Button onClick={()=> this.setState({isLoggedIn:false})}>Logout</Button>

    // } else {
    //   button = <Button onClick={()=>this.setState({isLoggedIn:true})}>LogIn</Button>
    // }

  //  let a = [1,2,3,4,5,6];
  //  let a2 = a.map((value,index)=> <li key={index}>{value + value}</li>);

    // return(
      // <div>
      //   {/* {this.state.isLoggedIn ?  
      //  <Button onClick={this.handleLogout} >Logout</Button> : 
      //  <Button onClick={this.handleLogin}>Login</Button>
      //    } */}

// {/* {this.state.isLoggedIn ?  
//        <Button onClick={()=>{this.setState({isLoggedIn:false})}} >Logout</Button> : 
//        <Button onClick={()=>{this.setState({isLoggedIn:true})}} >LogIn</Button>
//          } */}
//          {/* {
//           this.state.isLoggedIn && <h2>Logout you fool.....</h2>
//          } */}

//          {/* {button} */}
//          {/* <ul>{a2}</ul> */}



//       </div>
     
//     );
//   }
// }
// export default conditionalScrap;
////-------------------------------------------------------------------


// // -------------------------EVENTS----------------------------------
// import React from "react";
// import { Button } from "react-bootstrap";



// class Events extends React.Component{
//   constructor(){
//     super();
//       this.state = {number:0}
    
//   }
//   clickEvent(){
//    this.setState({number: this.state.number + 2})
//   }
//   render(){
//     return(
//       <div>
//         <h1>{this.state.number}</h1>
//         {/* <Button onClick={()=> alert('You Clicked Me')}>On Click</Button> */}
//         <Button onClick={this.clickEvent.bind(this)}>On Click</Button>
//       </div>
//     );
//   }
// }
// export default Events
////---------------------------------------------------------------------


// //--------------PHASES OF COMPONENTS----------------------
// import React from "react";
// import { Button } from "react-bootstrap";


// class ScrapComponents extends React.Component{
//   constructor(props){
//     super(props);
//     this.state ={methods: 'Three Phases',phase2:' ',phase3:'3'}
//   }
//   static getDerivedStateFromProps(props){
//     return {phase1:props.phase1}
//   }
//   addingPhases=()=>{
//     this.setState({phase2:' Updating'})
//   }
//   shouldComponentUpdate(){
//     return true;
//   }
//   componentDidMount(){
//     setTimeout(()=>{
//     this.setState({phase3:'3. UnMounting'})
//   },2000)
//   }
//   // componentDidUpdate(){
//   //   alert('Components Updated')
//   // }
//   // componentWillUnmount(){
//   //   setTimeout(() => {
//   //     alert('will Unmount')
//   //     // this.setState({phase3:'Component will Unmount'})
//   //   }, 4000);
//   // }
//   render(){
//     return(
//       <div>
//         <h2 style={{color:'red'}}>Hi this page is about Components:-</h2>
//         <h4> Components has {this.state.methods}. They are:</h4>
//         <h5> {this.props.phase1} </h5>
//         <h5>2.  {this.state.phase2}</h5>
       
//         <h5>{this.state.phase3}</h5>
//         <Button onClick={this.addingPhases}>Click to get 2nd Phase</Button>
//       </div>
//     );
//   }
// }

// export default ScrapComponents;
////-----------------------------------------------------------------------


// // ---------------Create Card in Reactjs-----------------------------
// import Card from 'react-bootstrap/Card';

// function BgColorExample() {
//   return (
//     <>
//       {[
//         'Primary',
//         'Secondary',
//         'Success',
//         'Danger',
//         'Warning',
//         'Info',
//         'Light',
//         'Dark',
//       ].map((variant) => (
//         <Card
//           bg={variant.toLowerCase()}
//           key={variant}
//           text={variant.toLowerCase() === 'light' ? 'dark' : 'Info'}
//           style={{ width: '18rem' }}
//           className="mb-2"
//         >
//           <Card.Header>Header</Card.Header>
//           <Card.Body>
//             <Card.Title>{variant} Card Title </Card.Title>
//             <Card.Text>
//               Some quick example text to build on the card title and make up the
//               bulk of the card's content.
//             </Card.Text>
//           </Card.Body>
//         </Card>
//       ))}
//     </>
//   );
// }

// export default BgColorExample;
// //-------------------------------------------------------------------


// import React from "react";
// // import { Button } from "react-bootstrap";

// // class ScrapJs extends React.Component{

// //     constructor(props){
// //         super();        
// //         this.state = {color: 'Red',name:'Practice'}

// //         // this.changeColor = this.changeColor.bind(this)
// //     }

// //     // changeColor=()=>{
// //     //     this.setState({color: 'Blue'});
// //     // }
// //     changeColor(){
// //         this.setState({color: 'Blue'});
// //     }

// //     render(){
// //         return (
// //             <>

// //             <h2>This page is For Practice which is {this.state.color} color
// //             started {this.state.name} from {this.props.day}</h2>
// //             <Button onClick={this.changeColor.bind(this)}>Change Red to Blue</Button>
// //             {/* <Button onClick={()=>this.changeColor()}>Change Red to Blue</Button> */}

// //             </>
// //         );
// //     }
// // }

// // export default ScrapJs;