import React from "react";
import ShopIcon from "@material-ui/icons/Shop";
import Button from "@material-ui/core/Button";

export default function ShopButton(props) {
    return (
        <Button variant="outlined" color="secondary" data-id={props.id} data-name={props.petName} onClick={props.markAsSold}><ShopIcon /></Button>
    );
}