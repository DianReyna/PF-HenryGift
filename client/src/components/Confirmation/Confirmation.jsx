import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
// import {confirmation} from '../../redux/reducer/authSlice.js'
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { URL } from "../../utils/index";


export default function Confirmation() {
  const dispatch  = useDispatch()

  const [searchParams] = useSearchParams();
  const query = Object.fromEntries([...searchParams])

  useEffect(() => {
    axios.get(`${URL}/confirmation?token=${query.token}`);
  }, [dispatch]);

  return (
    <div>
      <h1>Your email has been confirmed!</h1>
    </div>
  );
}