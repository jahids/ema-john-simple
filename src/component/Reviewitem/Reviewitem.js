import React from 'react';

const Reviewitem = (props) => {

    const {name, price, quantity, img,key} = props.product;
    const{ handelremove} = props;

    return (
        <div className="product">
            <div>
                <img src={img} alt="" srcset="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p>{price}</p>
                <p>{quantity}</p> 
                <button onClick={() =>  handelremove(key)} 
                className='regualar-btn'>Remove</button>

            </div>
            
        </div>
    );
};

export default Reviewitem;