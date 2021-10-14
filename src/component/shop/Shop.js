import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import  "./shop.css";

const Shop = () => {
    const [product, setproduct]=useState([]);
    const [cart, setCart] = useState([]);
    const [displayProduct, setdisplayProduct] = useState([]);

    useEffect(() => {
        fetch("./products.json")
        .then(res => res.json())
        .then(data => {
          setproduct(data)
        setdisplayProduct(data)

        });


    },[]);

    useEffect(() => {
        
        
           if(product.length){
            const savedCart = getStoredCart();
            const storedCart = [];
            for(const key in savedCart){
            const addedProduct = product.find( product => product.key === key);
            storedCart.push(addedProduct); 
            if(addedProduct){
                const quantity = savedCart[key]; 
                addedProduct.quantity = quantity;
                storedCart.push(addedProduct);
            }
           }
           setCart(storedCart);
        }
    },[product])

    const handleAdd = (product) => {
        const exist = cart.find(pd =>pd.key === product.key); 
        let newCart = [];

        if(exist){
            
            const rest = cart.filter(pd => pd.key !== product.key);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, product];
        }else{

            product.quantity = 1;
            newCart = [...cart, product];
            

        }
        // const  newCart = [...cart, product];
        setCart(newCart);
        // save to local storage
        addToDb(product.key);

    }

    const handleSearch = event => {
        const seachText = (event.target.value);
        const mathcedProduct = product.filter(products => products.name.
            toLowerCase().includes(seachText.toLowerCase()));
            setdisplayProduct(mathcedProduct);
    }

    return (
        <div>

                 <div className="search-container">
                    <input type="text" 
                    onChange={handleSearch}
                    placeholder="Search product" />
                 </div>
                 
            <div className="shop-container">
                <div className="product-container">
                    <h3>product:{product.length}</h3>
                    {

        displayProduct.map(data => <Product 
                key={data.key}
                 post={data}
                 handleAdd ={handleAdd}
                 >

                 </Product>)
        }
                </div>

                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to="/orderReview">
                    <button className="regualar-btn"> Review order</button>
                        </Link>

                    </Cart>
                </div>
            </div>
        </div>

        
    );
};

export default Shop;