import styled from "styled-components";
import Wrapper from "../../components/Wrapper";
import { Link } from 'react-router-dom';

const Input = styled.input`
    max-width: 450px;
    width: 90%;
    border: 1px solid black;
    height: 30px;
    padding: 0px 10px;
    margin: 10px;
`
const Submit = styled.button`
    max-width: 450px;
    width: 90%;
    border: 1px solid black;
    height: 30px;
    padding: 0px 10px;
    margin: 10px;
    background-color: black;
    color: white;
    transition: background-color 0.3s ease; 
    &:hover{
        background-color: #212020;
    }
`
const Container = styled.div`
    /* padding: 10px; */
    max-width: 450px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export default ()=>{
    return (
        <Wrapper>
            <Container>

            <h2>LOGIN</h2>
            <Input placeholder="enter email" type="email"></Input>
            <Input placeholder="password" type="password"></Input>
            <Submit>Login</Submit>  
            <p>new to the platform? <Link to="/register">create an account</Link></p>
            </Container>
        </Wrapper>
    )
}