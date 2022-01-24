
import Card from '@material-ui/core/Card'
import Checkbox from '@mui/material/Checkbox';
import Grid from '@material-ui/core/Grid'
import { CardHeader } from '@material-ui/core'
import React, { useState } from 'react'
import { Container, Typography } from "@material-ui/core";
import { borders } from '@mui/system';


const SingleProduct = ({SingleProduct , id})=>{

    const [checked , setChecked] = useState(false)
    let C = false 
    const handleChange = (e ,productId ) => {
    
        id(productId , e.target.checked)
        setChecked(e.target.checked) 
    }


    return (

        <Grid item xm={12} md={6} lg={4} >
            
        <Card style={{ border: "black 2px solid"}} className="out-card" sx={{ border: 50 }}  >
            <div className = "delete-checkbox" id ="delete-checkbox">
                <Checkbox {...label} 
                    checked= {checked}
                    onChange={(e) => handleChange(e , SingleProduct.id)}
                />
            </div>
            
        <div className='card'>
           <Typography variant="h5" component="div">
            {SingleProduct.SKU}  
           </Typography>
            <Typography variant="h5" component="div">
            {SingleProduct.name}  
           </Typography>
           <Typography variant="h5" component="div">
           {SingleProduct.dimension} 
           </Typography>
           <Typography variant="h5" component="div">
           {SingleProduct.price} 
           </Typography>
             
        </div>
            </Card>
            
        </Grid>
        
    )
}
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export default SingleProduct ; 