import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../../../utilities/fakedb';

const Usecart = (Products) => {
    const [cart, setcart] = useState([]);

    useEffect(() =>{

        if(Products.length){
            const savedCart = getStoredCart()
            const storedCArt = [];
            for(const key in savedCart){
                 const addedproduct = Products.find(product => product.key===key );

                 if(addedproduct){
                    //  set quantity
                    
                    const quantity = savedCart[key];
                    addedproduct.quantity = quantity;
                    storedCArt.push(addedproduct);

                 }  
            }

            setcart(storedCArt);

        }

    },[Products]) 
    
    return[cart, setcart  ];
};

export default Usecart;