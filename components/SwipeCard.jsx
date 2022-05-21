import React, { Component } from "react";
import styles from "../styles/SwiperCard.module.scss";
import Image from "next/image";
export default class SwipeCard extends Component {
  render() {
    const { image, personName, position } = this.props;
    return (
      <section className={styles.upper}>
        <section className={styles.swiperCard}>
          <ul>
            <li className={styles.profile}>
              <span>
                <img
                  className={styles.image}
                  src={image}
                  width={"100px"}
                  height={"100px"}
                  alt={"client"}
                />
              </span>
            </li>
            <li className={styles.Name}>
              <h2>{personName}</h2>
            </li>
            <li className={styles.positon}>
              <p>{position}</p>
            </li>
            <li className={styles.coma}>
              <span> </span>
              <Image
                src={"/inverted-commas.png"}
                alt={"comma"}
                width={40}
                height={40}
              />
            </li>
            <li className={styles.para}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                expedita dignissimos, accusamus ipsum ipsam optio tempora
                mollitia
              </p>
            </li>
          </ul>
        </section>
      </section>
    );
  }
}
