import React from 'react';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import Userproduct from '../Hook/userproduct/Userproduct';
import Usecart from './Usecart/Usecart';
import Reviewitem from '../Reviewitem/Reviewitem';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router';

const OrderReview = () => {
    const [products] = Userproduct();
    const [cart,setcart] = Usecart(products);

    const history = useHistory();

    const handleremove = key => {
      const newCart = cart.filter(product => product.key !== key);
        setcart(newCart);
        removeFromDb(key);
    }

    const handleplaceOrder = () => {
        // history.push("/placeorder");

        setcart([]);
        clearTheCart();
    }

    console.log(cart);
    return (
        <div className="shop-container">
            <div className="product-container">

            {

                cart.map(inform => <Reviewitem
                key={inform.key}
                product = {inform}
                handelremove ={handleremove}
                >

                </Reviewitem>)

            }
            </div>

            <div className="cart-container">

            <Cart cart={cart}>
            <button onClick={handleplaceOrder} className="regualar-btn">place order</button>
             </Cart>

            </div>
             
        </div>
    ); 
};

export default OrderReview;