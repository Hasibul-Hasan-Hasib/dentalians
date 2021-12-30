import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword,GithubAuthProvider } from "firebase/auth";
import initializationAuthentication from "../Firebase/firebase.init";


initializationAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth()
    const signInUsingGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }
    const signInUsingGithub = () => {
        setIsLoading(true)
        const githubProvider = new GithubAuthProvider();
        return signInWithPopup(auth, githubProvider)
    }
    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value);
    }
    const RegisterWithEmail = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user)
            })
            .catch((error) => {
                setError(error.message)
            });
    }
    const loginWithEmail = () => {
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            setUser(userCredential.user)
        })
        .catch((error)=>{
            setUser(error.message)
        })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
    }, [auth])
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => {
                setIsLoading(false)
            })
    }
    return {
        email,
        password,
        user,
        error,
        auth,
        isLoading,
        setIsLoading,
        setError,
        setUser,
        setEmail,
        setPassword,
        signInUsingGoogle,
        signInUsingGithub,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        loginWithEmail,
        handleEmail,
        handlePassword,
        RegisterWithEmail,
        logOut
    }

}
export default useFirebase;