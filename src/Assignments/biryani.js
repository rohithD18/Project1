import React from "react";
import { Table } from "react-bootstrap";

class Biryanis extends React.Component{
    render(){
        return(
            <Table striped bordered hover variant="dark"   >
            <thead >
            <tr>
                <th style={{color:'red'}}>BIRYANIS</th>
                <th style={{color:'red'}}>PRICES</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Chicken Biryani</td>
                <td>229/-</td>
            </tr>
            <tr>
                <td>Mutton Biryani</td>
                <td>249/-</td>
                
            </tr>
            <tr>
                <td>Chicken Family Pack</td>
                <td>609/-</td>
            </tr>
            <tr>
                <td>Egg Biryani</td>
                <td>199/-</td>
            </tr>
            </tbody>
            </Table>
        );
    }
}

export default Biryanis;