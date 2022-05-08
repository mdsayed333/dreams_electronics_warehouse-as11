import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { FcGoogle } from "react-icons/fc";
import './SocialLogin.css';
import Loadding from '../Shared/Loadding/Loadding';

const SocialLogin = () => {
    const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if(loading){
      return <Loadding></Loadding>
  }
  let displayError;
  if (error) {
    displayError = <p className="text-danger">Error: {error?.message}</p>
  }
  if (user) {
    navigate(from, { replace: true });
  }
    return (
        <div className='py-4'>
            <div className='d-flex align-items-center'>
                <div className='socialOr'></div>
                <small className='p-2 pb-2'>or</small>
                <div className='socialOr'></div>
            </div>
            <div>
                {displayError}
            <button 
                onClick={()=> signInWithGoogle()}
                className="my-button w-50 my-2 d-block mx-auto my-3">
                <FcGoogle style={{width: '50px', fontSize: '30px'}}/>
                <span className="">Google Sign In</span>
            </button>
            </div>
        </div>
    );
};

export default SocialLogin;