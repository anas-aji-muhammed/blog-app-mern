import React, { useEffect, useState } from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import styles from './Navbar.module.scss'
import '../../utils/globalStyles.css'
import { useAuthContext, useUpdateAuthContext } from '../../contexts/authContext';
import { baseUrl } from '../../utils/network_utils';

function NavBar(props) {
    const navigate = useNavigate();
    const userLoggedIn = useAuthContext();
    const toggleLogin = useUpdateAuthContext();
    const [username, setUserName] = useState('');
    // const [isMenuOpen, setisMenuOpen] = useState(false);


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
                setUserName(data.username);
                toggleLogin(true);
            }
            else{
                toggleLogin(false);
            }
        })
    }, [])


    // function menuIconHandle(event, type){
    //     if(type===1) setisMenuOpen(true);
    //     else setisMenuOpen(false);
    // }
    // function handleLinksClick(event){
    //     if(isMenuOpen) setisMenuOpen(false);
    // }


    return (
        <nav className={styles.navBar}>
            <h1>BLOG-APP</h1>
            {userLoggedIn !== true?
            <div className={styles.navBarLinksGroup}>
                <NavLink to='/login' id='loginButton' className={styles.loginButton}>Login</NavLink>
                <NavLink to='/signup' id='signupButton' className={styles.signupButton}>Signup</NavLink>
               
            </div>
            : 
            <div className={styles.navBarLinksGroup}>
                <NavLink to='/create' id='createBlogButton' className={styles.loginButton}>Create blog</NavLink>
                <NavLink to='/logout' id='LogoutButton' className={styles.signupButton} onClick={(event)=>logoutUser(event)}>Logout</NavLink>
                <div className={styles.avatarName}>
                        {username.slice(0,1).toUpperCase()}   
                    
                </div>
            </div>
            }
            {/* <div className={styles.menuIcon}>
            {
                    isMenuOpen?
                    <h1 onClick={(event=>menuIconHandle(event,2))}><GrClose/></h1>:
                    <h1 onClick={(event=>menuIconHandle(event,1))} ><CiMenuFries/></h1>
            }
                
            </div> */}
            
        </nav>
    );
}

export default NavBar;