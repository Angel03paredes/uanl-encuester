import React from "react";
import { Typography } from "@mui/material";
import CalificacionVP from "./preguntas/CalificacionVP";
import TextoVP from "./preguntas/TextoVP";
import OpcionVP from "./preguntas/OpcionVP";

const VistaPrevia = ()=>{
    return (
        <div>
             <Typography style={{marginBottom:"15px"}} variant="h3" color="GrayText" >Nombre de formulario</Typography>
            <Typography  style={{marginBottom:"15px"}} variant="h5" color="GrayText" >Descripcion de formulario</Typography>
            <CalificacionVP cont="1" text="Pregunta de calificacion"></CalificacionVP>
            <TextoVP cont="2" text="Pregunta dos"></TextoVP>
            <OpcionVP cont="3" text="Pregunta 3"></OpcionVP>
        </div>
    )
}

export default VistaPrevia;