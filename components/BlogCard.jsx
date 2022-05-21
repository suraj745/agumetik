import React, { Component } from "react";
import styles from "../styles/BlogCard.module.scss";
import Image from "next/image";
import { FaUser, FaRegComments } from "react-icons/fa";

export default class BlogCard extends Component {
  render() {
    const { cardHeading, imageUrl, cardDate } = this.props;
    return (
      <section className={styles.section}>
        <Image src={imageUrl} width={500} height={450} alt={"img"} />

        <ul className={styles.blogCard}>
          <li>
            <ul className={styles.section2}>
              <li className={styles.tag}>
                <span>{cardDate}</span>
                <span>January</span>
              </li>
              <li className={styles.info}>
                <section className={styles.admin}>
                  <span className={styles.icon}>
                    <FaUser />
                  </span>
                  <span>By admin</span>
                </section>
                <section className={styles.admin}>
                  <span className={styles.icon}>
                    <FaRegComments />
                  </span>
                  <span>comment</span>
                </section>
              </li>
              <li className={styles.heading}>
                <h2>{cardHeading}</h2>
              </li>
              <li className={styles.paragraph}>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti
                </p>
              </li>

              <li className={styles.button}>
                <button>Read More</button>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    );
  }
}
