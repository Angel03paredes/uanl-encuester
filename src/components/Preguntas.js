import React,{useState,useContext} from "react";
import { Button } from "@mui/material";
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { Typography } from "@mui/material";
import { Share,FormatColorText,RadioButtonChecked,StarHalf,Add } from "@mui/icons-material";
import Texto from "./preguntas/Texto";
import Calificacion from "./preguntas/Calificacion";
import PreguntasContext from "./context/PreguntasContext";
import Opcion from "./preguntas/Opcion";
import { TextField } from "@mui/material";



const actions = [
    { icon: <FormatColorText />, name: 'Texto' , type:"texto" },
    { icon: <StarHalf />, name: 'Calificación' ,type:"calificacion"},
    { icon: <RadioButtonChecked />, name: 'Opción',type:"opcion"}
  ];

const Preguntas = ()=>{
  const [cont,setCont] = useState(1)
  const {preguntas,addPregunta} = useContext(PreguntasContext)

  const AddPregunta = (e)=>{
    setCont(cont + 1)
      switch (e) {
        case 'texto':
          addPregunta({pregunta:<Texto cont={cont}/>})
          break;
        case 'calificacion':
          addPregunta({pregunta:<Calificacion cont={cont}/>})
          break;
        case 'opcion':
          addPregunta({pregunta:<Opcion cont={cont}/>})
          break;
      
        default:
          break;
      }
  }
  
    return (
        <div >
            <div>
                <div className="nameForm">
                <TextField fullWidth id="outlined-basic" style={{marginBottom:"10px"}} label="Nombre de formulario" variant="outlined" />
                <TextField fullWidth id="outlined-basic" label="Descripcion" variant="outlined" />
                </div>
                {preguntas.map((item)=>(
                  item.pregunta
                ))}
            </div>


            <Button style={{marginTop:"10px",marginBottom:"10px"}} variant="contained" startIcon={<Share/>}  >Compartir</Button>
            <Button style={{marginTop:"10px",marginBottom:"10px",marginLeft:"10px"}} variant="contained" startIcon={<Add/>}  >Nuevo</Button>
            <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'fixed', bottom: 16, right: "15%" }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            onClick={()=> AddPregunta(action.type)}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
        </div>
    )
}

export default Preguntas;