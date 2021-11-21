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
import {LockOutlinedIcon,AccountCircle} from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from './NavBar';
import { url } from '../serviceUrl';
import axios from 'axios';
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

export default function SignUp() {
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
    var  email = data.get('email');
    var password = data.get('password');
    var firstName = data.get('firstName');
    var lastName = data.get("lastName");
    // eslint-disable-next-line no-console
   
    if(email && password && firstName && lastName){
        if(password.length >= 8){
            axios.post(url+"Registro",{
              Nombre: firstName + " " + lastName,
              Correo: email,
              Pass:password,
              Estatus:true
            })
            .then(function (response) {
              Swal.fire({
                icon: 'success',
                title: 'Registro Exitoso',
                showConfirmButton: false,
                timer: 2500
              }).then(history.push("/signin"))
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
            text: 'La contraseña debe ser mínimo de 8 caracteres',
            icon: 'warning',
            confirmButtonText: 'Entendido'
          })
        }
    }else{
      Swal.fire({
        title: 'Cuidado',
        text: 'Todos los campos son requeridos',
        icon: 'warning',
        confirmButtonText: 'Entendido'
      })
    }
    
  };

  return (
    <ThemeProvider theme={theme}>
        <NavBar color="primary" elevation="5" isAuth={auth.is} />
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
            Registro
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Nombre"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Apellidos"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Correo electrónico"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Quiero recibir avisos, promociones y actualizaciones por correo."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Crear Cuenta
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                 ¿Ya tienes una cuenta? Ingresa Aquí
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}