import React, { useEffect, useState } from "react";
import "./register.css";
import { Box } from '@mui/material';
import TextInput from "../../elements/text-input/text-input";
import Button from "../../elements/button/button.jsx";
import { Link } from "react-router-dom";
import {
    registerWithEmailAndPassword,
} from "../../services/firebase";

export default function Login() {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [password2, setPassword2] = useState("");
    const [password2Error, setPassword2Error] = useState("");

    async function registerClicked() {
        //check for valid email
        let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        setEmailError(!regex.test(email) ? "Invalid Email" : "");

        //check if password is long enough
        setPasswordError(password.length < 6 ? "Password must be more than 6 characters" : "");

        //check if passwords match
        setPassword2Error(password !== password2 ? "Passwords must match" : "");

        //if any error has been raised, don't try to register
        if (emailError != "" || passwordError != "" || password2Error != "") return;

        const registerResult = await registerWithEmailAndPassword(email, password);

        //TODO: somehow show the register result if there is an error
        console.log(registerResult);
    }

    return (
        <div id="parent">
            <div></div>
            <Box id="login-form" component="form" display="flex" flexDirection="column" margin={"16px"}>
                <TextInput className="TextField" id="email" label="Email" inputError={emailError}  setter={setEmail}/>
                <TextInput className="TextField" id="password" label="Password" inputError={passwordError} setter={setPassword}/>
                <TextInput className="TextField" id="password2" label="Re-enter Password" inputError={password2Error} setter={setPassword2}/>
            <Button id="Register" onClick={registerClicked} text={"Register"} />
            </Box>
            <div id="has-account">
                <p>Already have an account?&nbsp;&nbsp;</p>
                <Link to="/login"><p>Log In</p></Link>
            </div>
        </div>
    )
}