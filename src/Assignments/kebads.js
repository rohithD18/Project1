import React from "react";
import { Table } from "react-bootstrap";

class Kebabs extends React.Component{
    render(){
        return(
            <Table striped bordered hover variant="dark"   >
                <thead>
                <tr>
                    <th style={{color:'red'}}>KEBABS</th>
                    <th style={{color:'red'}}>PRICES</th>
                </tr>
                </thead>
             
                <tbody>
                <tr>
                    <td>Chicken Tikka Kebab</td>
                    <td>279/-</td>
                </tr>
                <tr>
                    <td>Mutton Sheek Kebab</td>
                    <td>349/-</td>
                </tr>
                <tr>
                    <td>Hara Bara Kebab</td>
                    <td>249/-</td>
                </tr>
                </tbody>
            </Table>
        );
    }
}

export default Kebabs;