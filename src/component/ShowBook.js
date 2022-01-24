import Label from "./Label";


const ShowBook = ({BookData})=> {
    
    
    const havingDATA = (EnteredData) => {
        BookData(EnteredData + "KG")
    }
    return (
        <div id = "#weight">
        <Label   PassToParent = {havingDATA}  label = "Weight(KG)"/>
        </div>
    )

}

export default ShowBook ; 