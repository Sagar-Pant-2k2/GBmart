import styled from 'styled-components'
import DeleteIcon from '@mui/icons-material/Delete';
import Default from '../../../public/Images/defaultImage.jpg';
import CartButton from './CartButton';

const Container = styled.div`
    margin: 20px;
    display: flex;
    width: 90%;
    background-color: #d1cbcb;
    overflow: hidden;
    padding: 10px;
    border-radius: 10px;
    height: 150px;
`
const Img = styled.div`
   
    overflow: hidden;
    border-radius: 10px 0px 0px 10px;
    background-color: red;
    min-width: 120px;
    flex-shrink: 0;
    @media screen and (max-width: 600px){
        flex: 2;
    }
    /* height: 200px;
    width: 200px; */
`

const Title = styled.div`
    flex: 5;
    padding: 0px 10px;
    flex-shrink: 8;
    overflow: hidden;
    font-size: 2rem;
    font-weight: bold;
    
`
const Button = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
    flex: 1;
`

export default ({title="titleasdfasdfa",price=100,src=Default})=>{
    return (
    <Container>
        <Img>
        <img src={src} style={{width:"100%",height:"100%",minWidth:"150px"}}></img>
        </Img>
        <Title>
            {title}
        </Title>
        <Button>
        <h2>price:{price}</h2>
            <CartButton><h3>Remove</h3><DeleteIcon/></CartButton>
        </Button>
    </Container>);
}