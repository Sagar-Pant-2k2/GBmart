import styled from "styled-components";
import Wrapper from "../../components/Wrapper";
import { Link } from 'react-router-dom';
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
    &:hover {
        background-color: #212020;
    }
`

const Container = styled.div`
    max-width: 450px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export default () => {
    const [email, setEmail] = useState(localStorage.getItem('email')?localStorage.getItem('email'):"");
    const [password, setPassword] = useState(localStorage.getItem('password')?localStorage.getItem('password'):"");

    const handleLogin = async (e) => {
        
        
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/;
        
        if (email && emailPattern.test(email) && password) {
            e.preventDefault(); 
            try{

                const res = await axios.post('http://localhost:3000/auth/login',{
                    email,
                    password
                });
                

            }
            catch(err){
                console.log(err);
            }


        } 
      };
      

    return (
        <Wrapper>
            <Container>
                <h2>LOGIN</h2>
                <form onSubmit={handleLogin}>
               
                    <Input
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                  
                    <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <Submit type="submit" onClick={handleLogin}>Login</Submit>
                </form>
                <p>New to the platform? <Link to="/register">Create an account</Link></p>
            </Container>
        </Wrapper>
    )
}
