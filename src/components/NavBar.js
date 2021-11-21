import React from "react";
import { AppBar } from "@mui/material";
import { Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import { Toolbar } from "@mui/material";
import{} from '@mui/icons-material/'
import Menu from '@mui/icons-material/Menu'
import { Button } from "@mui/material";
import {Link as RouterLink} from 'react-router-dom'
import { Link } from "@mui/material";
import { Container } from "@mui/material";
import { useHistory } from 'react-router';

const NavBar = ({colorBack,elevation,isAuth})=>{
    var history = useHistory();
    const signOut = ()=>{
        localStorage.clear()
        history.push("/")
    }

    return (
        <div>
            <AppBar color={colorBack}  position="static" elevation={elevation} >
                <Container>
                <Toolbar  >
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                </IconButton>
                <Typography variant="h6" color="inherit" sx={{ flexGrow: 1 }} component="div">
                    <Link color="inherit" className="font-logo" style={{textDecoration:"none"}} component={RouterLink} to="/">Encuester</Link>
                </Typography>
               
                {isAuth ? (<Link component={RouterLink} style={{textDecoration:"none"}}  color="inherit" to="/">
               <Button onClick={signOut} variant="text" style={{marginRight:"5px"}}  color="inherit"> 
               Cerrar Sesión
               </Button>
               </Link>):(
                   <div>
                         <Link component={RouterLink} style={{textDecoration:"none"}}  color="inherit" to="/signin">
                    <Button variant="text" style={{marginRight:"5px"}}  color="inherit"> 
                    Ingresa
                    </Button>
                    </Link>
                   
                    <Link  style={{textDecoration:"none"}} component={RouterLink} variant="outline" color="inherit" to="/signup">
                     <Button variant="contained" style={{marginRight:"5px"}} color="secondary">
                         Registrate
                     </Button>
                     </Link>

                       </div>
     
               )
                }
               
                
                
            </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}

export default NavBar;