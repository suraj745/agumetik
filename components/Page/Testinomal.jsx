import React, { Component } from "react";
import styles from "../../styles/Testinomial.module.scss";
import SwipeTest from "../SwipeTest";
export default class Testinomal extends Component {
  render() {
    return (
      <section className={styles.testinomialContainer}>
        <section className={styles.testinomal}>
          <section className={styles.left}>
            <ul>
              <li className={styles.title}>
                <h5>Testimonial</h5>
              </li>
              <li className={styles.heading}>
                <h1>What Our Client Say</h1>
              </li>
              <li className={styles.design}>
                <span></span>
                <span></span>
              </li>
              <li className={styles.paragraph}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus.Lorem is simply dummy text of the
                  printing and typesetting industry.
                </p>
              </li>
            </ul>
          </section>
          <section className={styles.right}>
            <SwipeTest />
          </section>
        </section>
      </section>
    );
  }
}
