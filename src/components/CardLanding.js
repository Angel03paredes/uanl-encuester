import React from "react";
import { Typography } from "@mui/material";


const CardLanding = ({title,text,icon,color})=>{
    return(
        <>
            <div className="cardland-cont" style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <div style={{color:"#FFFFFF",backgroundColor:color,borderRadius:"50%",padding:"20px"}}>

                    {icon}
                   
                </div>
                <Typography variant="h5" color="GrayText">
                        {title}
                    </Typography>
                    <Typography variant="h6" color="GrayText" >
                        {text}
                    </Typography>
            </div>
        </>
    )
}

export default CardLanding;