import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged ,createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut} from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init'

// firebase init 
initializeAuthentication();



const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true); 
    const [admin,setAdmin] = useState(false); 
   
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

 
    

// Sign-In with google  
    const handleGoogleSignIn=(location,history) =>{
      signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const destination = location?.state?.from || '/';
      history.replace(destination);
        const user = result.user;
        saveUser(user.email, user.displayName,'PUT');
        
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      })
      .finally(() => setIsLoading(false));

};

// auth Observer
useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
        setUser(user);

      const uid = user.uid; 
    }
    else{
      setUser({});
    }
    setIsLoading(false);
  });

},[])

// user registration
const handleRegister = (email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        // save user to db 
        saveUser(user.email, user.displayName,'POST');
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        // ..
      })
      .then(()=>handleLogout())
        .finally(() => setIsLoading(false));
};

// user post to db 
const saveUser = (email,displayName , method)=>{
  const user = {email, displayName};
  fetch('https://secret-ocean-31277.herokuapp.com/users',{
              method: method,
              headers:{
                  'content-type': 'application/json'
              },
              body: JSON.stringify(user)              
                           
          })
};
// load admin 
      useEffect(()=>{
        fetch(`https://secret-ocean-31277.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
      },[user.email])

//log in with email pw
const handleLogin = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const destination = location?.state?.from || '/';
      history.replace(destination);
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {        
        const errorMessage = error.message;
      })
    .finally(() => setIsLoading(false));
}



// sign out 
const handleLogout = () => {
  setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setIsLoading(false));
      
  };


    return{
        handleGoogleSignIn,
        user,
        handleRegister,
        handleLogin,
        handleLogout,    
        isLoading,
        admin
       };

    
};

export default useFirebase;