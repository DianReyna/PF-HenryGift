import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {filterPerson} from '../../redux/actions/queryActions'


export default function FilterPerson() {
  const [person, setPerson] = React.useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterPerson(person))
  },[person])

  const handleChange = (event) => {
    setPerson(event.target.value);
  };

  return (
    <Box sx={{background: '#100F0F', color: 'white !important', borderRadius: 2}}>
      <FormControl sx={{ width: 120 }}>
        <InputLabel id="demo-simple-select-label" sx={{ color: 'gold !important' }}>Persons</InputLabel>
        <Select sx={{ color: 'white !important' }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={person}
          label="persons"
          onChange={handleChange}
        >
          <MenuItem value={''}>No Aplicar</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
