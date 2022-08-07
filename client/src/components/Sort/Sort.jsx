import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {sortBoxes} from '../../redux/actions/boxesActions'

export default function BasicSelect() {

  const dispatch = useDispatch()
  const [col, setCol] = React.useState('');
  const [dir, setDir] = React.useState("")

  const handleChangeCol = (event) => {
    setCol(event.target.value );
    
  };

  const handleChangeDir = (event) => {
    setDir(event.target.value );
    
  };

  useEffect(()=>{
    if(col && dir){
      dispatch(sortBoxes(col,dir))
    }
  },[col,dir])

  return (
    <Box sx={{ width: 220,mt:5,ml:"auto" }}>
      <FormControl sx={{ width: 120,mr:1 }} >
        <InputLabel id="demo-simple-select-label-col">Sort by</InputLabel>
        <Select
          labelId="demo-simple-select-label-col"
          id="demo-simple-select-col"
          value={col}
          label="Sort by"
          onChange={handleChangeCol}
        >
          <MenuItem value={"name"}>Name</MenuItem>
          <MenuItem value={"ranking"}>Ranking</MenuItem>
         
        </Select>
      </FormControl>

      <FormControl sx={{ width: 80 }}>
        <InputLabel id="demo-simple-select-label-dir">Order</InputLabel>
        <Select
          labelId="demo-simple-select-label-dir"
          id="demo-simple-select-dir"
          value={dir}
          label="Order"
          onChange={handleChangeDir}
        >
          <MenuItem value={"asc"}>ASC</MenuItem>
          <MenuItem value={"desc"}>DESC</MenuItem>
          
        </Select>
      </FormControl>
    </Box>
  );
}