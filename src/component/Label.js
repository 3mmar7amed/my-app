
import { makeStyles } from '@material-ui/core'
import {useState , useEffect} from 'react'
import TextField from '@material-ui/core/TextField'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';
import Box from '@mui/material/Box';


const Label = ({label , PassToParent  , IndicatedType , id})=> {
    
    const HandleInput = (value)=> {


        let val = parseFloat(value)

        if(isNaN(val)){
            setvalueError(true)
            settextError("incrorrect input , please input only numbers !")
            IndicatedType(false)
        }
            
        else {
            setvalueError(false)
            settextError("that's a correct input")
            IndicatedType(true)
        }
        PassToParent(val)

    }

   
  
    const [valueError,setvalueError] = useState(false)
    const [textError,settextError] = useState('')
  
  

    const useStyles = makeStyles({
        field: {
          marginTop: 10,
          marginBottom: 10,
          display: 'block',
         
        }
      })

    const classes = useStyles()
  return (
    <>
    <TextField className={classes.field}
    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
    onChange={(e) => HandleInput(e.target.value)}
    label= {label}
    variant="outlined"
    color="secondary"
    multiline
    rows={1}
    fullWidth
    required
    key= {0}
    error = {valueError}
    helperText={textError}
    id = {id}
    />

    </>
    )
}
export default Label  ; 