
import Label from "./Label";
import {useState} from 'react'
import Stack from '@mui/material/Stack';
import { Typography } from "@material-ui/core";

const ShowFurniture = ({FurnitureData , Type})=> {

    
    const [Height , setHeight] = useState('')
    const [Width , setWidth] = useState('')
    const [Lenght , setLenght] = useState('')

    const [TypeHeight , setTypeHeight] = useState(true)
    const [TypeWidth , setTypeWidth] = useState(true)
    const [TypeLenght , setTypeLenght] = useState(true)


    const HandleHeihgt = (EnteredData)=> {
        setHeight(EnteredData)
        let dimentions = Lenght + "x" + Width + "x" +EnteredData
        Lenght === '' || Width === '' ? console.log("data not completed yet !") : FurnitureData(dimentions)
        
    }


    const HandleWidth = (EnteredData)=> {
        setWidth(EnteredData)
        let dimentions = Lenght +"x" + EnteredData +"x" + Height
        Lenght === '' || Height === '' ? console.log("data not completed yet !") : FurnitureData(dimentions)
    }


    const HandleLength = (EnteredData)=> {
        setLenght(EnteredData)
        let dimentions = EnteredData +"x" + Width+ "x" +Height
        Width === '' || Height === '' ? console.log("data not completed yet !") : FurnitureData(dimentions)
    }

    const validateHeightTypes = (type)=> {
        type&&TypeWidth&&TypeLenght ? Type(true) : Type(false)
        setTypeHeight(type)
    }
    const validateWidthTypes = (type)=> {
        TypeHeight&&type&&TypeLenght ? Type(true) : Type(false)
        setTypeWidth(type)
    }
    const validateLengthTypes = (type)=> {
        TypeHeight&&TypeWidth&&type ? Type(true) : Type(false)
        setTypeLenght(type)
    }


    return (

        <>
            <Typography 
            variant = "h6"
            cplor = "textSecondary"
            component = "h2"
            gutterBottom
            
            >
            Please, provide dimensions
            <div id = "height">
                    <Stack  direction="row" spacing={5}>
                        Height (CM)
                        <Label IndicatedType = {validateHeightTypes} label = "Heihgt" PassToParent = {HandleHeihgt} />
                    </Stack>
            </div>



          
             
          <div id = "width">
            <Stack direction="row" spacing={5}>
                    Width (CM)
                    <Label IndicatedType = {validateWidthTypes} label = "Width" PassToParent = {HandleWidth} />
            </Stack>
        </div>
          

          
        <div id = "length">
          <Stack direction="row" spacing={5}>
              Length (CM)
              <Label IndicatedType = {validateLengthTypes} label = "Lenght" PassToParent = {HandleLength} />
            </Stack>
        </div>
          
            </Typography>
       
        </>
    )

}

export default ShowFurniture ; 