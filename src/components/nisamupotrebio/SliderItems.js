import styles from ".//SliderItems.module.css";
import { motion } from "framer-motion";

function CaroselItems(props) {
  console.log(props.itemdata.id);

  return (
    <div className={styles.midle}>
      <motion.div className={styles.okvir}>
        <img
          src={props.itemdata.photo}
          alt={props.itemdata.title}
          className={styles.backgroundimage}
        />

        <div className={styles.text}>
          <h2>{props.itemdata.title}</h2>
          <p>{props.itemdata.description}</p>
          <div className={styles.reedmore}>
            <button>Reed More</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default CaroselItems;
