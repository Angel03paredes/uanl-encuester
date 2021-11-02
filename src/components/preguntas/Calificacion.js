import React from "react";
import './../../Pregunta.css'
import {TextField,Typography,Rating} from '@mui/material'
import {Add} from '@mui/icons-material'



const Calificacion = ({cont})=>{

  

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
            <Rating name="no-value" value={null} />
        </div>
    )
}

export default Calificacion;