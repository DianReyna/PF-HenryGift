import React from "react";
import {Pagination,Box,Typography} from '@mui/material';

export default function AppPagination({setPage,page}) {
      return (
        <Box justifyContent={"center"} alignItems="center" display={"flex"} 
        sx={{margin:"20px 0px"}}>
         <Typography>Page: {page}</Typography>
         <Pagination count={8} variant="outlined" color="primary" shape="rounded" onChange={(e,value)=>{setPage(value);window.scroll(0,0)}}/>
        </Box>
      )
    }
         