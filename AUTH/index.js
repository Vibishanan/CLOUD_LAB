
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js';

import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";




    const firebaseConfig = {
      apiKey: "AIzaSyCQmSGmdpQQ_qUMS6Lz2Zgx0KNfRH_3wuQ",
      authDomain: "lab1-5e386.firebaseapp.com",
      projectId: "lab1-5e386",
      storageBucket: "lab1-5e386.appspot.com",
     messagingSenderId: "947546875199",
     appId: "1:947546875199:web:55ec2d4d8a2cec27169f8a",
     measurementId: "G-85KCS0TZ5X"
      };
      
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
var b1=document.getElementById('submit2');
const auth = getAuth(app);
b1.addEventListener("click",()=>
{
    var email=document.getElementById('name1').value;
    var password=document.getElementById('pass1').value;
   

    
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        
     const user = userCredential.user;
       console.log("create succesfully"+user);

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage);
        console.log("create not succesfully");
      });
})

var b2=document.getElementById('submit');
b2.addEventListener("click",()=>
{
    var email=document.getElementById('name').value;
    var password=document.getElementById('pass').value;
   
    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        
        const user = userCredential.user;
        console.log("user  login sucesssfully"+user);
     window.location.href = "home.html";
      })
      .catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("user login unsuceessfully");
        console.log(errorCode,errorMessage);
      });
   
});

var b4=document.getElementById('submit4');
b4.addEventListener("click",()=>
{
    
    
    signInWithPopup(auth, provider)
      .then((result) => {
        
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
       
        const user = result.user;
     
        console.log(user);
        window.alert("Signed in with Google");
        window.location.href = "home.html";
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        
        console.log(errorCode, errorMessage);
        // ...
      });

   
});
