import React, { Component } from "react";
import ServiceCard from "./ServiceCard";
import styles from "../styles/ServicePage.module.scss";
import { motion } from "framer-motion";
export default class Services extends Component {
  render() {
    const serviceDetail = [
      {
        logo: "/png2/004-business-plan.png",
        heading: `Search Engine Optimization`,
        paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu labore et dolore magna aliqua.`,
      },

      {
        logo: "/png2/002-searching.png",
        heading: `Social Media Strategy`,
        paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu labore et dolore magna aliqua.`,
      },

      {
        logo: "/png2/001-app-development.png",
        heading: `Real Time and Data`,
        paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu labore et dolore magna aliqua.`,
      },

      {
        logo: "/png2/004-business-plan.png",
        heading: `Online Media Management`,
        paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu labore et dolore magna aliqua.`,
      },

      {
        logo: "/images/mycollection/png/004-data-analysis.png",
        heading: `Reporting & Analysis`,
        paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu labore et dolore magna aliqua.`,
      },

      {
        logo: "/png2/005-data-recovery.png",
        heading: `Penalty Recovery`,
        paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu labore et dolore magna aliqua.`,
      },
    ];
    return (
      <section className={styles.services}>
        <ul>
          <li className={styles.title}>
            <h5>Services</h5>
          </li>
          <li className={styles.heading}>
            <h1>How We Can Help?</h1>
          </li>
          <li className={styles.design}>
            <span></span>
            <span></span>
          </li>
          <li>
            <section className={styles.cards}>
              {serviceDetail.map((value) => {
                return (
                  <section className={styles.hover}>
                    <ServiceCard
                      icon={value.logo}
                      heading={value.heading}
                      paragraph={value.paragraph}
                    />
                  </section>
                );
              })}
            </section>
          </li>
          <li className={styles.serviceButton} style={{ textAlign: "center" }}>
            <button>More Services</button>
          </li>
        </ul>
      </section>
    );
  }
}
