import React, { Component } from "react";
import styles from "../styles/Ads.module.scss";
export default class Ads extends Component {
  render() {
    return (
      <section className={styles.adsContainer}>
        <section className={styles.adsLeft}>
          <ul>
            <li>
              <h1>Sign Up For Newsletter</h1>
            </li>
            <li>
              <p>And Receive 40% Discount On First Project</p>
            </li>
          </ul>
        </section>
        <section className={styles.adsRight}>
          <ul>
            <li className={styles.Input}>
              <input type="email" placeholder="Enter your email" />
            </li>
            <li>
              <button>Subsribe Now</button>
            </li>
          </ul>
        </section>
      </section>
    );
  }
}
