import React, { useState } from 'react'
import styles from './SignUp.module.scss'
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../../utils/network_utils';
import { useAuthContext, useUpdateAuthContext } from '../../../contexts/authContext';


export default function SignUp() {
  const navigate = useNavigate();
  const userLoggedIn = useAuthContext();
  const toggleLogin = useUpdateAuthContext();

  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  async function registerUser(event){
    event.preventDefault()
    await fetch(baseUrl + '/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        "email": email, "username": username, "password": password }),
    }) 
  .then((response) =>{ 
    console.log(response)
    if(response.status===400){
      alert("signup failed")
    }
    if(response.reqStatus ===false){
        alert("Registration Failed code \n");

    }
    else{
      toggleLogin(true);
      navigate('/', {replace: true});


    }
  })
  .catch((error) => console.error('An error occurred:', error));

  }
  return (
    <div className={styles.signUpFormContainer}>
      <h1>Signup</h1>
      <form className={styles.signUpForm} onSubmit={registerUser}>
                <input type="text" id="name" name="userName" placeholder='Enter User Name' value={username} onChange={ev=>{
                  setUserName(ev.target.value)
                }}/>
                <input type="email" id="emailId" name="Email" placeholder='Enter Your Email' value={email} onChange={ev=>{
                  setEmail(ev.target.value)
                }}/>
                <input type="password" id="password" name="Password"  placeholder='Enter Your Password' value={password} onChange={ev=>{
                  setPassword(ev.target.value)
                }}/>
                <button className={styles.signupEmailButton}>Singup</button>
            </form>
            <h3>Or</h3>
            <p>Signup with</p>
            <p>Already have an account?</p>
            <div className={styles.logInCancelButtonContainer}>
            <button onClick={()=>navigate('/login')} className={styles.logInButton}>Login</button>

            <button onClick={()=>navigate('/')} className={styles.cancelButton}>Cancel</button>
            </div>
    </div>
  )
}
