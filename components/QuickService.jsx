import React, { Component } from "react";
import styles from "../styles/QuickServicePage.module.scss";
import ServiceCard from "./ServiceCard";
export default class QuickService extends Component {
  constructor() {
    super();
    this.state = [
      {
        icon: "/images/mycollection/png/002-seo.png",
        heading: `Mobile App Development`,
        paragraph: `Android was intended to be very customizable. And we welcome innovations.`,
        color: `#e4e0f3`,
      },
      {
        icon: "/images/mycollection/png/003-analytics.png",
        heading: `Website Development`,
        paragraph: `Programs must be written for people to read and for machines to execute.`,
        color: `#fbe6d4`,
      },
      {
        icon: "/images/mycollection/png/001-laptop.png",
        heading: `Software Development`,
        paragraph: `A successful website contains sparkling elements, which attracts others.`,
        color: "#f0fffc",
      },
      {
        icon: `/images/mycollection/png/004-data-analysis.png`,
        heading: `Digital Marketing`,
        paragraph: `Three responses to a piece of design – yes, no, and WOW! Wow is what we aim for.`,
        color: "#f8e1eb",
      },
    ];
  }
  render() {
    return (
      <div className={styles.ServicePage}>
        {/* left */}

        <section className={styles.QuickLeft}>
          <ul>
            <li className={styles.title}>
              <h5>QUICK SERVICES</h5>
            </li>
            <li className={styles.Heading}>
              <h1>Services You Care About And We Excel At</h1>
            </li>
            <li className={styles.design}>
              <span></span>
              <span></span>
            </li>
            <li className={styles.paragraph}>
              <p>
                We strive to provide you with the best solutions to the needs of
                your business system. As a company, we value your obstacles and
                objectives and develop solutions that best satisfy your demands.
                We offer your business strong and adequate solutions with
                lasting impact.....
              </p>
            </li>
            <li className={styles.callButton}>
              <button>Call Us Now</button>
            </li>
          </ul>
        </section>

        {/* right */}
        <section className={styles.QuickRight}>
          {this.state.map((value) => {
            return (
              <ServiceCard
                key={this.state.length}
                icon={value.icon}
                heading={value.heading}
                paragraph={value.paragraph}
                color={value.color}
                margin={value.margin}
              />
            );
          })}
        </section>
      </div>
    );
  }
}
