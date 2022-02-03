import Label from "./Label";
import { Typography } from "@material-ui/core";
import Stack from '@mui/material/Stack';


const ShowBook = ({BookData , Type})=> {
    
    
    const havingDATA = (EnteredData) => {
        BookData(EnteredData + "KG")
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
            Please, provide weight

            <Stack direction="row" spacing={5}>
            Weight (KG)
                <Label id = "weight"  PassToParent = {havingDATA} IndicatedType = {validateTypes} label = "Weight(KG)"/>
          </Stack>
            </Typography>
            
        

    )

}

export default ShowBook ; 