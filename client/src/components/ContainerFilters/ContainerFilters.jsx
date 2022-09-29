import React from "react";
import FilterCategory from "../FilterComponent/FilterCategory";
import FilterPersons from "../FilterComponent/FilterPersons";
import { cleanFilters } from "../../redux/actions/filtersActions";
import { useDispatch, useSelector } from "react-redux";
import { filterBoxes } from "../../redux/actions/filtersActions";
import Button from "@mui/material/Button";
import styled from "styled-components";
import Sort from "../Sort/Sort";
import SearchBar from "../SearchBar/SearchBar";
import { queryName } from "../../redux/actions/queryActions";

const ContainerFiltersContain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  margin-left: 0.5rem;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const ContainerFiltersAndButton = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 0.5rem;
`;
const ContainerSort = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
`;

const ContainerFilters = () => {
  const estateFitler = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  const [category, setCategory] = React.useState("");
  const [person, setPerson] = React.useState("");

  function clean() {
    setCategory("");
    setPerson("");
    dispatch(queryName(""));
  }

  return (
    <>
      <ContainerFiltersContain>
        <ContainerFiltersAndButton>
          <ContainerSort>
            <Sort />
          </ContainerSort>
          <FilterCategory setCategory={setCategory} category={category} />
          <FilterPersons setPerson={setPerson} person={person} />
          {/*  <Button variant="contained" onClick={() => aplicationFilters()}>Aplicar Cambios</Button> */}
          <Button
            sx={{ color: "#E16428", p: 2 }}
            variant="outlined"
            onClick={() => clean()}
          >
            Show All
          </Button>
        </ContainerFiltersAndButton>
        <ContainerSort>
          <SearchBar />
        </ContainerSort>
      </ContainerFiltersContain>
    </>
  );
};

export default ContainerFilters;
