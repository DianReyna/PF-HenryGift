import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { filterCategory } from "../../redux/actions/queryActions";
import { getCategory } from "../../redux/actions/categoryActions";
export default function BasicSelect({ setCategory, category }) {
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterCategory(category));
  }, [category]);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const tema = {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  };

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);
  //styled={{background: 'blue'}}
  //sx={{ background: '#F1F1F1', borderRadius: 2}}

  return (
    <Box
    // sx={{ background: 'rgba(16, 15, 15, 0)', color: 'white !important', borderRadius: 2 }}
    >
      <FormControl sx={{ width: { xs: 80, sm: 100, md: 120 } }}>
        <InputLabel id="demo-simple-select-label" sx={{ color: "#E16428" }}>
          Category
        </InputLabel>

        <Select
          sx={{ color: "text.primary" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value={""}>No Aplicar</MenuItem>
          {categories?.map((category, index) => (
            <MenuItem key={index} value={category.name}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
