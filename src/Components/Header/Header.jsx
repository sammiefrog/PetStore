import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

export default function Header() {
    return (
        <Box border={5} borderColor="primary.main" padding={4}>
            <Typography variant="h3" component="h2" align="center" color="secondary" gutterBottom>
                Swagger Pet Store
            </Typography>
        </Box>
    )
}