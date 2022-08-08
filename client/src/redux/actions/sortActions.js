import { setCol, setDir } from '../reducer/sortSlice';



export const  sortCol = (col) => (dispatch) => {
  dispatch(setCol(col))
}

export const  sortDir = (dir) => (dispatch) => {
  dispatch(setDir(dir))
}