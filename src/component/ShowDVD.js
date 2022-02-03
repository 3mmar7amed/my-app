

import Label from "./Label";
import { Typography } from "@material-ui/core";
import Stack from '@mui/material/Stack';

const ShowDVD = ({DVDdata , Type})=> {


  const havingDATA = (EnteredData)=> {
        DVDdata(EnteredData + "MB")
    }
    const validateTypes = (type)=> {
        Type(type)
    }

    return (
        
            <Typography 
            variant = "h6"
            cplor = "textSecondary"
            component = "h2"
            gutterBottom
            
            >
            Please, provide size
            <Stack direction="row" spacing={5}>
                Size (MP)
                <div id = "size" > <Label PassToParent = {havingDATA}  IndicatedType = {validateTypes}  label = "Size(MB)" /> </div>
                
          </Stack>
            </Typography>
        
    )

}

export default ShowDVD ; 