import styles from "./styles.module.scss";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <ul className={styles["navigation"]}>
      <li className={splitLocation[1] === "" ? styles["active"] : ""}>
        <Link to="/">Home</Link>
      </li>

      <li className={splitLocation[1] === "contact" ? styles["active"] : ""}>
        <Link to="/contact">Contact</Link>
      </li>
      <li className={splitLocation[1] === "about" ? styles["active"] : ""}>
        {" "}
        <Link to="/about">About</Link>
      </li>
      <li className={splitLocation[1] === "categories" ? styles["active"] : ""}>
        {" "}
        <Link to="/categories?skip=0&limit=10">Categories</Link>
      </li>
      <li className={splitLocation[1] === "payments" ? styles["active"] : ""}>
        {" "}
        <Link to="/payments">Payments</Link>
      </li>
    </ul>
  );
};

export default Navigation;
