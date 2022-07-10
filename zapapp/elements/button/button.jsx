import React from "react";
import {Button as Btn} from "@mui/material";
import "./button.css";

export default function Button(props) {
    return (
        <Btn className="Button"
             onClick={props.onClick}
             sx={{
                borderRadius: 28,
                mt: 8,
                mx: 16,
                fontWeight: 700
            }}
             variant="contained">
                {props.text}
        </Btn>
    )
}