import React, { Component } from "react";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import { AiOutlinePlayCircle } from "react-icons/ai";
import ModalVideo from "react-modal-video";
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <>
        <section className={styles.homeContainer}>
          <section className={styles.videoModal}>
            <ModalVideo
              className="modalVideoBody"
              channel="youtube"
              isOpen={this.state.isOpen}
              videoId="L61p2uyiMSo"
              onClose={() => this.setState({ isOpen: false })}
            />
          </section>
          <section className={styles.homepage}>
            <section className={styles.shapeImages}>
              <div className={styles.shape1}>
                <img src="/images/shape/1.png" alt="image" />
              </div>
              <div className={styles.shape2}>
                <img src="/images/shape/2.png" alt="image" />
              </div>
              <div className={styles.shape3}>
                <img src="/images/shape/3.png" alt="image" />
              </div>
              <div className={styles.shape4}>
                <img src="/images/shape/4.png" alt="image" />
              </div>
              <div className={styles.shape5}>
                <img src="/images/shape/5.png" alt="image" />
              </div>
              <div className={styles.shape6}>
                <img src="/images/shape/6.png" alt="image" />
              </div>
              <div className={styles.shape7}>
                <img src="/images/shape/2.png" alt="image" />
              </div>
              <div className={styles.shape8}>
                <img src="/images/shape/10.png" alt="image" />
              </div>
              <div className={styles.shape9}>
                <img src="/images/shape/7.png" alt="image" />
              </div>
              <div className={styles.shape10}>
                <img src="/images/shape/5.png" alt="image" />
              </div>
              <div className={styles.shape11}>
                <img src="/images/shape/11.png" alt="image" />
              </div>
            </section>
            <h1 className={styles.companyName}>AGUMENTIK</h1>
            <section className={styles.content}>
              <section className={styles.left}>
                <h1>Digital Agency with Excellence Service</h1>
                <p>
                  We are the fastest growing startup in Andhra Pradesh for
                  designing Software, Website Development, App Development,
                  Animation, Game Designing and Digital Marketing Era.
                </p>

                {/* buttons */}
                <section className={styles.buttons}>
                  <button className={styles.moreButton}>More About Us</button>

                  <button
                    className={styles.videoButton}
                    onClick={(e) => {
                      e.preventDefault();
                      this.openModal();
                    }}
                  >
                    Watch Video
                    <AiOutlinePlayCircle
                      color="#eb5681"
                      fontSize={"2.5rem"}
                      style={{ marginLeft: "1rem", marginBottom: "1.5rem" }}
                    />
                  </button>
                </section>
              </section>

              <section className={styles.right}>
                <div className={styles.bannerContainer}>
                  <section className={styles.banner}>
                    <img
                      src="/images/saas-image/arrow.png"
                      className="animate__animated animate__fadeInLeft animate__delay-0.5s"
                      alt="arrow"
                      id="arrow"
                    />
                    <img
                      src="/images/saas-image/box1.png"
                      className=" animate__animated animate__fadeInUp animate__delay-0.5s"
                      id="box1"
                      alt="box1"
                    />
                    <img
                      src="/images/saas-image/boy1.png"
                      className="animate__animated animate__fadeInLeft animate__delay-0.5s"
                      alt="boy1"
                    />
                    <img
                      src="/images/saas-image/boy2.png"
                      className="animate__animated animate__zoomIn animate__delay-0.5s"
                      alt="boy2"
                    />
                    <img
                      src="/images/saas-image/boy3.png"
                      className="animate__animated animate__bounceIn animate__delay-0.5s"
                      alt="boy3"
                    />
                    <img
                      src="/images/saas-image/digital-screen.png"
                      className=" animate__animated animate__fadeInDown animate__delay-0.5s"
                      alt="digital-screen"
                    />
                    <img
                      src="/images/saas-image/filter1.png"
                      className="animate__animated animate__zoomIn animate__delay-0.5s"
                      alt="filter1"
                    />
                    <img
                      src="/images/saas-image/filter2.png"
                      className="animate__animated animate__fadeInUp animate__delay-0.5s"
                      alt="filter2"
                    />
                    <img
                      src="/images/saas-image/filter3.png"
                      className="animate__animated animate__rotateIn animate__delay-0.5s"
                      alt="filter3"
                    />
                    <img
                      src="/images/saas-image/girl1.png"
                      className="animate__animated animate__fadeInUp animate__delay-0.5s"
                      alt="girl1"
                    />

                    <img
                      src="/images/saas-image/girl2.png"
                      className="animate__animated animate__zoomIn animate__delay-0.5s"
                      alt="girl2"
                    />
                    <img
                      src="/images/saas-image/monitor.png"
                      className="monitor animate__animated animate__fadeInRight animate__delay-0.5s"
                      alt="monitor"
                    />
                    <img
                      src="/images/saas-image/4.png"
                      className="animate__animated animate__zoomIn animate__delay-0.5s"
                      alt="4"
                    />
                    <img
                      src="/images/saas-image/7.png"
                      className="animate__animated animate__zoomIn animate__delay-0.5s"
                      alt="7"
                    />
                  </section>

                  {/* Main Image */}
                  <section className={styles.mobileImage}>
                    <img
                      src="/images/saas-image/main-image.png"
                      className="animate__animated animate__zoomIn animate__delay-0.5s"
                      alt="main-image.png"
                      width={"300px"}
                      height={"300px"}
                    />
                  </section>
                </div>
              </section>
            </section>
          </section>
        </section>
      </>
    );
  }
}
