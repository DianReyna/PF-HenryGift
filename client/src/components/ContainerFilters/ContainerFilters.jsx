import React from 'react'
import FilterCategory from '../FilterComponent/FilterCategory'
import FilterPersons from '../FilterComponent/FilterPersons'
import { useDispatch, useSelector } from 'react-redux';
import {filterBoxes} from '../../redux/actions/filtersActions'
import Button from '@mui/material/Button';

const ContainerFilters = () => {
  
  const estateFitler = useSelector(state => state.filters)
  const dispatch = useDispatch();

  function aplicationFilters(){
    console.log(estateFitler)
    dispatch(filterBoxes(estateFitler))
  }

  return (
    <div>
      <FilterCategory />
      <br />
      <FilterPersons />
      <br />
      <Button variant="contained" onClick={() => aplicationFilters()}>Aplicar Cambios</Button>
    </div>
  )
}

export default ContainerFilters;