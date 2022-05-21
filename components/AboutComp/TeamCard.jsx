import React, { Component } from "react";
import styles from "../../styles/AboutStyle/teamCard.module.scss";
import Image from "next/image";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default class TeamCard extends Component {
  render() {
    const { heading, position, image } = this.props;
    return (
      <section className={styles.teamCardContainer}>
        <section className={styles.teamContent}>
          <ul>
            <li>
              <Image src={image} width={500} height={500} alt={"img"} />
            </li>
            <li className={styles.heading}>
              <h1>{heading}</h1>
            </li>
            <li className={styles.position}>
              <p>{position}</p>
            </li>
            <li className={styles.social}>
              <span>
                <FaLinkedinIn />
              </span>
              <span>
                <FaFacebookF />
              </span>
              <span>
                <FaTwitter />
              </span>
              <span>
                <FaInstagram />
              </span>
            </li>
          </ul>
        </section>
      </section>
    );
  }
}
