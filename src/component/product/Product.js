import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import "./product.css"
import Rating from 'react-rating';

const Product = (props) => {
   const element = <FontAwesomeIcon icon={faShoppingCart} />
   const {category,name,seller,img,price,star} = props.post

  
 
    return (
        <div className="product">
           <div>
        <img src={img} alt="" srcset="" />
           </div>
           <div className="product-name">
        <h2> {name}</h2>
         <h4>price{price}</h4>
        <p>{category}</p>
        <p>{seller}</p>
        <Rating readonly 
        initialRating={star}
         emptySymbol="far fa-star icon-color"
         fullSymbol="fas fa-star icon-color"
        ></Rating>
        <br/>
        <button onClick={()=>props.handleAdd(props.post)} className="regualar-btn" >{element}Add to button</button>
           </div>
        </div>
    );
};

export default Product;