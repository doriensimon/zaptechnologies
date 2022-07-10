import React from "react";
import { TextField } from '@mui/material';
import "./text-input.css";

export default function TextInput(props) {
    return (
        <TextField className="TextField" 
                   id={props.id} 
                   label={props.label} 
                   InputLabelProps={{
                    style: { 
                        color: props.inputError ? "red" : "#FAD02C",
                    }
                   }}
                   InputProps={{
                    style: { color: props.inputError ? "red" : "#FAD02C"},
                   }}
                   sx={{
                    mx: 4,
                    my: 1
                   }}
                   error={props.inputError ? props.inputError : null} 
                   helperText={props.inputError} 
                   variant="outlined" 
                   onChange={(e) => props.setter(e.target.value)} />
    )
}