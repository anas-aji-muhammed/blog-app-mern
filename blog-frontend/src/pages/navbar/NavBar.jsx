import React, { useEffect } from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import styles from './Navbar.module.scss'
import '../../utils/globalStyles.css'
import { useAuthContext, useUpdateAuthContext } from '../../contexts/authContext';
import { baseUrl } from '../../utils/network_utils';

function NavBar(props) {
    const navigate = useNavigate();
    const userLoggedIn = useAuthContext();
    const toggleLogin = useUpdateAuthContext();
    function logoutUser(event){
        event.preventDefault()
        console.log("Logout user clicked")
        fetch(baseUrl+'/logout',{
            method: 'POST',
            credentials: 'include'
        }).then(response=> response.json())
        .then((data)=>{
            if(data.reqStatus === true){
                toggleLogin(false);
                navigate('/',{ replace : true })
            }
            else{
                alert("Logout failed");
            }
            
        })
        

    }

    ///Check for login status and verify token
    useEffect(()=>{
        fetch(baseUrl+'/userProfile',{
            credentials: 'include'
        }).then(response => response.json())
        .then((data)=>{
            if(data.reqStatus === true){
                toggleLogin(true);
            }
            else{
                toggleLogin(false);
            }
        })
    }, [])

    return (
        <nav className={styles.navBar}>
            <h1>BLOG-APP</h1>
            {userLoggedIn != true?
            <div className={styles.navBarLinksGroup}>
                <NavLink to='/login' id='loginButton' className={styles.loginButton}>Login</NavLink>
                <NavLink to='/signup' id='signupButton' className={styles.signupButton}>Signup</NavLink>
               
            </div>
            : 
            <div className={styles.navBarLinksGroup}>
                <NavLink to='/create' id='createBlogButton' className={styles.loginButton}>Create blog</NavLink>
                <NavLink to='/logout' id='LogoutButton' className={styles.signupButton} onClick={(event)=>logoutUser(event)}>Logout</NavLink>
               
            </div>
            }
            <div className={styles.mobileNavbarMenu}>
                
                </div>
            
        </nav>
    );
}

export default NavBar;