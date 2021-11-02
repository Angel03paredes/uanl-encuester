import React,{useContext} from "react";
import PreguntasContext from "./context/PreguntasContext";
import { List,ListItemButton,ListItem,ListItemText,ListItemIcon } from "@mui/material";
import { StarTwoTone, RemoveRedEye } from "@mui/icons-material";
import Chart from './chart'

const Encuesta = ({text})=>{
   return (
    <ListItem disablePadding >
    <ListItemButton>

      <ListItemText inset primary={text} />
      <ListItemIcon>
            <RemoveRedEye />
          </ListItemIcon>
    </ListItemButton>
  </ListItem>
   )
}

const Respuestas = ()=>{
   
    return (
        <div>
             <List 
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    aria-label="contacts">
      <Encuesta text="Encuesta1"></Encuesta>
      
            </List>
            <Chart cont="1" text="Pregunta 1"></Chart>
        </div>
    )
}

export default Respuestas;