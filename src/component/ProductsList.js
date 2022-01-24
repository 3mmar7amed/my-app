import SingleProduct from "./SingleProduct"
import Grid from '@material-ui/core/Grid'
import {  Container, Typography } from "@material-ui/core";
import Stack from '@mui/material/Stack';

import '../App.css';
import Button1 from './Button1'


const ProductsList = ({ Products }) => {


  let Products_IDs = new Map();

  const getIdToDelete = (id , Delete)=> {
    
    console.log(Delete)

    Delete === true ? Products_IDs.set(parseFloat(id), parseFloat(id) ) : Products_IDs.delete(parseFloat(id))

      console.log(Products_IDs)
      console.log(Products_IDs.size)
  }

  const DeleteProducts = async ()=> {
    let IDsArray = [] ; 
    
    if(Products_IDs.size > 0){

      for (const [key, value] of Products_IDs.entries()) {
        IDsArray.push(value) ; 
      }
      const res = await fetch(`https://juniortest-ammar-hamed.herokuapp.com/Delete`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({IDsArray}),
    })

    window.location.reload();
    }
    else console.log("size is == 0 && nothing to delete ")
  }

  return (

    <div>

        <Container >
        <Typography 
            variant = "h6"
            cplor = "textSecondary"
            component = "h2"
            gutterBottom
            
            >
                <div className="header"> <h2>Product List</h2>
                <div className="btn">

                  <Stack direction="row" spacing={2}>
                        <Button1 variant="outlined"  text = "Add" link = "https://juniortest-amar-hamed.herokuapp.com/addproduct"></Button1>
                        <Button1 variant="outlined" disabled text = "Mass Delete " onClick={DeleteProducts} >
                          
                        </Button1>
                  
                </Stack>
              
                </div>
                </div>
                <hr className="line"  ></hr>


            </Typography>
            <Grid container spacing={3}> 
            {Products.map((product) => (
                  <SingleProduct key = {product.id} SingleProduct = {product} id = {getIdToDelete} />
                ))
                }
               
            </Grid>
        </Container>

    </div>
  )
}

export default ProductsList