import Label from "./Label";


const ShowBook = ({BookData})=> {
    
    
    const havingDATA = (EnteredData) => {
        BookData(EnteredData + "KG")
    }
    return (
        <>
        <Label   PassToParent = {havingDATA}  label = "Weight(KG)"/>
        </>
    )

}

export default ShowBook ; 