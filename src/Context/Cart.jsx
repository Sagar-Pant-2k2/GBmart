import { createContext, useState } from "react";

const cartContext = createContext();

export default ({children})=>{
    const [cart,setCart] = useState([]);
    return (
        <cartContext.Provider value={{cart,setCart}}>
            {children}
        </cartContext.Provider>
    )
}