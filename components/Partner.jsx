import React from "react";
import PartnerSlider from "./PartnerSlider";
import styles from "../styles/Partner.module.scss";
const Partner = () => {
  return (
    <section>
      <ul className={styles.Partnerpage}>
        <li className={styles.Heading}>
          <h1>Our Partner</h1>
        </li>
        <li className={styles.design}>
          <span></span>
          <span></span>
        </li>
        <li className={styles.slider}>
          <PartnerSlider />
        </li>
      </ul>
    </section>
  );
};

export default Partner;
