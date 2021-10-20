import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut   } from "firebase/auth";
import initializeAuthentication from '../Pages/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = getAuth();

    const createUserWithEmailAndPassword = () =>{
        createUserWithEmailAndPassword(auth, email, password)
           .then(result =>{
               setUser(result.user);
           })
    }

    const signInUsingGoogle = () =>{
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            setUser(result.user);
        })
        .finally(()=>setIsLoading(false));
    }

    const logOut = () =>{
        setIsLoading(true);
        signOut(auth)
        .then(()=>{
            setUser({})
        })
        .finally(()=> setIsLoading(false));
    }

    useEffect(()=>{
       const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } 
            else{
                setUser({});
            }
            setIsLoading(false);
          }); 
          return () => unsubscribed;
    },[])

    return{
        user,
        isLoading,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;

