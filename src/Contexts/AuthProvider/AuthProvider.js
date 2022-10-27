import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext();

const auth = getAuth(app);




const AuthProvider = ({children}) => {
    const[user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

// signIn Google:
    const googleProvider = new GoogleAuthProvider();

// password Authentification:
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const providerLogin = (provider)=>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
  

    // signIn auth:
    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // signIn google:
    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider);
    }

    // update profile:
    const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser, profile);
    }

    // verify Email:
    const verifyEmail = ()=>{
        return sendEmailVerification(auth.currentUser);
    }


    // logOut auth:
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    // useEffect why use?
    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log('user inside state change', currentUser);
            if(currentUser === null || currentUser.emailVerified){
                setUser(currentUser)

            }
            setLoading(false);
        })
        
        return ()=>{
            unsubscribe();
        }
    }, [])


    const authInfo = {user, loading, createUser, signIn, logOut,verifyEmail, updateUserProfile, setLoading , signInWithGoogle}



    return (
        <div>
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;