import React from "react";
// import { useState } from "react";
import Component3 from "./component3";
import dataContext from "./contextApi";

const Component2=()=>{
    // const[user,setUser]=useState('Rohith');

    return(
        <dataContext.Provider value="Rohith">
            <h1>Component 2 </h1>
            <Component3 />
        </dataContext.Provider>
        
    )
}

export default Component2;