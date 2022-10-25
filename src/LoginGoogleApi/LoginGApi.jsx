


// import React, {useState} from 'react';
// import { GoogleLogin, GoogleLogout } from 'react-google-login';

// const LoginComponent=()=>{
//     const [userInfo, setUserInfo]=useState([]);
//     const [errMsg, setErrMsg]=useState("")

//     const handleSucces=(res)=>{
//         console.log(res);
//         setUserInfo(res.profileObj)
//         setErrMsg('')
//     }
//     const handleFailure=(err)=>{
//         console.log(err);
//         setErrMsg(err.error)
//     }
//     const handleLogout=()=>{
//         setUserInfo(null)
       
//     }
//     return(
//      <div>
//          { userInfo ? (
//         <div>
//         <img src={userInfo.imageUrl} alt="gamil info" referrerPolicy='no-referrer'/>
//         <h1>Name: {userInfo.name}</h1>
//         <h1>Email: {userInfo.email} </h1>
//         <h2>GoogleId: {userInfo.googleId}</h2>
//         <br></br>
//         <GoogleLogout 
//         clientId="813755426604-c14fjkrfta5up8p97rptleprf7ua6l3l.apps.googleusercontent.com"
//         buttonText='Gmail LogOut'
//         onLogoutSuccess={handleLogout}
//         />
//        </div>
//        ):(
//         <GoogleLogin
//         clientId="813755426604-c14fjkrfta5up8p97rptleprf7ua6l3l.apps.googleusercontent.com"
//         buttonText='Gmail Login'
//         onSuccess={handleSucces}
//         onFailure={handleFailure} 
//         cookiePolicy="single_host_origin"
//         />
//        )
//       }
//       {errMsg && <h1>{errMsg}</h1>}
//      </div>
//     );

// }
// export default LoginComponent;




// import React, {useState} from 'react';
// import { GoogleLogin, GoogleLogout } from 'react-google-login'

// const LoginGApi = () => {
//     const [profile, setProfile]= useState([]);
//     const[errMssg, setErrMssg]= useState('')
//   const  handleSuccess=(res)=>{
//         console.log(res);
//         setProfile(res.profileObj);
//         setErrMssg('')
//     }
//   const  handleFailure=(err)=>{
//         console.log(err);
//         setErrMssg(err.error)
//     }
//     const handleLogout=()=>{
//         setProfile(null)
//     }
//   return (
//     <div>
//        {profile ?(
//             <div>
//                 <img src={profile.imageUrl} alt= "gmail profile" referrerPolicy='no-referrer'/>
//                 <h2>Name: {profile.name}</h2>
//                 <h2>Email: {profile.email} </h2>
//                 <br />
//                 <br />
//                 <GoogleLogout 
//                 clientId="813755426604-c14fjkrfta5up8p97rptleprf7ua6l3l.apps.googleusercontent.com"
//                 buttonText='Gmail Logout'
//                 onLogoutSuccess={handleLogout}
//                 />
//             </div>
//         ) : (
//             <GoogleLogin 
//             clientId="813755426604-c14fjkrfta5up8p97rptleprf7ua6l3l.apps.googleusercontent.com"
//             // clientId='724190219869-dub73sfbm21l8vvs8232i7unv0g0tf37.apps.googleusercontent.com'
//             buttonText='Gmail Login'
//             onSuccess={handleSuccess}
//             onFailure={handleFailure}
//             cookiePolicy={'single_host_origin'}
//             isSignedIn={true}
//             />
//         )
//         }
//         {errMssg && <h1>{errMssg} </h1>}
//     </div>
//   )
// }

// export default LoginGApi;




// // ------------------------------

// import React from "react";
// //{ useState } 

// import { GoogleLogin, GoogleLogout } from "react-google-login";
// // import axios from 'axios';

// const LoginComponent = () => {
// //   const [errorMsg, setErrorMsg] = useState("");
//   const handleSuccess = (res) => {
//     console.log(res);
//     // setErrorMsg("");
//   };
//   const handleFailure = (err) => {
//     console.log(err);
//     // setErrorMsg(err.error);
//   };
//   const handleLogout = (mssg) => {
//     console.log(mssg);
//   };

//   return (
//     <div>
//       {/* {userProfile ? (
//         <div>
//           <img
//             src={userProfile.imageUrl}
//             alt="Gmail User Profile"
//             referrerPolicy="no-referrer"
//           />
//           <h2>Name: {userProfile.name}</h2>
//           <h3>Email: {userProfile.email}</h3>
//           <br />
//           <br /> */}
//           <GoogleLogout
//             clientId="813755426604-c14fjkrfta5up8p97rptleprf7ua6l3l.apps.googleusercontent.com"
//             buttonText="Gmail Logout"
//             onLogoutSuccess={handleLogout}
//           />
//         {/* </div> */}
//       {/* ) : ( */}
//         <GoogleLogin
//           clientId="813755426604-c14fjkrfta5up8p97rptleprf7ua6l3l.apps.googleusercontent.com"
//           buttonText="Gmail Login"
//           onSuccess={handleSuccess}
//           onFailure={handleFailure}
//           cookiePolicy={"single_host_origin"}
//           isSignedIn={true}
//         />
//        {/* )}
//        {errorMsg && <h2 style={{ color: "red" }}>{errorMsg}</h2>} */}
//     </div>
//   );
// }

// export default LoginComponent;