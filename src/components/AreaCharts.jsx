import Grid from '@mui/material/Grid';
import React from 'react';
import { useSelector } from 'react-redux';

import AreaChart from './AreaChart';



// const data = [
//     {
//         sparklineData : [47, 45, 54, 38, 56, 24, 65, 31, 37, 39],
//         title: "Total Threat",
//         color: "#FBBB44"
//     },
//     {
//         sparklineData : [47, 45, 54],
//         title: "Block Request",
//         color: "#ED5D5D"
//     },
//     {
//         sparklineData : [ 38, 56, 24, 65, 31, 37, 39],
//         title: "Allow Request Threat",
//         color: "#07DA80"
//     }
// ]

function AreaCharts() {
    const data = useSelector((state)=> state.chart.area)
    
  return (
        data.map((data)=> {
           return <Grid xs={4} >
               <AreaChart data={data.sparklineData} color={data.color} title={data.title} />
            </Grid>
        })
  )
}

export default AreaCharts