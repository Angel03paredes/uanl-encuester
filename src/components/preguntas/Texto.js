import React,{useContext} from "react";
import './../../Pregunta.css'
import {TextField,Typography,Button} from '@mui/material'
import {Add} from '@mui/icons-material'

import PreguntasContext from "../context/PreguntasContext";


const Texto = ({cont})=>{
    const {preguntas,addTexto} = useContext(PreguntasContext)
  
    const changeValue = (e)=>{
            preguntas[cont - 1].texto = e.target.value;
            addTexto(preguntas)
    }

    return(
        <div  className="preg-style">
            <div style={{display:"flex",justifyContent:"stretch"}}>
               <Typography style={{marginRight:"5px"}} variant="h5" color="GrayText" >{cont}.-</Typography>
            <TextField onChange={changeValue} style={{width:"100%"}}
            value={preguntas[cont -1].texto}
          label="Pregunta"
          id="outlined-size-small"
          size="small"
         />
           
            </div>
            
        </div>
    )
}

export default Texto;