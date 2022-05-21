import React, { Component } from "react";
import Image from "next/dist/client/image";
import styles from "../../styles/AboutStyle/exploreCard.module.scss";
export default class ExploreCard extends Component {
  render() {
    const { heading, para, image } = this.props;
    return (
      <section className={styles.exploreCard}>
        <Image src={image} width={286} height={186} alt={"img"} />
        <ul>
          <li className={styles.heading}>
            <h1>{heading}</h1>
          </li>
          <li className={styles.paragraph}>
            <p>{para}</p>
          </li>
          <li className={styles.button}>
            <button>Know More</button>
          </li>
        </ul>
      </section>
    );
  }
}
