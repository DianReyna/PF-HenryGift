import { setCol, setDir,setName,setCategory,setPage,setPerson } from '../reducer/querySlice';



export const  sortCol = (col) => (dispatch) => {
  dispatch(setCol(col))
}

export const  sortDir = (dir) => (dispatch) => {
  dispatch(setDir(dir))
}

export const queryName = (name) => (dispatch) => {
  dispatch(setName(name))
}

export const queryPage = (page) => (dispatch) => {
  dispatch(setPage(page))
}

export const filterCategory = (category) => (dispatch) => {
  dispatch(setCategory(category))
}

export const filterPerson = (person) => (dispatch) => {
  dispatch(setPerson(person))
}
