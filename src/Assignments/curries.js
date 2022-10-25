import React from "react";
import { Table } from "react-bootstrap";

class Curries extends React.Component{
    render(){
        return(
            <Table striped bordered hover variant="dark"   >
                <thead>
                <tr>
                    <th style={{color:'red'}}>CURRIES</th>
                    <th style={{color:'red'}}>PRICES</th>
                </tr>
                </thead>
             
                <tbody>
                <tr>
                    <td>Palak Paneer</td>
                    <td>189/-</td>
                </tr>
                <tr>
                    <td>Chicken Masala</td>
                    <td>245/-</td>
                </tr>
                <tr>
                    <td>Kheema Masala</td>
                    <td>289/-</td>
                </tr>
                <tr>
                    <td>Tandoori Chicken</td>
                    <td>299/-</td>
                </tr>
                </tbody>
            </Table>
        );
    }
}

export default Curries;