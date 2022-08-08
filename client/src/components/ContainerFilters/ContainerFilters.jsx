import React from 'react'
import FilterCategory from '../FilterComponent/FilterCategory'
import FilterPersons from '../FilterComponent/FilterPersons'
import {cleanFilters} from '../../redux/actions/filtersActions'
import { useDispatch, useSelector } from 'react-redux';
import {filterBoxes} from '../../redux/actions/filtersActions'
import Button from '@mui/material/Button';
import styled from 'styled-components'
import Sort from "../Sort/Sort"


const ContainerFiltersContain = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 2rem;
  `

const ContainerFiltersAndButton = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 2rem;
`
const ContainerSort = styled.div`
  
`

const ContainerFilters = () => {
  
  const estateFitler = useSelector(state => state.filters)
  const dispatch = useDispatch();

  function aplicationFilters(){
    dispatch(filterBoxes(estateFitler))
  }

  function clean(){
    dispatch(cleanFilters())
  }

  return (
    <>
      <ContainerFiltersContain>
        <ContainerFiltersAndButton>
          <FilterCategory />
          <FilterPersons />
          <Button variant="contained" onClick={() => aplicationFilters()}>Aplicar Cambios</Button>
          {/* <Button variant="contained" onClick={() => clean()}>Limpiar filtros</Button> */}
        </ContainerFiltersAndButton>
        <ContainerSort>
          {/* <Sort /> */}
        </ContainerSort>
      </ContainerFiltersContain>
    </>
  )
}

export default ContainerFilters;