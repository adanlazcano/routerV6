import styles from './styles.module.scss';

const Button = ({text,event}) => {
  return <button onClick={event} className={styles["button"]}>{text}</button>
};

export default Button;
