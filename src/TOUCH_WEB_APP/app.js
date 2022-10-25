import axios from "axios";
import React, {  useState } from "react";
import './app.css';

const SignUpForm = () => {
    const [info, setInfo] = useState({
        fullname:'',
        username: '',
        mobile:'',
        gender:'',
        password:'',
        profilepic:'',
    });
//   const [fullName, setFullName] = useState('');
//   const [userName, setUserName] = useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(fullName);
        // console.log(userName);
        // // console.log(info);
        axios.post(`http://localhost:3000/users`,{
         info,
        }).then((res)=>console.log(res))
        
// http://test.touchapp.in/auth/register
// https://test.touchapp.in/api/profileInfo
        
    }
    const handleChange=(e)=>{
         setInfo({...info,[e.target.name]: e.target.value})

        // setFullName({...fullName,[e.target.name]: e.target.value});
        // setUserName({...userName,[e.target.name]: e.target.value});
    }
  return (
    <div>
      <center>
        <form className="SignUpForm"
        onSubmit={handleSubmit}>
          <fieldset>
            <h1 style={{ textAlign: "center" }}>Sign Up</h1>
            <label>Full Name: </label> 
            <input type={"text"} required name="fullName" 
            onChange={handleChange}/><sup>*</sup>
            <br /><br />
            <label>UserName: </label> 
            <input type={"text"} required name="userName" 
            onChange={handleChange} /><sup>*</sup>
            <br /><br />
            {/* <label>Mobile: </label> 
            <input type={"number"} required name="mobile"
            onChange={handleChange} /><sup>*</sup>
            <br /><br />
            <label>Gender: </label> 
            <input type={"text"} required name="gender"
            onChange={handleChange} /><sup>*</sup>
            <br /><br />
            <label>Password: </label> 
            <input type={"password"} required name="password"
            onChange={handleChange} /><sup>*</sup>
            <br /><br />
            <label>Profile Pic: </label> 
            <input type={"file"} name="profilepic"
            onChange={handleChange} />
            <br /><br /> */}
            <button>Submit</button>
          </fieldset>
        </form>
      </center>
    </div>
  );
};

export default SignUpForm;