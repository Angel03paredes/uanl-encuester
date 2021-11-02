import React from "react";
import './../../Pregunta.css'
import {TextField,Typography,Rating} from '@mui/material'
import {Add} from '@mui/icons-material'



const CalificacionVP = ({cont,text})=>{

  

    return(
        <div className="preg-style">
            <div style={{display:"flex",justifyContent:"stretch"}}>
               <Typography style={{marginRight:"5px"}} variant="h5" color="GrayText" >{cont}.-</Typography>
               <Typography  style={{marginRight:"5px"}} variant="h5" color="GrayText" >{text}</Typography>
           
            </div>
            <Rating name="no-value" value={null} />
        </div>
    )
}

export default CalificacionVP;