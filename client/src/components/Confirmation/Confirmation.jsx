import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { URL } from "../../utils/index";
import styles from './confirmation.css'

export default function Confirmation() {
  const dispatch  = useDispatch()

  const [searchParams] = useSearchParams();
  const query = Object.fromEntries([...searchParams])

  useEffect(() => {
    axios.get(`${URL}/confirmation?token=${query.token}`);
  }, [dispatch]);

  return (
    <div className={styles.container} >
      <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
    </div>
  );
}