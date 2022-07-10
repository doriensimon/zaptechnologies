import React, { useEffect, useState } from "react";
import "./login.css";
import { Box } from '@mui/material';
import TextInput from "../../elements/text-input/text-input.jsx";
import Button from "../../elements/button/button.jsx";
import { Link } from "react-router-dom";
import {
    logInWithEmailAndPassword,
} from "../../services/firebase";

export default function Login() {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    async function loginClicked() {
        //check for valid email
        let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        setEmailError(!regex.test(email) ? "Invalid Email" : "");

        //check if password is long enough
        setPasswordError(password.length < 6 ? "Password must be more than 6 characters" : "");

        //if any error has been raised, don't try to register
        if (emailError != "" || passwordError != "") return;

        const loginResult = logInWithEmailAndPassword(email, password);

        //TODO: somehow show the login result if there is an error
        console.log(loginResult);
    }

    return (
        <div id="parent">
            <div></div>
            <Box id="login-form" component="form" display="flex" flexDirection="column" margin={"16px"}>
                <TextInput className="TextInput" id="email" label="Email" inputError={emailError} setter={setEmail} />
                <TextInput className="TextInput" id="password" label="Password" inputError={passwordError} setter={setPassword} />
                <Button id="login" onClick={loginClicked} text={"Log In"}/>
            </Box>
            <div id="no-account">
                <p>Don't have an account?&nbsp;&nbsp;</p>
                <Link to="/register"><p>Register</p></Link>
            </div>
        </div>
    )
}