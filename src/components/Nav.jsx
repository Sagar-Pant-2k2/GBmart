import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { useContext, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { cartContext } from '../Context/Cart';

const Container = styled.div`
    display: grid;
    align-items: center;
    width: 100vw;
    grid-template-columns: 1fr auto 1fr;
    min-height: 60px;
    box-shadow: 5px 5px 5px 0.5px rgba(0, 0, 0, 0.5);
    padding: 0px 15px;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Helvetica Neue, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
`
const Left = styled.div`
display: flex;
    height: 100%;
    align-items: center;
    /* justify-content: center; */
`
const Mid = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Right = styled.div`
    height: 100%;
    display: flex;
    padding: auto;
    align-items: center;
    justify-content: flex-end;
`
const NavItem = styled.div`
    margin: 0px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export default ()=>{
    const navigate = useNavigate();
    const {cart} = useContext(cartContext);
    const [show,setShow] = useState(0);
    return (
    <Container>
        <Left>
            {show ? <CloseIcon onClick={()=>setShow(()=>!show)}/> : <MenuIcon onClick={()=>setShow(()=>!show)}/>}
            
        </Left>
        <Mid>
            <h1 onClick={()=>{navigate("/")}}>GBmart</h1>
        </Mid>
        <Right>
            <NavItem onClick={()=>{navigate('/login')}}>
                <h3>Login</h3>
            </NavItem>
            <NavItem>

            <SearchIcon/>
            </NavItem>
            <NavItem>

            <Badge badgeContent={cart.length} color="primary">

                <ShoppingCartIcon onClick={()=>navigate('/cart')}/>
            </Badge>
            </NavItem>
        </Right>
    
    </Container>)
}