import React from 'react';
import "./cart.css";

const Cart = (props) => {

    const {cart} = props;

    let total = 0;
    for(const product of cart ){
        total = total + product.price;
    }
    const shipping = total > 0 ? 15 : 0 ;
    const tax = (total + shipping) * 0.10 ;

    const grandtotal = total+ shipping + tax;




    return (
        <div>
            <h3>order summary</h3>
            <h3>items order:{cart.length}</h3>
            <h2>total{total.toFixed(2)}</h2>
            <p>SHIPPING{shipping}</p>
            <p>tax{tax.toFixed(2)}</p>
            <h5>Grand total {grandtotal.toFixed(2)}</h5>
            {props.children}
           
        </div>
    );
};

export default Cart;