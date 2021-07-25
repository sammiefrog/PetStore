import React from "react";
import ShopIcon from "@material-ui/icons/Shop";
import Button from "@material-ui/core/Button";

export default function ShopButton({id, name, markAsSold}) {
    return (
        <Button variant="outlined" color="secondary" onClick={(e)=> markAsSold(id, name)}><ShopIcon /></Button>
    );
}