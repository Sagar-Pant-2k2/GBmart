import Nav from "./components/Nav"
import { ItemContextProvider } from "./Context/Items";
import Login from "./pages/account/Login"
import Register from "./pages/account/Register"
import Cart from "./pages/Cart/MyCart";
import Home from "./pages/Home/Home";
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Product from "./pages/Product/Product";

export default ()=>{
  return (
    <>
    <ItemContextProvider>

    <BrowserRouter>
    <Nav/>
    
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/product/:id" element={<Product/>}></Route>
      </Routes>
    </BrowserRouter>
    </ItemContextProvider>
    </>
  )
}