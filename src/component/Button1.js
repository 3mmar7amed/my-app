import React from 'react';
import {Button } from "@material-ui/core";

function Button1({Value , text , onClick , link }){

    return (
        
        <Button
        type="submit" 
        color="secondary" 
        variant="contained"
        value={Value}
        onClick={onClick}
        href= {link}
        >
        {text}
        </Button>
      )

}

export default Button1 ; 