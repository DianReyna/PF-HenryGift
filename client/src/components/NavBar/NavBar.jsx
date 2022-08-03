import React from "react";
import styles from './NavBar.module.css'
import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <div className={styles.container} >
            <NavLink className={styles.navlinks} to={"/"}>
                <button className={styles.button} ><p className={styles.text} >Categorias</p></button>
            </NavLink>
            <NavLink className={styles.navlinks} to="/">
                <button className={styles.button} ><p className={styles.text} >Ofertas</p></button>
            </NavLink>
            <NavLink className={styles.navlinks} to="/">
                <button className={styles.button} ><p className={styles.text} >Boxes</p></button>
            </NavLink>
        </div>
    );
}
  
  
export default NavBar