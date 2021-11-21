import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from './NavBar';
import axios from 'axios';
import { url } from '../serviceUrl';
import Swal from 'sweetalert2'
import { useHistory } from 'react-router';


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

const theme = createTheme();

export default function SignIn() {

  var history = useHistory();

  const [auth,setAuth] = React.useState({is:false})

  

  React.useEffect(() => {
    var id = localStorage.getItem("id");

    if(id){
      history.push("/cms")
    }
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    var Pass = data.get("password");
    var Correo = data.get("email");
    if(Pass && Correo){
      axios.get(`${url}InicioSesion?Pass=${Pass}&Correo=${Correo}`)
      .then(function (response) {
        console.log(response);
       if(response.data.idUsuario){
         var user = response.data;
         localStorage.setItem("id",user.idUsuario)
         localStorage.setItem("email",user.correo)
         localStorage.setItem("name",user.nombre)
        Swal.fire({
          icon: 'success',
          title: 'Ingresaste Correctamente',
          showConfirmButton: false,
          timer: 2500
        }).then(history.push("/cms"))
       }else{
        Swal.fire({
          title: 'Error',
          text: 'El usuario y la contraseña no coinciden',
          icon: 'error',
          confirmButtonText: 'Entendido'
        })
       }
      })
      .catch(function (error) {
        console.log(error);
        Swal.fire({
          title: 'Error',
          text: 'OOPS! Vuelve a intentarlo',
          icon: 'error',
          confirmButtonText: 'Entendido'
        })
      
      })
  }else{
    Swal.fire({
      title: 'Cuidado',
      text: 'LLena todos los campos',
      icon: 'warning',
      confirmButtonText: 'Entendido'
    })
  }
    
  };

  return (
    <ThemeProvider theme={theme}>
        <NavBar colorBack="primary" isAuth={auth.is} elevation="5"/>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <AccountCircle />
          </Avatar>
          <Typography component="h1" variant="h5">
            Iniciar Sesión
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo Electrónico"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField 
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recordarme"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Ingresar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  ¿Olvidaste tu contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"¿Aún no tienes cuenta? Registrate"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}