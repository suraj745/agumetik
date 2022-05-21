import React, { Component } from "react";
import styles from "../styles/404.module.scss";
import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
export default class NotFound extends Component {
  render() {
    return (
      <section className={styles.notContainer}>
        <section className={styles.notContent}>
          <ul>
            <li>
              <Image src={"/images/404.png"} width={650} height={350} />
            </li>
            <li className={styles.heading}>
              <h1>Page Not Found</h1>
            </li>
            <li className={styles.paragraph}>
              <p>
                The page you are looking for might have been removed had its
                name changed <br />
                or is temporarily unavailable.
              </p>
            </li>
            <li className={styles.button}>
              <Link href={"/"} passHref>
                <button>Go to Home</button>
              </Link>
            </li>
          </ul>
        </section>
      </section>
    );
  }
}
