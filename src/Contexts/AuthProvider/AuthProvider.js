import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
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
    
    // Github signIn:-
    const githubProvider = new GithubAuthProvider();

    const githubLogin = ()=>{
        return signInWithPopup(auth,githubProvider);
    }
  

    // signIn auth:-
    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // signIn google:
    const signInWithGoogle = () =>{
        setLoading(true);
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

    // reset password:
    const resetPassword = (email) =>{
        return sendPasswordResetEmail(auth, email);
    }


    // logOut auth:
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    // useEffect observer?
    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log('user inside auth state change', currentUser);
            if(currentUser === null || currentUser.emailVerified){
                setUser(currentUser)

            }
            setLoading(false);
        })
        
        return ()=>{
            unsubscribe();
        }
    }, [])


    const authInfo = {
        user, loading,
         createUser, providerLogin,
          signIn, logOut,verifyEmail,
           updateUserProfile, setLoading ,
            signInWithGoogle, resetPassword,
             githubLogin
            }



    return (
        <div>
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;