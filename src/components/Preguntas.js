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
import axios from 'axios';
import { url } from '../serviceUrl';
import Swal from 'sweetalert2'
import {v4 as uuidv4} from "uuid";



const actions = [
    { icon: <FormatColorText />, name: 'Texto' , type:"texto" },
    { icon: <StarHalf />, name: 'Calificación' ,type:"calificacion"},
    { icon: <RadioButtonChecked />, name: 'Opción',type:"opcion"}
  ];

const Preguntas = ()=>{
  const [cont,setCont] = useState(1)
  const {preguntas,addPregunta,addEncuesta,encuesta,nuevo} = useContext(PreguntasContext)

  const AddPregunta = (e)=>{
    console.log(preguntas.length);
    var i = (preguntas.length?preguntas.length:0) + 1
      switch (e) {
        case 'texto':
          addPregunta({pregunta:<Texto cont={i} key={i} /> , type:1,texto:""})
          break;
        case 'calificacion':
          addPregunta({pregunta:<Calificacion key={i} cont={i}/>, type:2,texto:""})
          break;
        case 'opcion':
          addPregunta({pregunta:<Opcion key={i} cont={i}/>, type:3,texto:""})
          break;
      
        default:
          break;
      }
  }
  
  //const [encuestaValue,setEncuesta] = useState(encuesta)

  const nameEncuesta = (e)=>{
    addEncuesta({...encuesta,name:e.target.value})
  }
  const descEncuesta = (e)=>{
    addEncuesta({...encuesta,description:e.target.value})
  }

  const btnCompartir = (e)=>{
    var encuestaValue = encuesta;
    if(encuestaValue.name == "" || encuestaValue.description =="" || preguntas.length == 0){
      Swal.fire({
        title: 'Campos vacios',
        text: 'Tu encuesta debe tener nombre, descripción, y alguna pregunta',
        icon: 'warning',
        confirmButtonText: 'Entendido'
      })
    }else{
        var linkSend = uuidv4();
        axios.post(url + "CrearEncuesta",{
          Encuesta:encuestaValue.name,
          Descripcion:encuestaValue.description,
          Link:linkSend,
          Estatus:true,
          UsuarioId:localStorage.getItem("id")})
          .then(function(resp){
            console.log(resp);
            for(var item of preguntas){
              
              axios.post(url+"AgregaPregunta",{
                Pregunta:item.texto,
                TipoId:item.type,
                EncuestaId: resp.data.idEncuesta
              }).then((resp)=>console.log(resp))
              .catch(error=>{console.log(error);})
            }
            nuevo()
            Swal.fire({
              title: 'Comparte',
              html: `<a href="${window.location.origin}/link?id=${linkSend}" target="balnk" > 
              ${window.location.origin}/link?id=${linkSend}
              </a>
              `,
              icon: 'success',
              confirmButtonText: 'Entendido'
            })
          }).catch(function (error) {
            Swal.fire({
              title: 'Error',
              text: 'OOPS! Vuelve a intentarlo',
              icon: 'error',
              confirmButtonText: 'Entendido'
            })
          })
      }
    
  
  } 

  const clearForm = (e)=>{
    nuevo()
  }
    
    return (
        <div >
            <div>
                <div className="nameForm">
                <TextField value={encuesta.name} onChange={nameEncuesta} fullWidth id="outlined-basic" style={{marginBottom:"10px"}} label="Nombre de formulario" variant="outlined" />
                <TextField value={encuesta.description} onChange={descEncuesta} fullWidth id="outlined-basicdesc" label="Descripción" variant="outlined" />
                </div>
                {preguntas.map((item)=>(
                  item.pregunta
                ))}
            </div>


            <Button onClick={btnCompartir} style={{marginTop:"10px",marginBottom:"10px"}} variant="contained" startIcon={<Share/>}  >Compartir</Button>
            <Button onClick={clearForm} style={{marginTop:"10px",marginBottom:"10px",marginLeft:"10px"}} variant="contained" startIcon={<Add/>}  >Nuevo</Button>
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