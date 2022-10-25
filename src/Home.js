import React from 'react';
import dataContext from './contextAPI/contextApi';

const Home =(props)=>{
  props.func("Tarnsforming data from child to parent");
    return (
     
       
      <dataContext.Consumer>
        {(value)=><h1>I am Child Component. {value}</h1>} 
        
      </dataContext.Consumer>
      
    );
}
export default Home;