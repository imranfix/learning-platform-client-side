import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';
import { current } from 'daisyui/src/colors';


export const AuthContext = createContext();

const auth = getAuth(app);




const AuthProvider = ({children}) => {
    const[user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // signIn function:
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // signIn google:
    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider);
    }

    // logOut function:
    const logOut = () =>{
        return signOut(auth);
    }

    // useEffect why use?
    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
            console.log('auth changed', currentUser);
        })
        return ()=>{
            unsubscribe();
        }
    }, [])


    const authInfo = {user, loading, createUser, signIn, logOut, signInWithGoogle}



    return (
        <div>
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;