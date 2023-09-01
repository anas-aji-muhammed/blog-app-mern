import React, { createContext, useState, useContext } from 'react';

export const AuthContext = createContext();
export const AuthUpdateContext = createContext();

export const AuthenticationProvider = ({children}) =>{
    const [userDetails, setUserDetails] = useState({"isLoggedIn": false});
    const [isUserLoggedIn, setLoginStatus] = useState(false);
    function toggleLoginStatus(val){
        setLoginStatus(val);
    }


    return (
        <AuthContext.Provider value={isUserLoggedIn}>
            <AuthUpdateContext.Provider value={toggleLoginStatus}>
                {children}
            </AuthUpdateContext.Provider>
        </AuthContext.Provider>
    )
}

export const useAuthContext = () =>{
    return useContext(AuthContext)
}

export const useUpdateAuthContext = () =>{
    return useContext(AuthUpdateContext)
}