import React, { Component } from "react";
import styles from "../styles/Modal.module.scss";
import { ImCross } from "react-icons/im";
import { motion } from "framer-motion";
import {
  AiOutlineYoutube,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { GrLinkedinOption, GrFacebookOption } from "react-icons/gr";
export default class Modal extends Component {
  render() {
    const { close } = this.props;
    return (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={styles.ModalDark}
      >
        <motion.section
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          exit={{ x: "100vw" }}
          transition={{ duration: 0.6, ease: "linear" }}
          className={styles.AboutContainer}
        >
          <ul className={styles.crossButton}>
            <li>
              <ImCross onClick={close} />
            </li>
          </ul>
          <ul className={styles.About}>
            <li>
              <h1>About Us</h1>
            </li>
            <li>
              <p>
                We believe brand interaction is key to communication. Real
                innovations and positive customer experience are the heart of
                successful communication. No fake products and services. The
                customer is king, their lives and needs are the inspiration.
              </p>
            </li>
          </ul>

          <section className={styles.Instagram}>
            <ul>
              <li>
                <h1>Instagram</h1>
              </li>
              <li>
                <section className={styles.instaImages}>
                  <img src="/images/instagram-image/1.jpg" alt="" />
                  <img src="/images/instagram-image/2.jpg" alt="" />
                  <img src="/images/instagram-image/3.jpg" alt="" />
                  <img src="/images/instagram-image/4.jpg" alt="" />
                  <img src="/images/instagram-image/5.jpg" alt="" />
                  <img src="/images/instagram-image/6.jpg" alt="" />
                  <img src="/images/instagram-image/7.jpg" alt="" />
                  <img src="/images/instagram-image/8.jpg" alt="" />
                </section>
              </li>
            </ul>
          </section>

          <ul className={styles.contact}>
            <li style={{ color: "red" }}>+088 130 629 8615</li>

            <li>OR</li>
            <li>info@neemo.com</li>
            <li className={styles.socialMedia}>
              <span>
                <a>
                  <AiOutlineTwitter color="#76777d" />
                </a>
              </span>

              <span>
                <a>
                  <AiOutlineYoutube color="  #76777d" />
                </a>
              </span>

              <span>
                <a>
                  <GrFacebookOption color="  #76777d" />
                </a>
              </span>

              <span>
                <a>
                  <GrLinkedinOption color="  #76777d" />
                </a>
              </span>

              <span>
                <a>
                  <AiOutlineInstagram color="  #76777d" />
                </a>
              </span>
            </li>
          </ul>
        </motion.section>
      </motion.section>
    );
  }
}
