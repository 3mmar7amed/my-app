
import Label from "./Label";
import LabelForFur from './LabelForFur'
import { makeStyles } from '@material-ui/core'
import {Component, useState , useEffect} from 'react'
import TextField from '@material-ui/core/TextField'
import { ToastProvider, useToasts } from 'react-toast-notifications';
import WarnignMessage from './WarnignMessage'

const ShowFurniture = ({FurnitureData})=> {

    
    const [Height , setHeight] = useState('')
    const [Width , setWidth] = useState('')
    const [Lenght , setLenght] = useState('')


    const HandleHeihgt = (EnteredData)=> {
        setHeight(EnteredData)
        let dimentions = Lenght + "x" + Width + "x" +EnteredData
        FurnitureData(dimentions)
    }


    const HandleWidth = (EnteredData)=> {
        setWidth(EnteredData)
        let dimentions = Lenght +"x" + EnteredData +"x" + Height
        FurnitureData(dimentions)
    }


    const HandleLength = (EnteredData)=> {
        setLenght(EnteredData)
        let dimentions = EnteredData +"x" + Width+ "x" +Height
        FurnitureData(dimentions)
    }

    
    return (

        <>
        <Label label = "Heihgt" PassToParent = {HandleHeihgt} />
        <Label label = "Width" PassToParent = {HandleWidth} />
        <Label label = "Lenght" PassToParent = {HandleLength} />
        </>
    )

}

export default ShowFurniture ; 