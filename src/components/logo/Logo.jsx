import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const Logo = () => {
  return (
    <Link to={'/'}>
    <img
      alt={"logo"}
      className={styles.logo}
      src={`${process.env.REACT_APP_URL_IMG}/logo.svg`}
    ></img>
    </Link>
  );
};

export default Logo;
