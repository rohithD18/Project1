import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBM7Ey0ji4nKX3Af35TcRliYfPvFKFffTQ",
    authDomain: "touchtask-auth.firebaseapp.com",
    projectId: "touchtask-auth",
    storageBucket: "touchtask-auth.appspot.com",
    messagingSenderId: "259186569610",
    appId: "1:259186569610:web:a5d80f36abaa473f949873"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
export default app;