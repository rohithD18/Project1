import React from 'react';
import { useContext } from 'react';
import dataContext from './contextApi';


const Component5 = () => {
    let userValue = useContext(dataContext)
  return (
    <div>
        <h1>Component 5 with user {userValue}</h1>
    </div>
  )
}

export default Component5