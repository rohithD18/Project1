import React from "react";
import { Table } from "react-bootstrap";

class Deserts extends React.Component{
    render(){
        return(
            <Table striped bordered hover variant="dark"   >
                <thead>
                <tr>
                    <th style={{color:'red'}}>DESERETS</th>
                    <th style={{color:'red'}}>PRICES</th>
                </tr>
                </thead>
             
                <tbody>
                <tr>
                    <td>Double Ka Meetha</td>
                    <td>104/-</td>
                </tr>
                <tr>
                    <td>Gulab Jaamun</td>
                    <td>125/-</td>
                </tr>
                <tr>
                    <td>Strawberry Ice Cream</td>
                    <td>125/-</td>
                </tr>
                </tbody>
            </Table>
        );
    }
}

export default Deserts;