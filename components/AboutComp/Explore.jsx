import { MotionConfig } from "framer-motion";
import React, { Component } from "react";
import styles from "../../styles/AboutStyle/explore.module.scss";
import ExploreCard from "./ExploreCard";
import { motion } from "framer-motion";
export default class Explore extends Component {
  render() {
    const exploreCardContent = [
      {
        heading: "Card title",
        image: "https://agumentik-software.vercel.app/images/placeholder.png",
        para: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      },

      {
        heading: "Card title",
        image: "https://agumentik-software.vercel.app/images/placeholder.png",
        para: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      },

      {
        heading: "Card title",
        image: "https://agumentik-software.vercel.app/images/placeholder.png",
        para: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      },

      {
        heading: "Card title",
        image: "https://agumentik-software.vercel.app/images/placeholder.png",
        para: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      },

      {
        heading: "Card title",
        image: "https://agumentik-software.vercel.app/images/placeholder.png",
        para: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      },

      {
        heading: "Card title",
        image: "https://agumentik-software.vercel.app/images/placeholder.png",
        para: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
      {
        heading: "Card title",
        image: "https://agumentik-software.vercel.app/images/placeholder.png",
        para: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
      {
        heading: "Card title",
        image: "https://agumentik-software.vercel.app/images/placeholder.png",
        para: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
    ];
    return (
      <section className={styles.exploreContainer}>
        <section className={styles.exploreContent}>
          <ul>
            <li className={styles.title}>
              <h5>OUR PRODUCTS</h5>
            </li>
            <li className={styles.heading}>
              <h1>Explore & Find</h1>
            </li>
            <li className={styles.design}>
              <span></span>
              <span></span>
            </li>
            <li className={styles.cardsGrid}>
              {exploreCardContent.map((value) => {
                return (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    key={exploreCardContent.length}
                  >
                    <ExploreCard
                      heading={value.heading}
                      image={value.image}
                      para={value.para}
                    />
                  </motion.div>
                );
              })}
            </li>
          </ul>
        </section>
      </section>
    );
  }
}
