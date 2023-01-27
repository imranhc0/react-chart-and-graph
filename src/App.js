
import { Box, Container, Grid } from '@mui/material';
import { useSelector } from 'react-redux';

import './App.css';
import AreaCharts from './components/AreaCharts';
import BarChart from './components/BarChart';
import Form from './components/Form';
import PieChart from './components/PieChart';
import BasicTable from './components/Table';
//#1FDE8C


function App() {
  const value = useSelector((state)=> state.chart.value)

  console.log(value)
  return (
    <Container maxWidth="xl">


      <Grid container spacing={5} sx={{marginTop:"50px"}}>
            <Grid xs={8} >
              <Grid container justifyContent="space-around" spacing={2} sx={{marginButtom:"30px"}} >
                
                <AreaCharts/>
                <Box sx={{marginTop:"30px" , width:"100%"}}>
                  <BarChart />
                </Box>
               
             
              </Grid>
              
                
                
               <Grid container spacing={1}>
                 <Grid xs={6}>
                   <PieChart />
                 </Grid>
                 <Grid xs={6}>
                    <BasicTable />
                 </Grid>
               </Grid>
            </Grid>
            
            <Grid xs={4}>
              <Form />
            </Grid>
            
      </Grid>
  
    </Container>
  );
}

export default App;
