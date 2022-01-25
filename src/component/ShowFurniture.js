
import Label from "./Label";

import {useState} from 'react'


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
        <div id = "height"><Label IndicatedType = {validateHeightTypes} label = "Heihgt" PassToParent = {HandleHeihgt} /></div>
        <div id = "width"><Label IndicatedType = {validateWidthTypes} label = "Width" PassToParent = {HandleWidth} /></div>
        <div id = "length"><Label IndicatedType = {validateLengthTypes} label = "Lenght" PassToParent = {HandleLength} /></div>
        </>
    )

}

export default ShowFurniture ; 