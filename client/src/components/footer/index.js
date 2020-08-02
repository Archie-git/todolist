import React from "react";
import Typography from "@material-ui/core/Typography";

export default function Index(){
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <a color="inherit" href="https://material-ui.com/" style={{textDecoration: 'none'}}>MyDiary</a>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}