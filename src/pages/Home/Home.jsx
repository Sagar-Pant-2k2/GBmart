import { useContext, useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import Wrapper from "../../components/Wrapper";
import axios from "axios";
import { ItemContext } from "../../Context/Items";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import  Carousel from "../../components/Crousel";
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`
export default () => {
  const { items, setItems } = useContext(ItemContext);
  useEffect(() => {
    const loadData = async () => {
     
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        localStorage.setItem("products", JSON.stringify(res.data));
        setItems(() => res.data);
      } catch (err) {
        console.log(err);
      }
    };
    loadData();
  }, []);
  
  if (items) {
   
    const cards = items.map((item, index) => {

      console.log(item.id);
      return (<ProductCard
      key={item.id}
      id = {item.id}
      title={item.title}
      src={item.image}
      price={item.price}
      description={item.description}
      ></ProductCard>)
    }
       
      );
      
    return (
      <Wrapper>
        <Carousel/>

        <div style={{ minHeight: "50vh", padding: "20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#3ca4be", color: "white", fontFamily: "'Roboto', sans-serif" }}>
          <h1 style={{color:"#f3f4f9",fontSize:"50px"}}>About GBmart</h1>
          <p>
            <p style={{margin : "20px 0",fontSize:"24px"}}> GBmart is the ultimate online marketplace tailored exclusively for the dynamic student community of our college. With the primary goal of fostering sustainability and environmental responsibility, GBmart offers students a convenient platform to resell the items they no longer need, reducing waste and the carbon footprint associated with constant consumption.
            </p>
            <p style={{margin : "20px 0",fontSize:"24px"}}>
              Whether it's textbooks, electronics, clothing, or other essentials, GBmart empowers students to declutter their lives while giving others access to affordable, gently-used items, contributing to a more eco-friendly campus.
            </p>
            <p style={{margin : "20px 0",fontSize:"24px"}}>

              This user-friendly platform not only promotes responsible consumption but also strengthens the sense of community among our students, creating a win-win situation for all. Join GBmart today and turn your unused items into opportunities while helping the environment.
            </p>
            </p>
        </div>
        
        <Container>
          {cards}
        </Container>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h1>Network issue</h1>
    </Wrapper>
  );
};
