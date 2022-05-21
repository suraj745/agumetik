import React, { Component } from "react";
import Image from "next/image";

import styles from "../../styles/AboutStyle/group.module.scss";
export default class Group extends Component {
  render() {
    return (
      <section className={styles.groupContainer}>
        <section className={styles.groupContent}>
          <section className={styles.groupLeft}>
            <Image
              src={"https://agumentik-software.vercel.app/images/group.jpg"}
              width={600}
              height={400}
              alt={"img"}
            />
          </section>
          <section className={styles.groupRight}>
            <ul>
              <li className={styles.title}>
                <h5>Our Mission</h5>
              </li>
              <li className={styles.heading}>
                <h1>We are Dynamic Team Development</h1>
              </li>
              <li className={styles.design}>
                <span></span>
                <span></span>
              </li>
              <li className={styles.paragraph}>
                <p
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt labore dolore magna aliqua.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry.
                </p>
              </li>
            </ul>
          </section>
        </section>
      </section>
    );
  }
}
