import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { BrowserRouter,Routes,Route, Link } from "react-router-dom";
import Login from "../scrap"
//signup form

let Signup = () => {
    let [username, setData] = useState([])
    let [password, setPassword] = useState([])
    
    let userIdData = (event) => {
    setData(event.target.value)
    }
    let userPasswordData = (event) => {
        setPassword(event.target.value)
    }


    let submitedData = () => {
        let signupData = {
            title: username,
            author: password
        }
        axios.post("http://localhost:3001/posts", signupData)
        .then((response) =>  console.log(response.data) );
    }
    let loginButton = (event) => {
        // event.preventDefault()
        // window.open("./login.jsx")
    }

    return( 
        <div>
            
            <form>
            <label>Username</label><br/>
            <input type="text" name="username"  required onChange={userIdData}></input>
            <br/>
            <label>Password</label>
            <br/>
            <input type="password" name="password" required onChange={userPasswordData}></input>
            <br/>
            <br/>
            <BrowserRouter>
            <Button type="submit"   onClick={submitedData}><Link to='./scrap'> Sign Up</Link></Button>
            <br/>
            <br/>
            {/* <Button Link="./login" type= "button" >R</Button> */}
            <Routes> 
                <Route path= "./scrap" element={<Login/>} />
             </Routes>
            <Button type= "button" onClick={loginButton}>Login</Button> 
            </BrowserRouter>
            </form>
           
        </div>
    )
}

export default Signup;