import React, { Component } from "react";
import styles from "../../styles/AboutStyle/aboutAds.module.scss";
export default class AboutAds extends Component {
  render() {
    return (
      <section className={styles.AboutAdsContainer}>
        <section className={styles.AboutAdsContent}>
          <ul>
            <li>
              <p>Get Started Instantly!</p>
            </li>
            <li>
              <h1>
                Get the only new update from this <br />
                newsletter
              </h1>
            </li>
            <li>
              <span>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your Email"
                />
                <button className={styles.button}>Subscribe</button>
              </span>
            </li>
          </ul>
        </section>
      </section>
    );
  }
}
