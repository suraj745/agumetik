import React, { Component } from "react";
import styles from "../../styles/Portfolio/port.module.scss";
import Image from "next/image";
export default class PortIntro extends Component {
  render() {
    return (
      <section className={styles.portContainer}>
        <section className={styles.portContent}>
          <section className={styles.leftContent}>
            <Image
              src={"https://agumentik-software.vercel.app/images/port.svg"}
              width={650}
              height={500}
            />
          </section>
          <section className={styles.rightContent}>
            <ul>
              <li className={styles.title}>
                <h5> Portfolio</h5>
              </li>
              <li className={styles.heading}>
                <h1>What Are Things Covered</h1>
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
                  maecenas accumsan lacus vel facilisis.Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry.
                </p>
              </li>
              <li className={styles.button}>
                <button>Know More</button>
              </li>
            </ul>
          </section>
        </section>
      </section>
    );
  }
}
