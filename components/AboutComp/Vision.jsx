import React, { Component } from "react";
import styles from "../../styles/AboutStyle/vision.module.scss";
import Image from "next/dist/client/image";
export default class Vision extends Component {
  render() {
    return (
      <section className={styles.visionContainer}>
        <section className={styles.visionContent}>
          {/* left */}
          <section className={styles.visionLeft}>
            <Image
              src={"https://agumentik-software.vercel.app/images/mission.jpg"}
              width={650}
              height={450}
              alt={"img"}
            />
          </section>

          {/* right */}
          <section className={styles.visionRight}>
            <ul>
              <li className={styles.title}>
                <h5>Our Products</h5>
              </li>
              <li className={styles.heading}>
                <h1>We are Dynamic Team of SEO Agency</h1>
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
              <li className={styles.number}>
                <span>
                  <a className={styles.number1}>
                    <span>1,165</span>
                    <span style={{ color: "#ff724e" }}>+</span>
                  </a>
                  <a>Project Completed</a>
                </span>
                <span>
                  <a className={styles.number2}>
                    <span>2,665</span>
                    <span style={{ color: "#ff724e" }}>+</span>
                  </a>
                  <a> Satisfied Clients</a>
                </span>
              </li>
            </ul>
          </section>
        </section>
      </section>
    );
  }
}
