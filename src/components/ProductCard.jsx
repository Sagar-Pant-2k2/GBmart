import styled from "styled-components";
import DefImage from "../../public/Images/defaultImage.jpg"
import { useNavigate } from "react-router-dom";
const Container = styled.div`
   font-family: 'fantasy', sans-serif;
  overflow: hidden;
  width: 400px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  color : inherit;
  text-decoration: none;
  &:hover{
    border: 2px solid turquoise;
      box-shadow: 0 0 100px 10px rgba(116, 189, 225, 0.2); 
  }
`;
const Image = styled.div`
width: 100%;
overflow: hidden;
    flex:6;
    display: flex;
    align-items: center;
    justify-content: center;
    
`
const Title = styled.div`
padding: 0px 10px;
width: 100%;
font-weight: bold;
font-size: 24px;
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    color: #434141;
   
    display: flex;
    align-items: center;
`
const Cost = styled.div`
display: flex;
align-items: center;
width: 100%;
    flex: 0.5;
    padding: 0px 10px;
    font-size: 20px;
    font-weight: bold;
    border-bottom : 1px solid black;
    border-top : 1px solid black;
`

const Description = styled.div`
    flex: 1.5;
    width: 100%;
    padding: 0px 10px;
    overflow: hidden;
    text-decoration: none;
    color: black;
    font-size: 18px;
`


export default ({title="title",src={DefImage},price="100",description="this is description",id})=>{
    const navigate = useNavigate();
    {console.log("this is id",id)}
    return (
        <Container onClick={()=>navigate(`product/${id}`)}>
            <Image><img src={src} style={{maxWidth:"100%",maxHeight:"100%"}}></img></Image>
            <Title>{title}</Title>
            <Cost>price : Rs {price}</Cost>
            
            {/* <Description>{description}</Description> */}
        </Container>
    )
}