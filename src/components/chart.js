import React from "react";
import './../Pregunta.css'
import { Pie } from 'react-chartjs-2';
import { Typography } from "@mui/material";
const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

const Chart = ({cont,text})=>{
    return (
        <div className="preg-style">
            
              <div style={{display:"flex",justifyContent:"stretch"}}>
                <div style={{width:"100%",display:"flex",justifyContent:"stretch"}}>
                <Typography style={{marginRight:"5px" }} variant="h5" color="GrayText" >{cont}.-</Typography>
              <Typography style={{marginRight:"5px" }} variant="h5" color="GrayText" >{text}</Typography>
                </div>
                <div style={{width:"200px",height:"200px"}}>
                    <Pie  data={data} />
                </div>
            </div>
        </div>
    )
}

export default Chart;