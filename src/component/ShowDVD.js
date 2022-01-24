

import Label from "./Label";

const ShowDVD = ({DVDdata})=> {


  const havingDATA = (EnteredData)=> {
        DVDdata(EnteredData + "MB")
    }

    return (
        <div id = "size">
            <Label PassToParent = {havingDATA}  label = "Size(MB)" />
        </div>
        


    )

}

export default ShowDVD ; 