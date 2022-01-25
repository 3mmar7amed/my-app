import Label from "./Label";


const ShowBook = ({BookData , Type})=> {
    
    
    const havingDATA = (EnteredData) => {
        BookData(EnteredData + "KG")
    }
    const validateTypes = (type)=> {
        Type(type)
    }


    return (
        <div id = "weight">
        <Label   PassToParent = {havingDATA} IndicatedType = {validateTypes} label = "Weight(KG)"/>
        </div>
    )

}

export default ShowBook ; 