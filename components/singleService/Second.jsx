import React, { Component } from "react";
import styles from "../../styles/WebdevStyle/second.module.scss";
import { TiTick } from "react-icons/ti";
import Image from "next/image";
export default class SingleService extends Component {
  render() {
    return (
      <section className={styles.singleServiceContainer}>
        <section className={styles.singleSeviceContent}>
          <section className={styles.rightContent}>
            <Image
              src="/images/services-details-image/2.jpg"
              alt="image"
              width={650}
              height={500}
            />
          </section>
          <section className={styles.leftContent}>
            <ul>
              <li className={styles.firstContent}>
                <h1>Digital Marketing</h1>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>
              </li>
              <li className={styles.secondContent}>
                <h1>
                  <span>
                    <TiTick />
                  </span>
                  Core Development
                </h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's.
                </p>
              </li>
              <li className={styles.thirdContent}>
                <h1>
                  <span>
                    <TiTick />
                  </span>
                  Define Your Choices
                </h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's.
                </p>
              </li>
            </ul>
          </section>
        </section>
      </section>
    );
  }
}
