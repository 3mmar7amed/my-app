import { Container, Typography } from "@material-ui/core";
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import '../App.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Options from './Options'
import Label from "./Label";
import Button1 from './Button1'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';
import Stack from '@mui/material/Stack';



const SetProduct = ()=>{



    const handlesubmit = (e)=> {
        e.preventDefault()
        setSKUError(false)
        setNameError(false)
        setPriceError(false)
        setTypeError(false)

        CheckError(SKU) ? setSKUError(true) : setSKUError(false)
        CheckError(Name) ? setNameError(true) : setNameError(false)
        Price === '' ? setPriceError(true) : setPriceError(false) 
        Type === "" ||dimension === "" ?  setTypeError(true) : setTypeError(false)
        console.log("indicatedPriceType",indicatedPriceType , "indicatedOptionType" , indicatedOptionType) ;

        if(SKU === '' || Name === '' ||Price === '' || Type === '' ||dimension === ''  ) {
          WariningMessage("Please, submit required data")
        }
        else if(CheckError(SKU) || CheckError(Name) || !indicatedPriceType || !indicatedOptionType) {
          WariningMessage("Please, provide the data of indicated type")
        }
        else PostProduct({SKU , Name , Price , Type , dimension}) 

    }


    const PostProduct = async (product)=> {
        console.log(product)
        const res = await fetch('https://juniortest-ammar-hamed.herokuapp.com/create', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify(product),
          })
          res.status === 200 ? window.location.reload() : console.log("error handling this post request")

        }

    const InputData = (returnedData)=> {
        setdimension(returnedData)
    }

    const CheckError= (state)=> {
      return !/^[a-zA-Z0-9]+$/.test(state) ; 
    }

    const useStyles = makeStyles({
        field: {
          marginTop: 20,
          marginBottom: 20,
          display: 'block'
        }
      })


    const classes = useStyles()

    const [SKU, setSKU] = useState('')
    const [Name , setName] = useState('')
    const [Type, setType] = useState('')
    const [Price , setPrice] = useState('')
    const [dimension, setdimension] = useState('')


    const [SKUError, setSKUError] = useState(false)
    const [NameError, setNameError] = useState(false)
    const [PriceError, setPriceError] = useState(false)
    const [typeError, setTypeError] = useState(false)

    const [indicatedOptionType, setindicatedOptionType] = useState(false)
    const [indicatedPriceType, setindicatedPriceType] = useState(false)


      const WariningMessage = (text) => {

        let txt = String(text)
        store.addNotification({
            title: "Warning!",
            message: txt,
            type: "warning",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true,
              showIcon:true ,
            }
          });
      }





    return (
        <Container>
         <div id = "product_form">
            <form noValidate autoComplete="off" onSubmit= {handlesubmit}>
        
        <Typography 
            variant = "h6"
            cplor = "textSecondary"
            component = "h2"
            gutterBottom
            
            >
                <div className="header"> <h2>Product Add</h2> 
                <div className="btn">
          <Stack direction="row" spacing={2}>
                <Button1 text = "Save" />
                <Button1 text = "Cancel" link = "https://juniortest-amar-hamed.herokuapp.com/" />
          </Stack>
                
                </div>
                </div>
                <hr className="line"  ></hr>

            </Typography>

                <div id = "sku">
                    
                        <TextField className={classes.field}
                        onChange={(e) => setSKU(e.target.value)}
                        label="SKU" 
                        variant="outlined" 
                        color="secondary" 
                        fullWidth
                        required
                        error={SKUError}
                        value={SKU}
                        />
                </div>
               

                <div id = "name">
                        <TextField className={classes.field}
                        onChange={(e) => setName(e.target.value)}
                        label="Name"
                        variant="outlined"
                        color="secondary"
                        multiline
                        rows={4}
                        fullWidth
                        required
                        error={NameError}
                        value={Name}
                        />
                </div>
                

                <div id = "price">
                        <Label label = "Price"  PassToParent = {setPrice} IndicatedType = {setindicatedPriceType} />
                </div>
                
                
                <div id = "productType">
                        <FormControl sx={{ m: 1, minWidth: 80 }} required   className={classes.field}>
                            <InputLabel id="demo-simple-select-autowidth-label">Type</InputLabel>
                            <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={Type}
                            onChange={(e) => setType(e.target.value)}
                            autoWidth
                            label="Type"
                            error={typeError}
                            >   
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"DVD"}>DVD </MenuItem>
                            <MenuItem value={"Book"}>Book</MenuItem>
                            <MenuItem value={"Furniture"}>Furniture </MenuItem>
                            </Select>
                        
                            { (Type && <Options  ReturnedData = {InputData} Value={Type} indicatedType = {setindicatedOptionType} />) }
                            
                        </FormControl>
                </div>

            </form>

            </div>
        
            
        </Container>
        
    ) ; 
}



export default SetProduct ; 