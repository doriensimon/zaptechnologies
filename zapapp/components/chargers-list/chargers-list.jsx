import React, { useEffect, useState } from 'react';
import * as FirestoreService from "../../services/firebase";
import { List, ListItem, ListItemText, ListItemButton, Typography } from "@mui/material";

const ChargersList = React.forwardRef((props, ref) => {
    const [chargersList, setChargers] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        const unsubscribe = FirestoreService.streamCollection("chargers", (querySnapshot) => {
            const updatedChargers = querySnapshot.docs.map(docSnapshot => docSnapshot.data());
            setChargers(updatedChargers);
        }, (error) => setError("chargers-get-fail"));
        return unsubscribe;
    }, []);

    var currencyFormatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    });

    const chargersListItems = chargersList.map((charger, i) => (
        <ListItem key={i} sx={{
            borderColor: "white",
            borderWidth: 1,
            borderTopStyle: "solid",
            "&:last-child": {
                borderBottomStyle: "solid",
            }
        }}>
            <ListItemButton>
                <ListItemText 
                    primary={<Typography style={{color: "white"}}>{charger.chargerName}</Typography>} secondary={<Typography style={{color: "white"}} >{currencyFormatter.format(charger.rate)}/kWh</Typography>}
                />
            </ListItemButton>
        </ListItem>
    ));

    return (
        <div>
            <List>
                {chargersListItems}
            </List>
        </div>
    );
})

export default ChargersList;