import React, { useState } from "react";
import './../../Pregunta.css'
import {TextField,Typography,Button,FormControlLabel,Radio} from '@mui/material'
import {Add} from '@mui/icons-material'

const NewOpcion = ()=>{
    return (
        <div>
            <Radio  /> <TextField style={{width:"80%"}}
          id="outlined-size-small"
          size="small"
         /><br></br>
        </div>
    )
}


const OpcionVP = ({cont,text})=>{

    const [opciones,setOpcion] = useState([])

    return(
        <div className="preg-style">
            <div style={{display:"flex",justifyContent:"stretch"}}>
               <Typography style={{marginRight:"5px"}} variant="h5" color="GrayText" >{cont}.-</Typography>
               <Typography style={{marginRight:"5px"}} variant="h5" color="GrayText" >{text}</Typography>
            
           
            </div>
            {
                opciones.map((item)=>(
                    item.opcion
                ))
            }

           
        </div>
    )
}

export default OpcionVP;