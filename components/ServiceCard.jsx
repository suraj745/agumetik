import React from "react";
import styles from "../styles/ServiceCard.module.scss";
const ServiceCard = ({ icon, heading, paragraph, color, margin }) => {
  return (
    <>
      <section className={styles.Card1} style={{ backgroundColor: color }}>
        <ul>
          <li className={styles.icon}>
            <img
              src={icon}
              alt="icon"
              width={"50px"}
              height={"50px"}
              color={"red"}
            />
          </li>
          <li className={styles.Heading}>
            <h1>{heading}</h1>
          </li>
          <li className={styles.paragraph}>
            <p>{paragraph}</p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default ServiceCard;
