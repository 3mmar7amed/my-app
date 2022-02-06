
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

        <div id = "Furniture">
            <Typography 
            variant = "h6"
            cplor = "textSecondary"
            component = "h2"
            gutterBottom
            
            >
            Please, provide dimensions
            <Stack  direction="row" spacing={5}>
                        Height (CM)
                <Label id = "height" IndicatedType = {validateHeightTypes} label = "Heihgt" PassToParent = {HandleHeihgt} />
            </Stack>

            <Stack direction="row" spacing={5}>
                    Width (CM)
                    <Label id = "width" IndicatedType = {validateWidthTypes} label = "Width" PassToParent = {HandleWidth} />
            </Stack>
          

          
        <Stack direction="row" spacing={5}>
              Length (CM)
              <Label id = "length" IndicatedType = {validateLengthTypes} label = "Lenght" PassToParent = {HandleLength} />
        </Stack>
          
            </Typography>
       
        </div>
    )

}

export default ShowFurniture ; 