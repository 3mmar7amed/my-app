

import Label from "./Label";

const ShowDVD = ({DVDdata})=> {


  const havingDATA = (EnteredData)=> {
        DVDdata(EnteredData + "MB")
    }

    return (
        <>
        <Label PassToParent = {havingDATA}  label = "Size(MB)" />

        </>
    )

}

export default ShowDVD ; 