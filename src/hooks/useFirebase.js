import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signInWithEmailAndPassword, signOut,createUserWithEmailAndPassword, updateProfile,sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebaseApp from "../Firebase/Firebase.init";
initializeFirebaseApp();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const [isLoading, setIsLoading] = useState(true);



    const auth = getAuth();

    //---------Providers-------
    const googleProvider = new GoogleAuthProvider();

    //----------google sign in--------
    const signInWithGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
            .finally( ()=> setIsLoading(false))     
    };

    //----------email sign in------------
    const signInWithEmail = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
         .then((result) => {
             setUser(result.user);
         })
         .catch((error) =>{
            setError(error.message)
        })
    }

    //----------create new user-------
    const createNewUser = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            setUserName();
            verifyEmail();
            alert("user has been created");
        })
        .catch((error) =>{
            setError(error.message)
        })
    }


    //--------get name---------
     const handleNameChange = (event) =>{
         setName(event?.target?.value)
     }


    //--------get photo---------
     const handlePhotoChange = (event) =>{
         setPhoto(event?.target?.value)
     }


    //--------get email---------
     const handleEmailChange = (event) =>{
         setEmail(event?.target?.value)
     }


    //--------get password---------
     const handlePasswordChange = (event) =>{
         setPassword(event?.target?.value)
     }



     //---------update profile------
     const setUserName = () => {
        updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo,
        })
         .then(result => {})
         .catch((error) => {
            setError(error.message)
        });
      }

    //------email verification------
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
        .then (() =>{
            alert(`a verification mail has send to ${email}`);
        })
      }

    //-------reset password--------
     const handleResetPassword =(event) =>{
        event.preventDefault();
        sendPasswordResetEmail(auth, email)
        .then(() => {
        alert(" reset password email has been sent");
      })
      .catch((error)=> {
        setError(error.message);
      });
     }
      

    //-------currently signed-in user--------
    useEffect( () =>{
        const unsubscribed= onAuthStateChanged(auth, (signInUser) =>{
            if(signInUser){
                setUser(signInUser);            
            }
            setIsLoading(false);
        });
        return () => unsubscribed; 
    },[])
    
    //-------sign out-------
    const logOut =() =>{
        setIsLoading(true);
        signOut(auth)
         .then(() =>{
             setUser({ })
         })
         .finally( ()=> setIsLoading(false));
    }
    


    return{
        user,
        error,
        isLoading,
        signInWithGoogle,
        logOut,
        signInWithEmail, 
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        createNewUser,
        handlePhotoChange,
        handleResetPassword
    }
};

export default useFirebase;