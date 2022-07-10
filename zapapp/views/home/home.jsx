import React, { useState, useEffect } from "react";
import "./home.css";
import TextInput from "../../elements/text-input/text-input.jsx";
import GoogleMapsSearch from "../../elements/google-maps-autocomplete/google-maps-autocomplete";
import ChargersList from "../../components/chargers-list/chargers-list";
import { Animate } from 'react-move'
import { easeExpOut } from 'd3-ease'
import { Slide } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Home() {

    const [query, setQuery] = useState("");
    const [searching, setSearching] = useState(false);

    const onFocusChange = () => {
        if (!searching) {
            setSearching(!searching);
        }
        else if (searching && query == "") {
            setSearching(!searching);
        }
    }

    return (
        <div id="parent">
            <div id="header">
                <p>Zap</p>
                <MenuIcon/>
            </div>
            <Animate
                start={() => ({
                    contianerHeight: 0
                })}

                update={() => ({
                    contianerHeight: [searching ? 400 : 0],
                    timing: { duration: 750, ease: easeExpOut },
                })}>
                {(state) => {
                    const { contianerHeight } = state

                    return (
                        <div
                            onFocus={onFocusChange}
                            onBlur={onFocusChange}
                            style={{
                                height: contianerHeight
                            }}>
                            <GoogleMapsSearch id="searchbar"/>
                            {/* <TextInput className="TextInput" id="searchbar" label="Search Now" setter={setQuery} /> */}
                        </div>
                    );
                }}
            </Animate>
            <div></div>
        </div>
    )
}