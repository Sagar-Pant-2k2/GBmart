import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({children})=>{
    const [loggedIn,setLoggedIn] = useState(false);
    
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}
export {
    AuthContext,
    AuthContextProvider
}