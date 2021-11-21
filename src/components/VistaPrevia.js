import React,{useContext} from "react";
import { Typography } from "@mui/material";
import CalificacionVP from "./preguntas/CalificacionVP";
import TextoVP from "./preguntas/TextoVP";
import OpcionVP from "./preguntas/OpcionVP";
import PreguntasContext from "./context/PreguntasContext";



const renderSwitch =(item,contador)=> {
  
    switch(item.type) {
      case 1:
        return <TextoVP text={item.texto} cont={contador} ></TextoVP>;
      case 2:
          return <CalificacionVP text={item.texto} cont={contador} ></CalificacionVP>;
      case 3:
          return <OpcionVP text={item.texto} cont={contador} ></OpcionVP>;
      default:
        return '';
    }
  }

const VistaPrevia = ()=>{
    const {preguntas,addPregunta,addEncuesta,encuesta,nuevo} = useContext(PreguntasContext)
    return (
        <div>
             <Typography style={{marginBottom:"15px"}} variant="h3" color="GrayText" >{encuesta.name}</Typography>
            <Typography  style={{marginBottom:"15px"}} variant="h5" color="GrayText" >{encuesta.description}</Typography>
            {
           preguntas.map((item,i)=>(
           
              renderSwitch(item,i + 1)
            
           ))
         }
        </div>
    )
}

export default VistaPrevia;