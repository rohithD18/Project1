import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import axios from 'axios';
import { useState } from 'react';
import {  Container,   Navbar } from 'react-bootstrap';
import ProfileLogo from '../Login Nav Carousel/profile.jpg';
import Components from './components';
import CarouselBody from './carousal';
import FooterLog from './footerLog';


const GmailLogin = () => {
    const [comp, setComp] = useState('');
    const [isLoggedIn, setIsLoggedIn]= useState(
        sessionStorage.getItem("isLoggedIn")|| null
    );    
   const handleSuccess=(res)=>{
    setComp(<Components ></Components>);
        let userData = res.profileObj;
        console.log(userData);
        axios
        .get(`http://localhost:3001/users/${res.profileObj.googleId}`) 
        .then((response)=>{ 
            console.log(response);
            sessionStorage.setItem("isLoggedIn", true);
           setIsLoggedIn(true);
        }).catch((error)=>{
            axios.post("http://localhost:3001/users", {
                ...userData,
                id: userData.googleId,
            }); 
            sessionStorage.setItem('isLoggedIn', true);
            setIsLoggedIn(true);
        });
        
   };
   const handleFailure=(err)=>{
    console.log(err);
    
   }
   const handleLogout =(response)=>{
    setComp("");
    sessionStorage.clear();
    setIsLoggedIn(false)
   }
   
  return (
   <div>
    <Navbar   className='navBar'>
        <Container  >
            <img src={ProfileLogo} alt=" logo" style={{width:'45px', borderRadius:'15px'}}/>
            <h3 > {comp} </h3>
        <div >
        { isLoggedIn ? (
                <GoogleLogout 
                clientId="813755426604-c14fjkrfta5up8p97rptleprf7ua6l3l.apps.googleusercontent.com"
                buttonText='Gmail LogOut'
                onLogoutSuccess={ handleLogout} 
                />
            ) : (
                <GoogleLogin 
         clientId="813755426604-c14fjkrfta5up8p97rptleprf7ua6l3l.apps.googleusercontent.com"
         buttonText='Gmail Login'
         onSuccess={(response)=>{
            handleSuccess(response);
        }}
         onFailure={(response)=>{
            handleFailure(response);
        }}
         cookiePolicy="single_host_origin"
         isSignedIn={true}
        />
            )
        }
    </div>
    </Container>
    </Navbar>
    <CarouselBody /> 
    <FooterLog />
</div>
  );
};
export default GmailLogin;