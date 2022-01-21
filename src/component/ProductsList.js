import SingleProduct from "./SingleProduct"
import Grid from '@material-ui/core/Grid'
import { Button , Container, Typography } from "@material-ui/core";
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
      const res = await fetch(`http://localhost:8000/Delete`, {
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
                <div className="header"> Product List
                <div className="btn">
                  <Button1 text = "Add" link = "http://localhost:3000/create"/>
                  <Button1 text = "Mass Delete " onClick={DeleteProducts}/>
                </div>
                </div>

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