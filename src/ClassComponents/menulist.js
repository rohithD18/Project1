import React from "react";
import { Table } from "react-bootstrap";

class MenuList extends React.Component{
    constructor(props){
        super(props);
            this.style = {color: 'red'}
    }
    render(){
        return(
            <>
            <div style={{paddingLeft:'100px',paddingRight:'100px'}}>
            <h2 style={{color:'tomato',textAlign:'center'}}>Menu</h2>
            <Table striped bordered hover variant="dark"   >
                <thead >
                <tr>
                    <th style={{color:'red',width:'950px'}}>BIRYANIS</th>
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
                <tr>
                    <th style={{color:'red'}}>KEBABS</th>
                    <td> </td>
                </tr>
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
                <tr>
                    <th style={{color:'red'}}>STRATERS</th>
                    <td> </td>
                </tr>
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
                <tr>
                    <th style={{color:'red'}}>CURRIES</th>
                    <td> </td>
                </tr>
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
                <tr>
                    <th style={{color:'red'}}>DESERTS</th>
                    <td></td>
                </tr>
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
            </div>
            </>
        );
    }
}
export default MenuList