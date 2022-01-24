
import Label from "./Label";

import {useState} from 'react'


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
        <div id = "height"><Label label = "Heihgt" PassToParent = {HandleHeihgt} /></div>
        <div id = "width"><Label label = "Width" PassToParent = {HandleWidth} /></div>
        <div id = "length"><Label label = "Lenght" PassToParent = {HandleLength} /></div>
        
        </>
    )

}

export default ShowFurniture ; 