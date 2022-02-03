

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

        <div id = "DVD">
        
            <Typography 
            variant = "h6"
            cplor = "textSecondary"
            component = "h2"
            gutterBottom
            
            >
            Please, provide size
            <Stack direction="row" spacing={5}>
                Size (MP)
                <Label id = "size" PassToParent = {havingDATA}  IndicatedType = {validateTypes}  label = "Size(MB)" />
                
          </Stack>
            </Typography>
            
        </div>
        
    )

}

export default ShowDVD ; 