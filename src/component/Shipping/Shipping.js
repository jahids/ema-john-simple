import React from 'react';
import { useForm } from "react-hook-form";
import UseAuth from '../Hook/UseAuth';
import "./shipping.css"

const Shipping = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const {user} = UseAuth();

    return (
        <div>
            <h1>This is shipping</h1>
    <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
     
      <input placeholder="Name" defaultValue={user.displayName} {...register("name")} />
      <input placeholder="Email" defaultValue={user.email} {...register("email",  { required: true })} />
      <input defaultValue="" placeholder="Address" {...register("Address")} />
      <input placeholder="City" defaultValue="" {...register("City")} />
      <input placeholder="Phone Number" defaultValue="" {...register("phone Number")} />
      {errors.email && <span className="error">This field is required</span>}
      
      <input type="submit" />
   </form>
        </div>
    );
};

export default Shipping; 