import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import style from "./SuccesModal.module.css";
import submitedImg from "../../img/receive.png";

function SuccesModal(props) {
  return (
    <div className={style.modalContainer}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 1000 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, x: 1000 }}
        transition={{ stiffness: 200 }}
        className={style.modal}
      >
        <h3>Your Order has been succesfuly submited!</h3>
        <div>
          <img src={submitedImg} alt="submited"></img>
        </div>
        <Link
          to="/"
          className={style.buttonContainer}
          onClick={props.modalHandler}
        >
          <div className={style.button}> Perfect!</div>
        </Link>
      </motion.div>
    </div>
  );
}

export default SuccesModal;
