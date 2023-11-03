import { useContext, useEffect } from 'react';
import Default from '../../../public/Images/defaultImage.jpg';
import './styles.css';
import {useParams} from 'react-router-dom';
import { ItemContext } from '../../Context/Items';
import Wrapper from '../../components/Wrapper'
import { cartContext } from '../../Context/Cart';
const Product = () => {
    const {cart,cartDispatch} = useContext(cartContext);
    const id = useParams().id;

    const handleAdd = () => {
        cartDispatch({
            type: "addToCart",
            payload: id, 
        });
    }
    
    const {items} = useContext(ItemContext);
    console.log(items);
    const product = items.find(item => item.id == id);
    if(!product) {
        return (
            <Wrapper>
                <h1>No such item found ;(</h1>
            </Wrapper>
        )
    }
    else{
        return (
        <div className="productContainer">
            <div className="productLeft">
                <img className="productImage" src={product.image} alt="Product Image" />
            </div>
            <div className="productRight">
                <div className="productTitle">
                    <h1>{product.title}</h1>
                </div>
                <div className="productDescription">
                    <p>{product.description}</p>
                </div>
                <div className="productPrice">
                    <h2>Price : {product.price}</h2>
                </div>
                
                    <button onClick={handleAdd}><h2>Add To Cart</h2></button>
                
            </div>
        </div>
    );
    }
}

export default Product;
