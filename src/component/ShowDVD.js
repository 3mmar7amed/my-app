

import Label from "./Label";

const ShowDVD = ({DVDdata , Type})=> {


  const havingDATA = (EnteredData)=> {
        DVDdata(EnteredData + "MB")
    }
    const validateTypes = (type)=> {
        Type(type)
    }

    return (
        <div id = "size">
            <Label PassToParent = {havingDATA}  IndicatedType = {validateTypes}  label = "Size(MB)" />
        </div>
    )

}

export default ShowDVD ; 