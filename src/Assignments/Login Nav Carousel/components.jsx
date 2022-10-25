import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Component1 from '../../context/component1';
import Component2 from '../../context/component2';
import Component3 from '../../context/component3';
import Component4 from '../../context/component4';
import Component5 from "../../context/component5";

const components = () => {
  return (
<div >
<BrowserRouter >
<ul className="compLinks">
    <li><Link to="/component1" target={'_blank'} id="compLink">Component1 </Link> </li>
    <li><Link to="/component2" target={'_blank'} id="compLink">Component2</Link></li>
    <li><Link to="/component3" target={'_blank'} id="compLink">Component3</Link></li>
    <li><Link to="/component4" target={'_blank'} id="compLink">Component4</Link></li>
    <li><Link to="/component5" target={'_blank'} id="compLink">Component5</Link></li>
</ul>
    <Routes>
        <Route path='/component1' element={<Component1 />}/>
        <Route path='/component2' element={<Component2 />}/>
        <Route path='/component3' element={<Component3 />}/>
        <Route path='/component4' element={<Component4 />}/>
        <Route path='/component5' element={<Component5 />}/>
    </Routes>
</BrowserRouter>
</div>
  )
}

export default components


