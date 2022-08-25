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
  gap: 0.5rem;
`
const ContainerSort = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
`

const ContainerFilters = () => {
  
  const estateFitler = useSelector(state => state.filters)
  const dispatch = useDispatch();
  const [category, setCategory] = React.useState("");
  const [person, setPerson] = React.useState("");

  function clean(){
    setCategory("")
    setPerson("")
  }

  return (
    <>
      <ContainerFiltersContain>
        <ContainerFiltersAndButton>
          <FilterCategory setCategory={setCategory} category={category}/>
          <FilterPersons setPerson={setPerson} person={person}/>
         {/*  <Button variant="contained" onClick={() => aplicationFilters()}>Aplicar Cambios</Button> */}
          <Button variant="contained" onClick={() => clean()}>Clean Filters</Button> 
        </ContainerFiltersAndButton>
        <ContainerSort>
          <Sort />
        </ContainerSort>
      </ContainerFiltersContain>
    </>
  )
}

export default ContainerFilters;