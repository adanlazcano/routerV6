import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import styles from "./styles.module.scss";

const Categories = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);

  const skip = Number(query.get("skip")) || 0;
  const limit = Number(query.get("limit")) || 10;

  const handleNext = (_) => {
    query.set("skip", skip + limit);
    // query.set('limit',0);

    // navigate({pathname:"/contact",search:'?sabor=chocolate&color=blanco'})

    navigate({ search: query.toString() });
  };

  return (
    <div className={styles["categories"]}>
      <h1>Categories</h1>

      <p>Skip {skip}</p>
      <p>Limit {limit}</p>
      <div className={styles["contentButton"]}></div>
      <Button event={handleNext} text="Next" />
    </div>
  );
};

export default Categories;
