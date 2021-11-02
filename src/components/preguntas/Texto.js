import React from "react";
import './../../Pregunta.css'
import {TextField,Typography,Button} from '@mui/material'
import {Add} from '@mui/icons-material'



const Texto = ({cont})=>{

  

    return(
        <div className="preg-style">
            <div style={{display:"flex",justifyContent:"stretch"}}>
               <Typography style={{marginRight:"5px"}} variant="h5" color="GrayText" >{cont}.-</Typography>
            <TextField style={{width:"100%"}}
          label="Pregunta"
          id="outlined-size-small"
          size="small"
         />
           
            </div>
            
        </div>
    )
}

export default Texto;