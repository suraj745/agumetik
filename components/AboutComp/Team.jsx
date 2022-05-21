import React, { Component } from "react";
import styles from "../../styles/AboutStyle/team.module.scss";
import TeamCard from "./TeamCard";

export default class Team extends Component {
  render() {
    const cardData = [
      {
        heading: "Krishna kumar Mishra",
        image: "/images/team/1.jpg",
        position: "CEO & Founder",
      },
      {
        heading: "Calvin Klein",
        image: "/images/team/2.jpg",
        position: "Marketing Support",
      },
    ];
    return (
      <section className={styles.teamContainer}>
        <section className={styles.teamContent}>
          <ul>
            <li className={styles.title}>
              <h5>Team</h5>
            </li>
            <li className={styles.heading}>
              <h1>Meet Our Team</h1>
            </li>
            <li className={styles.design}>
              <span></span>
              <span></span>
            </li>
            <li className={styles.cards}>
              {cardData.map((value) => {
                return (
                  <TeamCard
                    key={cardData.length}
                    heading={value.heading}
                    position={value.position}
                    image={value.image}
                  />
                );
              })}
            </li>
          </ul>
        </section>
      </section>
    );
  }
}
