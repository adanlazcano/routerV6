import styles from "./styles.module.scss";
import Logo from "../../components/logo/Logo";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo />
      <small>© adán_lazc@no 2022 copyright all right reserved.</small>
    </footer>
  );
};

export default Footer;
