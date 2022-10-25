import React from "react";
import { Table } from "react-bootstrap";

class Straters extends React.Component{
    render(){
        return(
            <Table striped bordered hover variant="dark"   >
                <thead>
                <tr>
                    <th style={{color:'red'}}>STRATERS</th>
                    <th style={{color:'red'}}>PRICES</th>
                </tr>
                </thead>
             
                <tbody>
                <tr>
                    <td>Chilli Paneer</td>
                    <td>189/-</td>
                </tr>
                <tr>
                    <td>Chili Chicken</td>
                    <td>279/-</td>
                </tr>
                <tr>
                    <td>Apollo Fish</td>
                    <td>329/-</td>
                </tr>
                <tr>
                    <td>Chicken 65</td>
                    <td>279/-</td>
                </tr>
                </tbody>
            </Table>
        );
    }
}

export default Straters;