import React from "react";
import styles from './navbar.module.css';
import Logo from '../../assets/images/logo/Logo.png'

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo} alt="logo" />
      </div>
    </header>
  );
};

export default Navbar;
