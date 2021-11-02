import React,{useState} from "react";
import NavBar from "./NavBar";
import {Card, Container,Tab,Tabs } from "@mui/material";
import Preguntas from "./Preguntas";
import VistaPrevia from "./VistaPrevia";
import Respuestas from "./Respuestas";


const Cms =()=>{
    const [value, setValue] = useState(0);

   
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return(
        <div style={{height:"100vh"}}>
            <NavBar></NavBar>
            <div className="container">
                <Card className="cont-cms">
                <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="icon label tabs example">
                    <Tab style={{width:"33%"}}  label="PREGUNTAS" > </Tab>
                    <Tab style={{width:"33%"}} label="RESPUESTAS" ></Tab>
                    <Tab style={{width:"330%"}} label="Vista Previa" ></Tab>
                </Tabs>
                <Container>
                    {value == 0 ?(<Preguntas />) : value == 1 ? (<Respuestas/>):(<VistaPrevia/>) }
                </Container>
                </Card>
            </div>

        </div>
    )
}



export default Cms;