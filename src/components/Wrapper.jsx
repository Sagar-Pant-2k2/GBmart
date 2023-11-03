import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export default ({children,bgcolor=""})=>{
    return <Container style={{backgroundColor:bgcolor}}>{children}</Container>
}