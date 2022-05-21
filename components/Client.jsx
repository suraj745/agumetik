import React, { Component } from "react";
import PartnerSlider from "./PartnerSlider";
import styles from "../styles/AwardsPage.module.scss";
export default class Awards extends Component {
  render() {
    return (
      <section>
        <ul className={styles.Partnerpage}>
          <li className={styles.Heading}>
            <h1>Our Client</h1>
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
  }
}
