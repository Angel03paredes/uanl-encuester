import React from "react";
import NavBar from "./NavBar";
import Background from './../images/imageEncuester.jpg'
import FormSvg from './../images/form.svg'
import Isommetric from './../images/isometric.svg'
import Captura from './../images/captura2.png'
import {Button, Container,Grid} from "@mui/material"
import {useInView} from './../animated/useInView'
import 'animate.css'
import {ArrowForwardIos,Edit,Reorder,FlashOn,Share,MoneyOff,Equalizer} from '@mui/icons-material';
import { Typography,Link } from "@mui/material";
import CardLanding from "./CardLanding";
import {Link as RouterLink} from 'react-router-dom'

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://encuester.com/">
          Encuester
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const Landing = ()=>{
    
const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
});

const [refCap, inViewCap] = useInView({
    triggerOnce: true,
    threshold: 0.4,
});

const [refCuest, inViewCuest] = useInView({
    triggerOnce: true,
    threshold: 0.4,
});

    return (
       <>
        <div className="landing-back"  >
            <NavBar colorBack="transparent" elevation="0"></NavBar>
            <div className="landing-row">
                 <div className="landing-col">
                    <Typography width="60%" variant="h2" >La mejor forma de crear encuestas</Typography>
                    <Typography width="60%" variant="h4" >Crea, comparte y observa los resutados.</Typography>
                   <div style={{width:"60%",marginTop:"1rem"}} >
                   <Link  style={{textDecoration:"none"}} component={RouterLink} variant="outline" color="inherit" to="/cms"><Button variant="contained" endIcon={<ArrowForwardIos/>} size="large" color="success">Empezar</Button></Link>
                   </div>
                 </div>
                 <div className="landing-col">
                 <img   src={Isommetric} ic alt="" />
                 </div>
            </div>
             
            <div id="wave"></div>
        </div>
        <div className="section2">
        <Container style={{height:"100%"}} >
                <Grid container  >
                    <Grid xs="6" container
                        direction="column"
                        justifyContent="center"
                        alignItems="center" style={{height:"100vh"}} >
                           <img ref={ref} style={{ opacity: inView ? 1 : 0 ,width:"100%"}} className={`animate__animated  ${inView?"bounceInUp":""}`} src={FormSvg} alt="" />
                           
                    </Grid>
                    <Grid xs="6"  container
                        direction="column"
                        justifyContent="center"
                        alignItems="center" style={{height:"100vh",padding:"3rem"}} >
                             <Typography width="100%" variant="h3" marginBottom="1rem" color="GrayText" >
                                Obtén resultados rápidos
                            </Typography>
                        <Typography variant="h5" color="GrayText" >
                                Planifica tu próxima campaña, gestiona inscripciones en eventos, recopila direcciones de correo eletrónico para un boletín, crea un concurso de preguntas, en la proxima exposición comparte tus datos más recientes ante el público y mucho más.
                            </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
        <div className="section3">
        <Container style={{height:"100%"}} >
                <Grid container  >
                <Grid xs="6"  container
                        direction="column"
                        justifyContent="center"
                        alignItems="center" style={{height:"100vh" ,padding:"3rem"}} >
                           
                           <Typography  width="100%" variant="h3" marginBottom="1rem" color="GrayText" >
                            Pregunta lo que sea
                            </Typography>
                        <Typography variant="h5" color="GrayText" >
                                Elige entre varias opciones de preguntas, puedes dar opciones multiples, abiertas, selección de casillas, preguntas numéricas etc.
            
                         </Typography>
                    </Grid>
                    <Grid xs="6" container
                        direction="column"
                        justifyContent="center"
                        alignItems="center" style={{height:"100vh"}} >
                           <div className="captura">
                           <img ref={refCap} style={{ opacity: inViewCap ? 1 : 0 ,width:"100%"}} className={`animate__animated  ${inViewCap?"bounceInUp":""}`} src={Captura} alt="" />
                           </div>
                           
                    </Grid>
                </Grid>
            </Container>
       
        </div>
        <div className="section4">
             
        <Typography variant="h3" textAlign="center" marginTop="1rem" color="GrayText" >
                                Contamos con varias ventajas
                            </Typography>
        <div ref={refCuest} style={{ opacity: inViewCuest ? 1 : 0 ,width:"100%",height:"100%"}} className={`animate__animated  ${inViewCuest?"bounceInUp":""}`} >
        <Container style={{height:"100%"}} >
                <Grid container style={{height:"100%"}} direction="column"
                        justifyContent="center"
                        alignItems="center" >
                <Grid xs="12"  container  >
                      <Grid xs="4" >
                        <CardLanding icon={<Edit/>} title="Editable" text="Crea tu diseño." color="#6492B4"></CardLanding>
                      </Grid>
                      <Grid xs="4" >
                      <CardLanding icon={<Reorder/>} title="Variedad" text="Escoje tus preguntas" color="#7FB464"></CardLanding>
                      </Grid>
                      <Grid xs="4" >
                      <CardLanding icon={<FlashOn/>} title="Rápido" text="Obtén resultados rápidos" color="#B47364"></CardLanding>
                      </Grid>
                       <Grid xs="4" >
                       <CardLanding icon={<Share/>} title="Comparte" text="Envía el formulario a quien sea" color="#AF64B4"></CardLanding>
                      </Grid>
                      <Grid xs="4" >
                      <CardLanding icon={<MoneyOff/>} title="Sin costo" text="No se aplica ningún costo" color="#7664B4"></CardLanding>
                      </Grid>
                      <Grid xs="4" >
                      <CardLanding icon={<Equalizer/>} title="Retroalimentación" text="Ve los resultados en gráficas" color="#B4A264"></CardLanding>
                      </Grid>
                    </Grid>
                    
                </Grid>
            </Container>
        </div>
         </div>
         <Copyright sx={{ mt: 8, mb: 4 }} />
       </>

    )
}

export default Landing;