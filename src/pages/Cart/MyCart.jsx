
import styled from "styled-components"
import Wrapper from "../../components/Wrapper"
import Card from "./Card"
import CartButton from "./CartButton"
import { useState } from "react"

const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default ()=>{
    const [total,setTotal] = useState(0);
    return (
        <Container>
            <Card/>
            <Card/>
            <Card/>
            <div style={{display:"flex",width:"90%",alignItems:"center"}}>
                <h2>Total Price : {total}</h2>
                <CartButton color="#21be53">Proceed to Pay</CartButton>
            </div>
            
        </Container>
    )
}