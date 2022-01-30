import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './styles.module.scss';

const Profile = () => {

  const params=useParams();

  return (
      <h1>Hey there! <small className={styles["username"]}>{params.username}</small></h1>
  );
};

export default Profile;
