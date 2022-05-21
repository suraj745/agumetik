import React, { Component } from "react";
import styles from "../styles/About.module.scss";
import Image from "next/image";
export default class AboutUs extends Component {
  render() {
    return (
      <section className={styles.About}>
        <section className={styles.left}>
          <Image
            src={"/images/about-image.png"}
            width={600}
            height={500}
            alt={"img"}
          />
        </section>
        <section className={styles.right}>
          <ul>
            <li className={styles.title}>
              <h5>ABOUT US</h5>
            </li>
            <li className={styles.heading}>
              <h1>Who We Are</h1>
            </li>
            <li className={styles.design}>
              <span></span>
              <span></span>
            </li>
            <li className={styles.paragraph}>
              <p>
                Agumentik have a big vision, taking very small but smart steps
                to get toward success. We are humble, visionary and gigantic as
                well in terms of aspiration. In the Information and Technology
                Industry, “It’s not about a splendid innovation, it’s about a
                bunch of little innovations every day, every month and so on for
                carrying out something a slight better and efficient.
              </p>
            </li>
            <li className={styles.number}>
              <span>
                <a className={styles.number1}>
                  <span>1150</span> <span style={{ color: "#ff724e" }}>+</span>
                </a>
                <a>Project Completed</a>
              </span>
              <span>
                <a className={styles.number2}>
                  <span>450</span> <span style={{ color: "#ff724e" }}>+</span>
                </a>
                <a> Satisfied Clients</a>
              </span>
            </li>
            <li className={styles.downloadButton}>
              <button>Dowload Brochere</button>
            </li>
          </ul>
        </section>
      </section>
    );
  }
}
