import { createContext, useReducer, useState } from "react";
import CartReducer from "./CartReducer";
const cartContext = createContext();
import { useEffect } from "react";

const CartContextProvider =  ({children})=>{
    const initialState = localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[];
    const [cart,cartDispatch] = useReducer(CartReducer,initialState);
    useEffect(()=>{
        localStorage.setItem('cart',JSON.stringify(cart));
    },[cart]);
    
    console.log("initialState",initialState);

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