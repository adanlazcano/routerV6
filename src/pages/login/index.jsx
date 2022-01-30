import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import styles from "./styles.module.scss";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (_) => {
    navigate("/");
  };

  return (
    <div className={styles.login}>
      <Button event={handleLogin} text="Login"></Button>
    </div>
  );
};

export default Login;
