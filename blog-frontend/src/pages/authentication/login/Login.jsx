import React, { useState } from 'react'
import styles from './Login.module.scss'
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../../utils/network_utils';
import { useAuthContext, useUpdateAuthContext } from '../../../contexts/authContext';

export default function Login() {
    const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userLoggedIn = useAuthContext();
  const toggleLogin = useUpdateAuthContext();


  async function loginUser(event){
    event.preventDefault()
    await fetch(baseUrl + '/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        "email": email, "password": password }),
      credentials: 'include'
    })
  .then((response) =>{ 
    console.log(response)
    if(response.ok !=true){
        alert("Login Failed \n")

    }
    else{
      toggleLogin(true);
      navigate('/', {replace: true});
    }
  })
  .catch((error) => console.error('An error occurred:', error));

  }


  return (
    <div className={styles.loginFormContainer}>
      <h1>Login</h1>
      <form className={styles.loginForm} onSubmit={loginUser}>
                <input type="email" id="emailId" name="Email" placeholder='Enter Your Email' value={email} onChange={ev=>{
                  setEmail(ev.target.value)
                }}/>
                <input type="password" id="password" name="Password"  placeholder='Enter Your Password' value={password} onChange={ev=>{
                  setPassword(ev.target.value)
                }}/>
                <button className={styles.loginEmailButton}>Login</button>
            </form>
            <h3>Or</h3>
            <p>Login with</p>
            <p>Don't have an account?</p>
            <div className={styles.signupCancelButtonContainer}>
            <button onClick={()=>navigate('/signup', {replace: true})} className={styles.signupButton}>Signup</button>

            <button onClick={()=>navigate('/')} className={styles.cancelButton}>Cancel</button>
            </div>
    </div>
  )
}
