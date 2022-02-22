
/*
  in this file we show all products we have ,
  secondly , we check if the user wants to delete any existing product by checking the check box ,
              if he wants to delete a product , we have the appropriate id and send it to the the backend 
              via this endpoint 'https://juniortest-ammar-hamed.herokuapp.com/Delete'
*/




import SingleProduct from "./SingleProduct"
import Grid from '@material-ui/core/Grid'
import {  Container, Typography } from "@material-ui/core";
import Stack from '@mui/material/Stack';
import '../App.css';
import Button1 from './Button1'


const ProductsList = ({ Products }) => {


  let Products_IDs = new Map();


// here we get the IDs from SingleProduct.js file , we put all the IDs in a map so i can add it and simply delete it from the map
// if the user uncheck the product , then when MASS DELETE button is clicked , i put all the IDs in an array called IDsArray 
// and sent it to the backend ...


  const getIdToDelete = (id , Delete)=> {
    
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
    res.status === 200 ? window.location.reload() : console.log("error handling this Delete request")
    }

    else {
      
      Products.map((product) => (
        IDsArray.push(product.id)
        
      ))

      if(IDsArray.length > 0) { 
            const res = await fetch(`https://juniortest-ammar-hamed.herokuapp.com/Delete`, {
              method: 'DELETE',
              headers: {
                'Content-type': 'application/json',
              },
              body: JSON.stringify({IDsArray}),
            })
            res.status === 200 ? window.location.reload() : console.log("error handling this Delete request")
      }

    }

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
                        <Button1 variant="outlined"  text = "ADD" link = "https://juniortest-amar-hamed.herokuapp.com/addproduct"/>
                        <Button1 variant="outlined" disabled  text = "MASS DELETE" onClick={DeleteProducts} />
                  
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