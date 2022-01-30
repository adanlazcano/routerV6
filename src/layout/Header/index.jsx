import Logo from "../../components/logo/Logo";
import Navigation from "../../components/header/navigation/Navigation";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <Navigation />
    </div>
  );
};

export default Header;
