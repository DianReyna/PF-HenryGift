import React from 'react'
import { useDispatch } from 'react-redux'
import { getUserGift } from '../../redux/actions/userActions'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, FormControl, InputLabel, Select,  } from '@mui/material'


export default function FilterGiftSelect() {
    
const [productGift, setproductGift] = React.useState("");

const dispatch = useDispatch();

const {productId} = useParams()

useEffect(() => {
    dispatch(getUserGift(productId))
  }, [productId])


const handleChange = (event) => {
    setproductGift(event.target.value);
  };


return (


    <Box
    // sx={{ background: 'rgba(16, 15, 15, 0)', color: 'white !important', borderRadius: 2 }}
    >
      <FormControl sx={{ width: 120 }}>
        <InputLabel
          id="demo-simple-select-label"
          sx={{ color: "#E16428" }}
        >
          Gift product
        </InputLabel>

        <Select
          sx={{ color: "white !important" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={productGift}
          label="Gift"
          onChange={handleChange}
        >
            {productGift.productId?.map(({ name, id }) => {
                    return (
                      <MenuItem key={id} name="productGift" value={name}>
                        {name}
                      </MenuItem>
                    );
                  })}
        </Select>
      </FormControl>
    </Box>
  );
}
  