import { Link } from "react-router-dom";
import style from "./FailedModal.module.css";

import errorSubmitingImg from "../../img/failed.png";
import { motion } from "framer-motion";

function FailedModal(props) {
  return (
    <div className={style.modalContainer}>
      <motion.div
        className={style.modal}
        variants={{
          hidden: { opacity: 0, x: 1000 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, x: 1000 }}
        transition={{ stiffness: 200 }}
      >
        <h3>{props.error}</h3>
        <div>
          <img src={errorSubmitingImg} alt="submited"></img>
        </div>
        <Link
          to="/"
          className={style.buttonContainer}
          onClick={props.modalHandler}
        >
          <div className={style.button}> Try again Later!</div>
        </Link>
      </motion.div>
    </div>
  );
}

export default FailedModal;
