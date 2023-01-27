import { Card } from '@mui/material'
import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { useSelector } from 'react-redux'


function PieChart() {
  const data = useSelector((state)=> state.chart.pieChart)
  const colorPalette = ['#00D8B6','#008FFB',  '#FEB019', '#FF4560', '#775DD0']
  
  const optionDonut = {
      chart: {
          type: 'donut',
          width: '100%',
          height: 400,
          width: 300
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          customScale: 0.9,
          donut: {
            size: '50%',
          },
          offsetY: 20,
        },
        stroke: {
          colors: undefined
        }
      },
      colors: colorPalette,
      title: {
        text: 'Detected Threat Catagories',
        style: {
          fontSize: '18px'
        }
      },
      series: data.series,
      labels: data.labels,
      legend: {
        position: 'right',
        offsetY: 80
      }
    }
  return (
    <Card sx={{padding:"15px", marginTop: "30px"}}>
        <ReactApexChart options={optionDonut} type="donut" series={optionDonut.series} height={200}/>
    </Card>
  )
}

export default PieChart