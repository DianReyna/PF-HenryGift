import React, { useEffect,useState } from "react";
import { Pagination, Box, Typography } from "@mui/material";
import { useSelector,useDispatch } from "react-redux";
import { queryPage } from "../../redux/actions/queryActions";

export default function AppPagination({setPage,page}) {

      const{ boxes} = useSelector((state) => state.boxes)
      const [pages, setPages] = useState(0)
      const dispatch = useDispatch()

      useEffect(()=>{
        
          setPages(Math.ceil(boxes.count/4))
          dispatch(queryPage(0))
         console.log(pages)
      },[boxes.count])

      useEffect(()=>{
        setPage(0)
      },[pages])

      return (
        <Box justifyContent={"center"} alignItems="center" display={"flex"} 
        sx={{margin:"20px 0px"}}>

        {/*  <Pagination count={8} variant="outlined" color="primary" shape="rounded" onChange={(e,value)=>{setPage(value);window.scroll(0,0)}}/> */}
         <Typography>Page: {page+1}</Typography>
         <Pagination count={pages} page={page+1} variant="outlined" color="primary" shape="rounded" onChange={(e,value)=>{setPage(value-1);window.scroll(0,0)}}/>

        </Box>
      )
    }
         
