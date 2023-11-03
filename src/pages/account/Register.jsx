import styled from "styled-components";
import Wrapper from "../../components/Wrapper";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
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
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate();
    const handleRegister = async (e)=>{

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/;
        if (email && emailPattern.test(email) && password && name) {
            try{

                e.preventDefault(); 
                const res = await axios.post('http://localhost:3000/auth/register',{
                    email,
                    password,
                    userName:name
                });
                localStorage.setItem("email",email);
                localStorage.setItem("password",password);
                navigate('/login');
            }
            catch(err){
                console.log(err);
            }


        } 
    }
    return (
        <Wrapper>
            <Container>

            <h2>CREATE AN ACCOUNT</h2>
            <form>

            <Input onChange={(e)=>setName(()=>e.target.value)} placeholder="Enter Name" type="text" required value={name}></Input>
            <Input onChange={(e)=>setEmail(()=>e.target.value)} placeholder="enter email" type="email" required value={email}></Input>
            <Input onChange={(e)=>setPassword(()=>e.target.value)} placeholder="password" type="password" required value={password}></Input>
            <Submit type="submit" onClick={handleRegister}>CREATE ACCOUNT</Submit>  
            </form>
            <p>already have an account? <Link to="/login">login here</Link></p>
            </Container>
        </Wrapper>
    )
}