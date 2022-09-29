import React, { useEffect, useState } from "react";
import { Pagination, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { queryPage } from "../../redux/actions/queryActions";

export default function AppPagination({ setPage, page }) {
  const { boxes } = useSelector((state) => state.boxes);
  const [pages, setPages] = useState(0);
  const dispatch = useDispatch();
  const query = useSelector((state) => state.query);
  useEffect(() => {
    if (typeof boxes.count != "undefined") {
      setPages(Math.ceil(boxes.count / 8));
    }
    dispatch(queryPage(0));
  }, [boxes.count]);

  useEffect(() => {
    setPage(0);
  }, [pages]);

  useEffect(() => {
    if (query.sort.col && query.sort.dir) setPage(0);
  }, [query.sort]);

  return (
    <Box
      justifyContent={"center"}
      alignItems="center"
      display={"flex"}
      sx={{ margin: "2rem 0px" }}
    >
      <Pagination
        count={pages}
        page={page + 1}
        variant="outlined"
        shape="rounded"
        onChange={(e, value) => {
          setPage(value - 1);
          window.scroll(0, 0);
        }}
      />
    </Box>
  );
}
