import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";


const FuncInput=()=>{
    let [data, setData] = useState([]);
    let [store, setStore] = useState('');

  let  handleChange = (event) => {
        setData({
            [event.target.name]  : event.target.value,
        })
    }
  let  handleSubmit = (event) => {
        event.preventDefault();
        let newData = [...data];
        newData.push(store);
        setData({
            data:newData,
        })
    }
    
    return(
        <div>
            <h1>Todo List</h1>
                <Form onSubmit={handleSubmit}>
                    <input type="text" name="searchData" id="searchData" autoComplete='off'
                     onChange={handleChange} />
                    <br /><br />
                    <Button  type='submit' >Submit</Button>
                    <ul>{store}</ul>
                </Form>
        </div>
    );
}

export default FuncInput;