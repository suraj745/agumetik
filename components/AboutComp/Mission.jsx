import React, { Component } from "react";
import styles from "../../styles/AboutStyle/mission.module.scss";
import Image from "next/dist/client/image";
export default class Mission extends Component {
  render() {
    return (
      <section className={styles.missionContainer}>
        <section className={styles.missionContent}>
          {/* left */}
          <section className={styles.missionLeft}>
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

          {/* right */}
          <section className={styles.missionRight}>
            <Image
              src={"https://agumentik-software.vercel.app/images/vision.jpg"}
              width={600}
              height={400}
              alt={"img"}
            />
          </section>
        </section>
      </section>
    );
  }
}
