import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss'

const Home = () => {
  return (
      <Link className={styles["profile"]} to="/profile/adan"><h1>Welcome</h1></Link>
  )
};

export default Home;
