
import {FaTimes} from 'react-icons/fa' 
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import Checkbox from '@mui/material/Checkbox';
import Grid from '@material-ui/core/Grid'
import { CardHeader } from '@material-ui/core'
import React, { useState } from 'react'

const SingleProduct = ({SingleProduct , id})=>{

    const [checked , setChecked] = useState(false)
    let C = false 
    const handleChange = (e ,productId ) => {
    
        id(productId , e.target.checked)
        setChecked(e.target.checked) 
    }


    return (

        <Grid item xm={12} md={6} lg={4} >
            
            <Card>
            <Checkbox {...label} 
                checked= {checked}
                onChange={(e) => handleChange(e , SingleProduct.id)}
             />
            <CardHeader   title = {SingleProduct.name}/>
            {SingleProduct.SKU}  
            </Card>
        </Grid>
        
    )
}
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export default SingleProduct ; 