import Card from '@mui/material/Card';
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';





export default function BarChart() {
  const data = useSelector((state)=> state.chart.dnsActivity)
  const options = {
      series: [{
      name: 'Blocked Threat',
      data: data.block
    },
    {
      name: 'Allowed Threat',
      data: data.allow
    }],
      chart: {
      type: 'bar',
      height: 200,
     
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    
    stroke: {
      curve: 'smooth',
      show: false,
      width: 2,
      colors: ['#5564BE']
    },
    xaxis: {
      categories: [...Array(30).keys()].map(n => `${n+1}`),
    },
    yaxis: {
      title: {
        text: 'Requests'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return name + val 
        }
      }
    }
    };
  return (
    <Card sx={{padding:"15px"}}>
        <h3>30 Days DNS Activity Trends</h3>
        <ReactApexChart options={options} type="bar" series={options.series} height={250}/>
    </Card>
  )
}
