import { Button, Container, Typography } from "@material-ui/core";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import '../App.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Options from './Options'
import Label from "./Label";
import ShowBook from "./ShowBook";
import Button1 from './Button1'
import WarnignMessage from './WarnignMessage'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications-component/dist/theme.css'
import ReactNotification from 'react-notifications-component'
import { store } from 'react-notifications-component';



const SetProduct = ()=>{



    const handlesubmit = (e)=> {
        e.preventDefault()
        setSKUError(false)
        setNameError(false)
        setPriceError(false)
        setTypeError(false)


        SKU === '' ? setSKUError(true) : setSKUError(false)
        Name === '' ? setNameError(true) : setNameError(false)
        Price === '' ? setPriceError(true) : setPriceError(false) 
        Type === "" ||dimension === "" ?  setTypeError(true) : setTypeError(false)

        SKU && Name && Price && Type && !PriceError && dimension ? PostProduct({SKU , Name , Price , Type , dimension}) 
        : WariningMessage()

    }


    const PostProduct = async (product)=> {
        console.log(product)
        const res = await fetch('http://localhost:8000/create', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify(product),
          })

          window.location.reload();
    }

    const InputData = (returnedData)=> {
        setdimension(returnedData)
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





      const WariningMessage = () => {
        store.addNotification({
            title: "Warning!",
            message: "please fill  the required data ",
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

        <form noValidate autoComplete="off" onSubmit= {handlesubmit}>
        
        <Typography 
            variant = "h6"
            cplor = "textSecondary"
            component = "h2"
            gutterBottom
            
            >
                <div className="header">Create new product
                <div className="btn">
                <Button1 text = "Save" />
                <Button1 text = " Cansel" link = "http://localhost:3000" />
                </div>
                </div>

            </Typography>


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
                <Label label = "Price" state = {PriceError}  PassToParent = {setPrice} />
                

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
                    { (Type && <Options  ReturnedData = {InputData} Value={Type} />) }
                </FormControl>
            </form>
            
        </Container>
        
    ) ; 
}



export default SetProduct ; 