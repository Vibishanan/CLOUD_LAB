import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js';

import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";




    const firebaseConfig = {
        apiKey: "AIzaSyBiSywO5Sxe0nh3orMmyP0oR5Ih_zYwxRs",
        authDomain: "ml12-d8566.firebaseapp.com",
        projectId: "ml12-d8566",
        storageBucket: "ml12-d8566.appspot.com",
        messagingSenderId: "963331796729",
        appId: "1:963331796729:web:598f1093beaabf5c9a3c28"
      };
      
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

const auth = getAuth(app);
var b3=document.getElementById('submit3');
b3.addEventListener("click",()=>
{
    
   

signOut(auth).then(() => {
    console.log("sign out");
   window.location.href = "index.html";
}).catch((error) => {
    console.log("error");
    console.log(error);
});

   
});