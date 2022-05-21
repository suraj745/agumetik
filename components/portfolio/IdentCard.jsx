import React, { Component } from "react";
import styles from "../../styles/Portfolio/IdentCard.module.scss";
import { motion } from "framer-motion";
export default class identCard extends Component {
  render() {
    const { logo, detail, heading } = this.props;
    return (
      <motion.section
        whileHover={{ y: "-1rem" }}
        transition={{ duration: 0.3 }}
        className={styles.identCardContainer}
      >
        <section className={styles.logo}>{logo}</section>
        <section className={styles.right}>
          <h1>{heading}</h1>
          {detail.map((value) => {
            return <p key={detail.length}>{value}</p>;
          })}
        </section>
      </motion.section>
    );
  }
}
