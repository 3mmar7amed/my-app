
import { makeStyles } from '@material-ui/core'
import {useState , useEffect} from 'react'
import TextField from '@material-ui/core/TextField'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';


const Label = ({label , PassToParent , state , ISNumber })=> {
    
    const HandleInput = (value)=> {


        let val = parseFloat(value)

        if(isNaN(val)){
            setvalueError(true)
            settextError("incrorrect input , please input only numbers !")
        }
            
        else {
            setvalueError(false)
            settextError("that's a correct input")
            PassToParent(val)
        }

        ISNumber(!valueError)

        
        
    }

   
  
    const [valueError,setvalueError] = useState(state)
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
    rows={4}
    fullWidth
    required
    key= {0}
    error = {valueError}
    helperText={textError}
    />

    </>
    )
}
export default Label  ; 