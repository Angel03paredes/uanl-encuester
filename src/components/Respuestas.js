import React,{useContext} from "react";
import PreguntasContext from "./context/PreguntasContext";
import { List,ListItemButton,ListItem,ListItemText,ListItemIcon } from "@mui/material";
import { StarTwoTone, RemoveRedEye } from "@mui/icons-material";
import Chart from './chart'
import axios from "axios";
import { url } from '../serviceUrl';

const Encuesta = ({text,page})=>{
  console.log(page);
   return (
      <a href={page}>
        <ListItem disablePadding >
    <ListItemButton>

      <ListItemText inset primary={text} />
      <ListItemIcon>
            <RemoveRedEye  />
          </ListItemIcon>
    </ListItemButton>
  </ListItem>
      </a>
   )
}

const Respuestas = ()=>{

  const [encuestas,setEncuestas] = React.useState([])

  React.useEffect(() => {
    axios.get(url + "ConsultarEncuestas?ID="+localStorage.getItem("id"))
    .then((resp)=>{
      console.log(resp);
      setEncuestas(resp.data)
    }).catch((error)=>console.error(error))
  }, [])
   
    return (
        <div>
             <List 
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    aria-label="contacts">
      {
        encuestas.map((item)=>(
          <Encuesta text={item.encuesta} page={`${window.location.origin}/link?id=${item.link}`} ></Encuesta>
        ))
      }
      
            </List>
            <Chart cont="1" text="Pregunta 1"></Chart>
        </div>
    )
}

export default Respuestas;