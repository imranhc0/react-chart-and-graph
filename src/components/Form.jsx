
import {
  Button,
  Card,
  TextField,
  Typography,
} from "@mui/material";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateArea } from "../redux/UpdateData";


export default function Form() {
  const  [data, setData] = React.useState()
  const selected = useSelector((state)=> state.chart.whatSelected)
  const dispatch = useDispatch()
  const handleChange = (e)=> {
    setData(e.target.value)
  }
  const handleClick = ()=>{
    dispatch(updateArea({
      title: selected,
      data: data
    }))
  }
  console.log(data)
  return (
    <Card className="App" sx={{marginLeft: "30px", padding: "30px"}}>
      

      <Typography variant="h5">{selected? selected: "Update Chart Data"}</Typography>
      <form>
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Enter Value"
          variant="outlined"
          onChange={handleChange}
        />
        <p>Enter Multiple Value Separated By Comma ','</p>
        <br />
       
        <br />
        <Button variant="contained" color="primary" onClick={handleClick}>
          save
        </Button>
      </form>
    </Card>
  );
}
