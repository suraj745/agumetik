import React, { Component } from "react";
import styles from "../../styles/GalleryStyle/gallery.module.scss";
export default class GalleryPage extends Component {
  render() {
    return (
      <>
        <section className={styles.GalleryPageContainer}>
          <section className={styles.galleryContent}>
            <ul>
              <li className={styles.title}>
                <h5>Gallery</h5>
              </li>
              <li className={styles.heading}>
                <h1>Glimpse</h1>
              </li>
              <li className={styles.design}>
                <span></span>
                <span></span>
              </li>
            </ul>
            <section className={styles.galleryGrid}>
              {/* col1 */}
              <section className={styles.col1}>
                <section className={styles.item1}>
                  <img src="/images/portfolio/1.png" alt="" />

                  <h3>Branding</h3>
                </section>
                <section className={styles.item2}>
                  <img src="/images/portfolio/2.png" alt="" />

                  <h3>Marketing</h3>
                </section>
              </section>

              {/* col2 */}
              <section className={styles.col2}>
                <section className={styles.item3}>
                  <img src="/images/portfolio/3.png" alt="" />

                  <h3>Seo</h3>
                </section>
                <section className={styles.item2}>
                  <img src="/images/portfolio/4.png" alt="" />

                  <h3>Web design</h3>
                </section>
                <section className={styles.item5}>
                  <img src="/images/portfolio/5.png" alt="" />

                  <h3>Web Development</h3>
                </section>
              </section>
              <section className={styles.col3}>
                <section className={styles.item6}>
                  <img src="/images/portfolio/6.png" alt="" />
                  <h3> Digital Marketing</h3>
                </section>
                <section className={styles.item7}>
                  <img src="/images/portfolio/7.png" alt="" />
                  <h3>IT Marketing</h3>
                </section>
              </section>
            </section>
          </section>
        </section>
      </>
    );
  }
}
