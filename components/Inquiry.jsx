import React, { Component } from "react";
import InquriyCard from "./InquriyCard";
import styles from "../styles/Inquiry.module.scss";
import InquriyCard2 from "./InquiryCard2";
export default class Inquiry extends Component {
  render() {
    return (
      <div className={styles.inquiryPage}>
        <ul>
          <li className={styles.title}>
            <h5>SUPPORT</h5>
          </li>
          <li className={styles.heading}>
            <h1>Inquiry and Support</h1>
          </li>
          <li className={styles.design}>
            <span></span>
            <span></span>
          </li>
          <li className={styles.cardGrid}>
            <section className={styles.card1}>
              <ul>
                <li>
                  <InquriyCard />
                </li>
              </ul>
            </section>
            <section className={styles.card1}>
              <ul>
                <li>
                  <InquriyCard2 />
                </li>
              </ul>
            </section>
          </li>
        </ul>
      </div>
    );
  }
}
