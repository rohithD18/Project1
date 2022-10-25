import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

// import App from './SignuoLoginaut/App';
// import { BrowserRouter as Router } from "react-router-dom";

// import ClassApp from './classApp';
// import './index.css';
// import './Assignments/Login Nav Carousel/footer.css';
// import LoginComponents from './Assignments/Login Nav Carousel/components';
// import TodoMDN from './todomdn';
// import './todomdn.css';
// import Component1 from './context/component1';
// import ScrapReactjs from './scrap';
// import SimpleCounter from './Assignments/simplecounter';
// import RouteNavBar from "./Assignments/routeNavbar";

// import PhaseComponenets from './ClassComponents/componentphases';
// import EventComps from './ClassComponents/eventcomponent';
// import Home from './Home';

// import HomeClass from './ClassComponents/homeClass';
// import Homepage from './ClassComponents/homePage';
// import AboutUs from './ClassComponents/about';
// import Contact from './ClassComponents/contact';
// import MenuList from './ClassComponents/menulist';

// import CounterFunction from './Assignments/counterfunction'
// import FuncInput from './Assignments/funcInput';
// import AxiosFunction from './Assignments/axiosFunc';
// import SigninSignUp from './Assignments/signupandsignin';
// import HomePageNav from './Assignments/navfooterlogin';
// import ControlledComp from './controlledcomp';
// import dataContext from './contextAPI/contextApi';
// import LoginGApi from './LoginGoogleApi/LoginGApi';
// import GmailLogin from './Assignments/Login Nav Carousel/gLogin';
// import { Provider } from 'react-redux';
// import { legacy_createStore } from 'redux';
// import reducer from './reducers';

import TodoApp from "./TodoReact/app";

// import WeatherApp from "./WeatherReact/App";

// import CalculatorApp from './CalculatorReact/calculatorApp';

// import App from './TOUCH_WEB_APP/app';


const root = ReactDOM.createRoot(document.getElementById("root"));
// const fetchData=(data)=>{
//   console.log(data);
// };
// let store = legacy_createStore(reducer)

root.render(
  <div>
    <div>
      {/* <Provider store={store}>
    <ClassApp />
    </Provider> */}

      {/* <LoginGApi /> */}
      {/* <Component1 /> */}
      {/* 
  <dataContext.Provider value={'Hi I am ContextAPI'}>
    <Home  func={fetchData} />
  </dataContext.Provider > */}
      <>
        {/* Assignments */}
        {/* <SimpleCounter /> */}
        {/* <RouteNavBar /> */}
        {/* <CounterFunction /> */}
        {/* <FuncInput /> */}
        {/* <AxiosFunction /> <br /> */}
        {/* <SigninSignUp /> */}
        {/* <HomePageNav /> */}
        {/* <GmailLogin /> */}
        {/* <LoginComponents /> */}
      </>

      <>
        {/* Practice */}
        {/* <PhaseComponenets phase1="1. Mounting"></PhaseComponenets> */}
        {/* <EventComps></EventComps> */}
        {/* <ControlledComp /> */}
        {/* <TodoMDN /> */}
      </>

      <>
        {/* <HomeClass /> <br></br>
  <Homepage /><br></br>
  <AboutUs ></AboutUs><br></br>
  <MenuList /> <br></br>
  <Contact></Contact> */}
      </>

      <>
        {" "}
        {/* scrap */}
        {/* Phases of Components */}
        {/* <ScrapReactjs phase1="1. Mounting"></ScrapReactjs> */}
        {/* Events */}
        {/* <ScrapReactjs></ScrapReactjs> */}
      </>
    </div>
<React.StrictMode>
<TodoApp />
{/* <WeatherApp /> */}
{/* <CalculatorApp /> */}
{/* <App /> */}
{/* <Router>
      <App />
    </Router> */}
    
</React.StrictMode>
    
  </div>
);
