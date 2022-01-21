
import { makeStyles } from '@material-ui/core'
import {Component, useState , useEffect} from 'react'
import TextField from '@material-ui/core/TextField'
import { width } from '@mui/system'


const LabelForFur = ({PassToParent})=> {

    const [Hieght, setHieght] = useState(0)
    const [Width, setWidth] = useState(0)
    const [Lenght, setLenght] = useState(0)


    const [HieghtError, setHieghtError] = useState(false )
    const [WidthError, setWidthError] = useState(false)
    const [LenghtError, setLenghtError] = useState(false)

    const HandleInput = (value)=> {

        let val = parseFloat(value)
        console.log(val)


        if(isNaN(val)){
            setvalueError(true)
            settextError("incrorrect input , please input only numbers !")
        }
            
        else {
            setvalueError(false)
            settextError("that's a correct input")
            PassToParent(val)
        } 
    }

    
    const [valueError,setvalueError] = useState(false)
    const [textError,settextError] = useState('')



    
    const handleValues = () => {

        if(Hieght && Width && Lenght && !valueError) {
            const dimention = {
                Hieght : Hieght , 
                Width :Width  , 
                Lenght : Lenght
            }
            let dimentions = Hieght +"x"+Width +"x"+Lenght
            PassToParent(dimentions)
        }
    }

    const useStyles = makeStyles({
        field: {
          marginTop: 10,
          marginBottom: 10,
          display: 'block'
        }
      })

    const classes = useStyles()


  return ([
    <>
            <TextField className={classes.field}
            inputProps={{ inputMode: 'numeric'  , pattern: '[0-9]*'  }}
            onChange={(e) => {  setHieght(e.target.value) ; HandleInput (e.target.value)}}
            label= "Height"
            variant="outlined"
            color="secondary"
            multiline
            rows={4}
            fullWidth
            required
            error= {HieghtError}
            key= {0}
            helperText={textError}            />


            <TextField className={classes.field}
            inputProps={{ inputMode: 'numeric' , pattern: '[0-9]*'  }}
            onChange={(e) => {setWidth(e.target.value); HandleInput (e.target.value)}}
            label= "Width"
            variant="outlined"
            color="secondary"
            multiline
            rows={4}
            fullWidth
            required
            error= {WidthError}
            key= {1}
            helperText={textError}
                        />


            <TextField className={classes.field}
            inputProps={{ inputMode: 'numeric' , pattern: '[0-9]*' }}
            onChange={(e) => {setLenght(e.target.value) ;   HandleInput (e.target.value)}}
            label= "Lenght"
            variant="outlined"
            color="secondary"
            multiline
            rows={4}
            fullWidth
            required
            error = {LenghtError}
            key= {2}
            helperText={textError}           
                />
            {handleValues()}
    </>
    ])

}
export default LabelForFur  ; 