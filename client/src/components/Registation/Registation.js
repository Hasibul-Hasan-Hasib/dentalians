import { getAuth, onAuthStateChanged} from '@firebase/auth';
import { Button } from '@mui/material';
import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import '../Login/Login.css';



const Registation = () => {
    
    const auth = getAuth();
    const {signInUsingGoogle,signInUsingGithub,setEmail,setUser,setPassword,setIsLoading,RegisterWithEmail} = useAuth();

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
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

    return (
        <div className='d-flex justify-content-center pb-5 register'>
            <div className='w-50 login'>
                <h1 className="primary-color mb-5">Register Now</h1>
                <form onSubmit={RegisterWithEmail}>
                    <div className="row mb-3">
                        <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="name" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email"
                                onBlur={handleEmail}
                                className="form-control" id="email" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password"
                                onBlur={handlePassword}
                                className="form-control"
                                id="password" />
                        </div>
                    </div>
                    <div>
                        <div> <p>Already Registered? <Link to='/login'>Sign in</Link></p> </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
                <p>-----------or---------</p>
                <Button onClick={signInUsingGoogle} variant="contained" className="mx-2"><i className="fab fa-google"></i></Button>
                <Button onClick={signInUsingGithub} variant="contained" className="mx-2"><i class="fab fa-github"></i></Button>
            </div>

        </div>
    );
};

export default Registation;