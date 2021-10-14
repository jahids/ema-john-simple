import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Userproduct = () => {
    const [product, setproduct] = useState([]);
    useEffect(() => {

        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setproduct(data));

    }
    ,[])


    return [product, setproduct];
};

export default Userproduct;