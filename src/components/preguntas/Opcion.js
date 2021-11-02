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


const Opcion = ({cont})=>{

    const [opciones,setOpcion] = useState([])

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
            {
                opciones.map((item)=>(
                    item.opcion
                ))
            }

            <Button onClick={()=>setOpcion([...opciones,{opcion:<NewOpcion/>}])} startIcon={<Add></Add>}>Agregar Opcion</Button>
        </div>
    )
}

export default Opcion;