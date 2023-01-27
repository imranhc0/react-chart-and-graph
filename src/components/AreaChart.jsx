import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { useDispatch } from 'react-redux';
import { areaSelected } from '../redux/UpdateData';

Apex.grid = {
    padding: {
      right: 0,
      left: 0
    }
  }
  
  Apex.dataLabels = {
    enabled: false
  }
  

  
  // data for the sparklines that appear below header area

  //
  //62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46

  // the default colorPalette for this dashboard
  //var colorPalette = ['#01BFD6', '#5564BE', '#F7A600', '#EDCD24', '#F74F58'];
  //var colorPalette = ['#00D8B6','#008FFB',  '#FEB019', '#FF4560', '#775DD0']

//   title: {
//     text: `Total Threats ${total}`,
//     offsetX: 30,
//     style: {
//       fontSize: '24px',
//       cssClass: 'apexcharts-yaxis-title'
//     }
//   }

// subtitle: {
//     text: 'Theats Per Day',
//     offsetX: 30,
//     style: {
//       fontSize: '14px',
//       cssClass: 'apexcharts-yaxis-title'
//     }
//   }
  

function AreaChart({data, title, color}) {
  const dispatch = useDispatch()
  const handleDispatch = (title)=> {
    dispatch(areaSelected(title))
  }
    let total = 0
    data.map((num) => total+= num)
    const spark1 = {
        series: [{
            name: 'Threats',
            data: data
          }],
    
          option: {
            chart: {
                id: 'sparkline1',
                group: 'sparklines',
                type: 'area',
                height: 40,
                width: 80,
                sparkline: {
                  enabled: true
                },
              },
              stroke: {
                curve: 'smooth'
              },
              fill: {
                opacity: 1,
              },
              
              labels: [...Array(data.length).keys()].map(n => `2022-01-0${n+1}`),
              yaxis: {
                min: 0
              },
              xaxis: {
                type: 'datetime',
              },
              colors: [`${color}`],
              
              
          }
        
      }
    
    
  return (
    <Card sx={{padding:"15px", height:"150px", width: "250px"}} onClick={()=> handleDispatch(title)} >
        <h3>{title}</h3>
        <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-around"}}>
            <div>
                <h3>{total}</h3>
                <Typography sx={{textDecoration:"underline"}}>{"See all>"}</Typography>
            </div>
            <ReactApexChart options={spark1.option} series={spark1.series} type="area" height={40} width={170}/>
        </Box>

    
    </Card>
  )
}

export default AreaChart