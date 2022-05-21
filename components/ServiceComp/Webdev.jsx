import React, { Component } from "react";
import styles from "../../styles/WebdevStyle/Web.module.scss";
import Image from "next/dist/client/image";
export default class Webdev extends Component {
  render() {
    return (
      <section className={styles.WebdevContainer}>
        <section className={styles.WebdevContent}>
          {/* web left */}
          <section className={styles.webLeft}>
            <Image
              src={"/images/service.svg"}
              width={500}
              height={500}
              alt={"img"}
            />
          </section>

          {/* web right */}
          <section className={styles.webRight}>
            <ul>
              <li className={styles.title}>
                <h5>Web Devlopment</h5>
              </li>
              <li className={styles.heading}>
                <h1>How We Are Different in Website Development</h1>
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
                <button>Get Quote</button>
              </li>
            </ul>
          </section>
        </section>
      </section>
    );
  }
}
