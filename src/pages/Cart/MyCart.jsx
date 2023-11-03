
import styled from "styled-components"
import Wrapper from "../../components/Wrapper"
import Card from "./Card"
import CartButton from "./CartButton"
import { useContext, useState } from "react"
import { cartContext } from "../../Context/Cart"
import { ItemContext } from "../../Context/Items"
import EmptyCart from "../../../public/Images/emptyCart.jpg";

const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default ()=>{
    const [total,setTotal] = useState(0);
    const {cart,cartDispatch} = useContext(cartContext);
    const {items} = useContext(ItemContext);
    if(cart.length == 0) {
        return <Wrapper><img src={EmptyCart} ></img></Wrapper>
    }
    else {
        const cards = cart.map((id,index)=>{
            const item = items.find(item=>item.id==id);
            return <Card key={id} title={item.title} price={item.price} src={item.image}onClick={()=>}></Card>
        });
        console.log("this is cards ",cards);
    
    return (
        <Container>
            {cards}
            <div style={{display:"flex",width:"90%",alignItems:"center"}}>
                <h2>Total Price : {total}</h2>
                <CartButton color="#21be53">Proceed to Pay</CartButton>
            </div>
            
        </Container>
    );
    }
}