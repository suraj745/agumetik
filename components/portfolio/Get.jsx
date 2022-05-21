import React, { Component } from "react";
import styles from "../../styles/Portfolio/get.module.scss";
import { ImFacebook, ImTwitter, ImLinkedin, ImPinterest } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
import Form from "./Form";
export default class Get extends Component {
  render() {
    const socailIcons = [
      <ImFacebook />,
      <ImTwitter />,
      <AiFillInstagram />,
      <ImLinkedin />,
      <ImPinterest />,
    ];
    return (
      <section className={styles.getContainer}>
        <section className={styles.getContent}>
          <section className={styles.left}>
            <ul>
              <li className={styles.heading}>
                <h1>Get in Touch</h1>
              </li>
              <li className={styles.paragraph}>
                <p>
                  Let’s work together to create a changing experience that will
                  turn your brand from bland to buzz worthy. We would love to
                  hear from you whether you are curious about the features, a
                  free quote or even need additional information, don’t hesitate
                  to leave a message. We will get back to you as soon as
                  possible, and we will be happy to answer your value question.
                </p>
              </li>
              <li className={styles.icons}>
                {socailIcons.map((value) => {
                  return <span>{value}</span>;
                })}
              </li>
            </ul>
          </section>
          <section className={styles.right}>
            <Form />
          </section>
        </section>
      </section>
    );
  }
}
