import { createContext, useReducer, useState } from "react";
import CartReducer from "./CartReducer";
const cartContext = createContext();

const CartContextProvider =  ({children})=>{

    const [cart,cartDispatch] = useReducer(CartReducer,[]);

    return (
        <cartContext.Provider value={{cart,cartDispatch}}>
            {children}
        </cartContext.Provider>
    )
}
export {
    cartContext,
    CartContextProvider
}