import * as React from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Timer from '../Timer/Timer';

export default function TimerSelect() {
  const [time, setTime] = React.useState(15);

  const handleChange = (event) => {
    setTime(event.target.value);
    <Timer pickUpTime={event.target.value}/>
  };

  return (
    <>
        <Box>
        <FormControl sx={{ width: '90%', marginLeft: '5%' }}>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={time}
            displayEmpty
            onChange={handleChange}
            >
            <MenuItem value={15}>15 min</MenuItem>
            <MenuItem value={30}>30 min</MenuItem>
            <MenuItem value={45}>45 min</MenuItem>
            </Select>
        </FormControl>
        </Box>


        { sessionStorage.setItem("timer", time) }
        {/* <Link to="/PageTimer">
            <button className="cancelOrderBtn"> Checkout </button>
        </Link> */}
    </>
  );
}