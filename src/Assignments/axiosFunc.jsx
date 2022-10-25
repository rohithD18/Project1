// import React, { useEffect, useState } from "react";
// import { Button, Table } from "react-bootstrap";
// import axios from 'axios';


// let AxiosFunction =()=>{
//     const [items, setItems] = useState([]);
        
//     useEffect(()=>{
//         axios.get("https://jsonplaceholder.typicode.com/users")
//         .then((response)=>{setItems(response.data)})
//     },[])

// let PrintDatas=(event)=>{
//     let AllData=()=>{
//         axios.get("https://jsonplaceholder.typicode.com/users")
//         .then((response)=>{setItems(response.data)})
//     }
//     let records;
//     switch (event.target.name) {
//         case "twoitems":
//             records = 2;
//             break;
//         case "threeitems":
//             records = 3;
//             break;
//         case "fouritems":
//             records = 4;
//             break;
//         case "sixitems":
//             records = 6;
//             break;
//         case "sevenitems":
//             records =7;
//             break;
//         case "allitems":
//             records = AllData();
//             break;
//         default:
//             break;
//     }

//     axios.get("https://jsonplaceholder.typicode.com/users",{
//         params:{
//             _limit: records
//         }
//     }).then((response)=>{setItems(response.data)})

// }
//     return(
//         <div>
//             <Table striped bordered hover variant="primary">
//                 <thead>
//                 <tr>
//                     <th>Name</th>
//                     <th>Username</th>
//                     <th>Email</th>
//                     <th>City</th>
//                     <th>Street</th>
//                     <th>Zipcode</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         items.map((itemsValue)=>
//                         <tr key={itemsValue.id}>
//                         <td>{itemsValue.name}</td>
//                         <td>{itemsValue.username}</td>
//                         <td>{itemsValue.email}</td>
//                         <td>{itemsValue.address.city}</td>
//                         <td>{itemsValue.address.street}</td>
//                         <td>{itemsValue.address.zipcode}</td>
//                     </tr>)
//                     }
//                 </tbody>

//             </Table>
//             <Button name="twoitems" onClick={PrintDatas}>Print 2 Datas</Button>
//             <Button name="threeitems" onClick={PrintDatas}>Print 3 Datas</Button>
//             <Button name="fouritems" onClick={PrintDatas}>Print 4 Datas</Button>
//             <Button name="sixitems" onClick={PrintDatas}>Print 6 Datas</Button>
//             <Button name="sevenitems" onClick={PrintDatas}>Print 7 Datas</Button>
//             <Button name="allitems" onClick={PrintDatas}>Print All Datas</Button>
//         </div>
//     )
// }

// export default AxiosFunction;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Button, Table } from "react-bootstrap";
// let FuncAxios=()=>{
//     const [items, setItems]=useState([]);

//     const url = "https://jsonplaceholder.typicode.com/users";
// useEffect(()=>{
//     axios.get(url).then((response)=>setItems(response.data))
// },[])
// let PrintDatas=(events)=>{
//     let AllData =()=>{
//         axios.get(url).then((response)=>setItems(response.data))
//     }
//     let records;
//     switch (events.target.name) {
//         case "twoitems":
//             records = 2;
//             break;
//         case "threeitems":
//             records = 3;
//             break;
//         case "fouritems":
//             records = 4;
//             break;
//         case "sixitems":
//             records = 6;
//             break;
//         case "sevenitems":
//             records = 7;
//             break;
//         case "allitems":
//             records = AllData();
//             break;
//         default:
//             break;
//     }
//     axios.get(url, {
//         params:{
//             _limit: records
//         }
//     }).then((response)=>setItems(response.data))
// } 
//     return(
//         <div>
//              <Table striped bordered hover variant="primary">
//              <thead>
//                 <tr>
//                      <th>Name</th>
//                      <th>Username</th>                     
//                      <th>Email</th>                     
//                      <th>City</th>                     
//                      <th>Street</th>                     
//                      <th>Zipcode</th>                 
//                 </tr>               
//                 </thead>
//                 <tbody>
//                     {
//                         items.map((itemsValue)=>
//                         <tr key={itemsValue.id}>
//                             <td>{itemsValue.name}</td>
//                             <td>{itemsValue.username}</td>
//                             <td>{itemsValue.email}</td>
//                             <td>{itemsValue.address.city}</td>
//                             <td>{itemsValue.address.street}</td>
//                             <td>{itemsValue.address.zipcode}</td>
//                         </tr>
//                         )
//                     }
//                 </tbody>
        
//                     </Table>
//                     <Button name="twoitems" onClick={PrintDatas}>Print 2 Datas</Button>
//                     <Button name="threeitems" onClick={PrintDatas}>Print 3 Datas</Button>
//                     <Button name="fouritems" onClick={PrintDatas}>Print 4 Datas</Button>
//                     <Button name="sixitems" onClick={PrintDatas}>Print 6 Datas</Button>
//                     <Button name="sevenitems" onClick={PrintDatas}>Print 7 Datas</Button>
//                     <Button name="allitems" onClick={PrintDatas}>Print All Datas</Button>
//                 </div> 
//     );
// }
// export default FuncAxios;





 import React from "react";
import axios from "axios";
import { Button, Table } from "react-bootstrap";

class AxiosDataFetch extends React.Component{
    constructor(props){
        super(props);
        this.state = {items:[]}
    }
    handleSaveAllData=()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then((response)=>{
            this.setState({items:response.data});
        });
    }
    componentDidMount(){
        this.handleSaveAllData();
    }
    handleSaveData=(event)=>{
        let switchItems;
        switch (event.target.name) {
            case 'Twoitems':
                switchItems = 2;
                break;
            case 'Threeitems':
                switchItems = 3;
                break;
            case 'Fouritems':
                    switchItems = 4;
                    break;
            case 'Fiveitems':
                switchItems = 5;
                break;
            case 'Allitems':
                    switchItems = this.handleSaveAllData();
                    break;
            default:
                break;
        }
        axios.get(`https://jsonplaceholder.typicode.com/users`, {
            params: {
                _limit: switchItems,
            }
        } )
            .then((response) => {               
                this.setState({ items: response.data });                
            });

    }

    
    render(){
        return(
            <div>
                <Table  bordered hover variant="primary" style={{border: '1px solid black'}} >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Street</th>
                            <th>Zipcode</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.items.map((itemsValue)=>
                            <tr key = {itemsValue.id}>
                                <td>{itemsValue.name} </td>
                                <td>{itemsValue.username} </td>
                                <td>{itemsValue.email} </td>
                                <td>{itemsValue.address.city} </td>
                                <td>{itemsValue.address.street} </td>
                                <td>{itemsValue.address.zipcode} </td>
                        </tr>
                        )
                        }
                       
                    </tbody>

                </Table>
                <Button name="Twoitems" onClick={this.handleSaveData}>Get 2 Data</Button>
                <Button name="Threeitems" onClick={this.handleSaveData}>Get 3 Data</Button>
                <Button name="Fouritems" onClick={this.handleSaveData}>Get 4 Data</Button>
                <Button name="Fiveitems" onClick={this.handleSaveData}>Get 5 Data</Button>
                <Button name="Allitems" onClick={this.handleSaveData}>Get All Data</Button>

            </div>
        );
    }
}

export default AxiosDataFetch;