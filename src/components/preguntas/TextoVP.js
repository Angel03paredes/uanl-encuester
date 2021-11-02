import React from "react";
import './../../Pregunta.css'
import {TextField,Typography,Button} from '@mui/material'
import {Add} from '@mui/icons-material'



const TextoVP = ({cont,text})=>{

  

    return(
        <div className="preg-style">
            <div style={{display:"flex",justifyContent:"stretch"}}>
               <Typography style={{marginRight:"5px"}} variant="h5" color="GrayText" >{cont}.-</Typography>
               <Typography style={{marginRight:"5px"}} variant="h5" color="GrayText" >{text}</Typography>
           
            </div>
            <TextField style={{width:"100%"}}
          label="Respuesta"
          id="outlined-size-small"
          size="small"
         />
        </div>
    )
}

export default TextoVP;