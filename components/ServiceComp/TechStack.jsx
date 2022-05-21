import React, { Component } from "react";
import styles from "../../styles/WebdevStyle/techStack.module.scss";
import PartnerSlider from "../../components/PartnerSlider";
export default class TechStack extends Component {
  render() {
    return (
      <section className={styles.techStackContainer}>
        <section className={styles.techStackContent}>
          <ul>
            <li className={styles.heading}>
              <h1>Certifications</h1>
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
      </section>
    );
  }
}
