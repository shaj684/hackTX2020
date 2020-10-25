import React, {useState, useEffect} from 'react';
import {useForm} from "react-hook-form";
import Axios from 'axios';

export default function SignIn() {
    const {register, handleSubmit, errors } = useForm();

    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerName, setRegisterName] = useState("");
    const [registerAge, setRegisterAge] = useState(null);
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPhoneNumber, setRegisterPhoneNumber] = useState("");
    const [registerPastPosition, setRegisterPastPosition] = useState("");
    const [registerHomeOwner, setRegisterHomeOwner] = useState(false);
    const [registerTimeframe, setRegisterTimeframe] = useState(null);
    const [registerBriggs, setRegisterBriggs] = useState("");
    const [registerFederalAid, setRegisterFederalAid] = useState(false);

    const onSubmit = (data) => {
        setRegisterUsername(data.username);
        setRegisterPassword(data.password);
        setRegisterName(data.name);
        setRegisterAge(data.age);
        setRegisterEmail(data.email);
        setRegisterPhoneNumber(data.phoneNumber);
        setRegisterPastPosition(data.pastProfession);
        setRegisterHomeOwner(data.homeOwner);
        setRegisterTimeframe(data.timeframe);
        setRegisterBriggs(data.briggs);
        setRegisterFederalAid(data.federalAid);

        Axios({
            method: "POST",
            data: {
              username: registerUsername,
              password: registerPassword,
              name:registerName,
              age:registerAge,
              email:registerEmail,
              phoneNumber:registerPhoneNumber,
              pastProfession:registerPastPosition,
              homeOwner:registerHomeOwner,
              timeframe:registerTimeframe,
              briggs:registerBriggs,
              federalAid:registerFederalAid,
            
            },
            withCredentials: true,
            url: "http://localhost:5000/register",
          }).then((res) => console.log(res));
    }

    return(
        <div>
        <h1>Register a New Account</h1>
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

            {errors.email &&<p>{errors.email.message}</p>}
            <div></div>

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
            
            {errors.password &&<p>{errors.password.message}</p>}
            <div></div>

            <input name="name" type="text" placeholder="Name" ref={
                register({
                    required: "Name is required.",
                    maxLength: {
                        value: 80,
                        message: "Name must be less than 80 characters"
                    }
                })
            }/>

            {errors.name && <p>{errors.name.message} </p>}
            <div></div>
            
            <input name="age" type="number" placeholder="Age" ref={
                register({
                    required: "Age is required",
                    min: {
                        value: 18,
                        message: "You must be at least 18 to register."
                    }
                })
            } />

            {errors.age && <p>{errors.age.message} </p>}
            <div></div>

            <input name="phoneNumber" type="number" placeholder="Phone Number" ref={
                register({
                    required: "Phone Number is required",
                    minLength: {
                        value: 10,
                        message: "Phone number must be 10 digits"
                    }
                })
            } />

            {errors.phoneNumber && <p>{errors.phoneNumber.message} </p>}
            <div></div>

            <input name="pastProfession" type="text" placeholder="Last Profession" ref={
                register({
                    required: "Profession is required",
                    maxLength: {
                        value: 80,
                        message: "Profession cannot be longer than 80 characters."
                    }
                })
            } />

            {errors.pastProfession && <p>{errors.pastProfession.message} </p>}
            <div></div>

            <input name="homeOwner" type="checkbox" placeholder="Homeowner?" ref={
                register({
                    required: "Home ownership is required",
                })
            } />

            {errors.homeOwner && <p>{errors.homeOwner.message} </p>}
            <div></div>

            <input name="federalAid" type="checkbox" placeholder="Have you received federal assistance?" ref={
                register({
                    required: "This question is required",
                })
            } />

            {errors.federalAid && <p>{errors.federal.message} </p>}
            <div></div>

            <input name="timeframe" type="number" placeholder="How many weeks do you plan on staying?" ref={
                register({
                    required: "This question is required",
                    maxLength: {
                        value: 1000,
                        message: "Timeframe must be less than 1000 weeks."
                    }
                })
            } />

            {errors.timeframe && <p>{errors.timeframe.message} </p>}
            <div></div>

            <input name="briggs" type="text" placeholder="What is your Meyers Briggs Personality Type?" ref={
                register({
                    required: "This question is required",
                    maxLength: {
                        value: 4,
                        message: "Meyers Briggs scores are 4 letter codes."
                    },
                    minLength: {
                        value: 4,
                        message: "Meyers Bruggs scores are 4 letter codes"
                    }
                })
            } />

            {errors.briggs && <p>{errors.briggs.message} </p>}
            <div></div>
            <button type="submit">Submit</button>
        </form>
        </div>
    );
}