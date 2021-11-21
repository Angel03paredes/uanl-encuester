import React,{useState,useEffect} from "react";
import { Typography,Button,Link } from "@mui/material";
import CalificacionVP from "./preguntas/CalificacionVP";
import TextoVP from "./preguntas/TextoVP";
import OpcionVP from "./preguntas/OpcionVP";
import axios from 'axios';
import { url } from '../serviceUrl';
import { useHistory } from 'react-router';
import { Send ,Check} from "@mui/icons-material";
import Swal from 'sweetalert2'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    useLocation
  } from "react-router-dom";

  function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
  

const LinkEncuesta = ()=>{
    
  let query = useQuery();
  var history = useHistory();
    
  let id = query.get("id")
  console.log(id);

  const [state,setState] = useState({nombre:"",desc:""})
  const [statePreguntas,setStatePreguntas] = useState([])
  const [count,setContador] = useState(1);
  const [show,setShow] = useState(true)

  useEffect(() => {
    axios.get(url+"GetOneEncuesta?id="+id)
    .then(function(resp){
      console.log(resp);
       if(resp.data.idEncuesta){
       setState({nombre:resp.data.encuesta,desc:resp.data.descripcion})
        axios.get(url+"PreguntasEncuesta?ID="+resp.data.idEncuesta)
        .then((data)=>{
          console.log(data) ;
          setStatePreguntas(data.data)
        }).catch((error)=>{console.error(error)})
       }else{
         setShow(false)
       }
    })
    .catch(function(error){
      setShow(false)
    })
    
  }, [])

  const [isSend,setSend] = useState(true) 
  const btnEnviar =()=>{
    if(isSend){
      Swal.fire({
        title: 'Listo',
        html: "Respuesta Enviada",
        icon: 'success',
        confirmButtonText: 'Entendido'
      })
      setSend(false)
    }
  }
  
const goHome = ()=>{
  history.push("")
}
    

    return (
      <div>
      {
        show? 
        ( <div className="container" style={{minHeight:"100vh"}}>
        <Typography style={{marginBottom:"15px"}} variant="h3" color="GrayText" >{state.nombre}</Typography>
       <Typography  style={{marginBottom:"15px"}} variant="h5" color="GrayText" >{state.desc} </Typography>
       
       {
         statePreguntas.map((item,i)=>(
         
            renderSwitch(item,i + 1)
          
         ))
       }
        <Button onClick={btnEnviar} style={{marginTop:"10px",marginBottom:"10px"}} variant="contained" startIcon={isSend?<Send/>:<Check></Check>}  >
          
          {
            isSend?("Enviar"):("Enviado")
          }
          
          </Button>
          <br/>
      <Link color="inherit" onClick={goHome}>
          Encuester
        </Link>
   </div>):
      (
          
            <div>


                <h1>Pagina no encontrada</h1>
                <br/>
      <Link color="inherit" onClick={goHome}>
          Encuester
        </Link>
            </div>
       )
      }

    
    </div>
    )
}

const renderSwitch =(item,contador)=> {
  
  switch(item.tipoId) {
    case 1:
      return <TextoVP text={item.pregunta} cont={contador} ></TextoVP>;
    case 2:
        return <CalificacionVP text={item.pregunta} cont={contador} ></CalificacionVP>;
    case 3:
        return <OpcionVP text={item.pregunta} cont={contador} ></OpcionVP>;
    default:
      return '';
  }
}



export default LinkEncuesta;

