import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {filterCategory} from '../../redux/actions/filtersActions'

export default function BasicSelect() {
  const [category, setCategory] = React.useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterCategory(category))
  },[category])

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Box >
      <FormControl sx={{ width: 200 }}>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value={''}>No Aplicar</MenuItem>
          <MenuItem value={'Cursos y Talleres'}>Cursos y Talleres</MenuItem>
          <MenuItem value={'Gastronomia'}>Gastronomia</MenuItem>
          <MenuItem value={'Estadia'}>Estadia</MenuItem>
          <MenuItem value={'Aventura'}>Aventura</MenuItem>
          <MenuItem value={'Estar bien'}>Estar bien</MenuItem>
          <MenuItem value={'Mix'}>Mix</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
