import React, { Component } from "react";
import styles from "../../styles/Portfolio/consul.module.scss";
import Image from "next/dist/client/image";
export default class Consultation extends Component {
  render() {
    return (
      <section className={styles.consulContainer}>
        <section className={styles.consulContent}>
          <section className={styles.left}>
            <Image
              src={"https://agumentik-software.vercel.app/images/consult.jpg"}
              width={650}
              height={550}
            />
          </section>
          <section className={styles.right}>
            <ul>
              <li className={styles.title}>
                <h5>Our Consultation Service</h5>
              </li>
              <li className={styles.heading}>
                <h1> Let's Dive Into Our Consultants</h1>
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
                <button>Book A Consultation</button>
              </li>
            </ul>
          </section>
        </section>
      </section>
    );
  }
}
