import React, { Component } from "react";
import styles from "../../styles/ProductStyle/product.module.scss";
import Image from "next/dist/client/image";
export default class OurProduct extends Component {
  render() {
    return (
      <section className={styles.productContainer}>
        <section className={styles.productContent}>
          <section className={styles.leftContent}>
            <Image
              src={"https://agumentik-software.vercel.app/images/products.png"}
              width={600}
              height={400}
              alt={"img"}
            />
          </section>
          <section className={styles.rightContent}>
            <ul>
              <li className={styles.title}>
                <h5>Our Products</h5>
              </li>
              <li className={styles.heading}>
                <h1>Lets Dive Into Our Products</h1>
              </li>
              <li className={styles.design}>
                <span></span>
                <span></span>
              </li>
              <li className={styles.paragraph}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry.
                </p>
              </li>
              <li className={styles.button}>
                <button>Know More</button>
              </li>
            </ul>
          </section>
        </section>
      </section>
    );
  }
}
