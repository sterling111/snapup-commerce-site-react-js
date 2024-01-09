import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

const [user, setUser] =useState(null)

useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (user)=>{
        if (user){

            setUser({email:user.email, uid:user.uid})
            console.log("User in auth", user)

        }else{
            setUser(null)
        }
    })

    return () => unsubscribe()
}, [])

return (
    <UserContext.Provider value={user}>
            {children}
    </UserContext.Provider>);
};

