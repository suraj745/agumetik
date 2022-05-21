import React from "react";
import styles from "../styles/InqCards.module.scss";
import { motion } from "framer-motion";
import { useState } from "react";
const InquriyCard2 = () => {
  const [cssclass, setCssClass] = useState(false);

  return (
    <div className={styles.outerLayer} style={{ background: "#fef6ee" }}>
      <div className={styles.cardContainer}>
        <div
          className={cssclass ? "animate__animated animate__flipOutY" : " "}
          onClick={() => setCssClass(!cssclass)}
        >
          <ul className={styles.cardContent1}>
            <li className={styles.icon}>
              <img src="/images/mycollection/png/003-analytics.png" alt="" />
            </li>
            <li className={styles.heading}>
              <h1>Project Status</h1>
            </li>
            <li className={styles.para}>
              <p>
                Get latest status and preview of your project using project ID.
              </p>
            </li>
          </ul>
        </div>
        <div onClick={() => setCssClass(!cssclass)}>
          <ul
            className={styles.cardContent2}
            style={{
              background: "#fef6ee",
              display: "grid",

              gridTemplateRows: "repeat(2,80px)",
              placeContent: "center",
            }}
          >
            <li className={styles.button}>
              <button>New User Registerd</button>
            </li>
            <li className={styles.button}>
              <button>Already Registerd User</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InquriyCard2;
