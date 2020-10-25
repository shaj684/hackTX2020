import React, {useState, useEffect} from 'react';
import {useForm} from "react-hook-form";

export default function SignIn() {
    const {register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return(
        <div>
        <head>
            <link rel="stylesheet" href="App.css"></link>
        </head>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input  name="email" type="text" placeholder="Email" ref={
                register({
                    required: {
                        value: true,
                        message: "Email is required"
                    }, 
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                        message: "Please enter a valid email."
                    } 
                }
                )}/>
           
            <input name="password"  type="password" placeholder="Password" ref={
                register({
                    required:{
                        value:true,
                        message: "Password is required"
                    }, 
                    minLength: {
                        value: 8,
                        message: "Password is too short"
                    }
                })
            } />
            
            <button type="submit">Submit</button>
            {errors.email &&<p>{errors.email.message}</p>}
            {errors.password && <p>{errors.password.message}</p>}
        </form>
        </div>
    );
}