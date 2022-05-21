import React, { Component } from "react";
import styles from "../styles/Boosting.module.scss";
export default class Boosting extends Component {
  constructor() {
    super();

    this.state = {
      heading: "SOCIAL MARKETING",
      img: "/images/tab/1.jpg",
    };
  }

  render() {
    return (
      <section className={styles.BoostingPage}>
        <ul>
          <li className={styles.Box1}>
            <div className={styles.top}>
              <ul>
                <li className={styles.title}>
                  <h5>Boosting</h5>
                </li>
                <li className={styles.heading}>
                  <h1>Our Recent Projects</h1>
                </li>
                <li className={styles.design}>
                  <span></span>
                  <span></span>
                </li>
              </ul>
            </div>
          </li>
          <li className={styles.Box2}>
            <section className={styles.middle}>
              <section className={styles.tabs}>
                <ul
                  style={{ background: this.state.background }}
                  className={styles.tab}
                  onClick={() =>
                    this.setState({
                      heading: "SOCIAL MARKETING",
                      img: "/images/tab/1.jpg",
                    })
                  }
                >
                  <li className={styles.icon}>
                    <img
                      src="/images/mycollection/png/001-laptop.png"
                      alt="img"
                    />
                  </li>
                  <li className={styles.name}>
                    <p>project 1</p>
                  </li>
                </ul>

                <ul
                  onClick={() =>
                    this.setState({
                      heading: "Pay-Per Click",
                      img: "/images/tab/2.jpg",
                    })
                  }
                  style={{ background: this.state.background }}
                  className={styles.tab}
                >
                  <li className={styles.icon}>
                    <img src="/images/mycollection/png/001-laptop.png" alt="" />
                  </li>
                  <li className={styles.name}>
                    <p>project 2</p>
                  </li>
                </ul>

                <ul
                  style={{ background: this.state.background }}
                  className={styles.tab}
                  onClick={() =>
                    this.setState({
                      heading: "Online Marketting",
                      img: "/images/tab/3.jpg",
                    })
                  }
                >
                  <li className={styles.icon}>
                    <img src="/images/mycollection/png/001-laptop.png" alt="" />
                  </li>
                  <li className={styles.name}>
                    <p>project 3</p>
                  </li>
                </ul>

                <ul
                  style={{ background: this.state.background }}
                  className={styles.tab}
                  onClick={() =>
                    this.setState({
                      heading: "Email Marketting",
                      img: "/images/tab/4.jpg",
                    })
                  }
                >
                  <li className={styles.icon}>
                    <img src="/images/mycollection/png/001-laptop.png" alt="" />
                  </li>
                  <li className={styles.name}>
                    <p>project 4</p>
                  </li>
                </ul>

                <ul
                  style={{ background: this.state.background }}
                  className={styles.tab}
                  onClick={() =>
                    this.setState({
                      heading: "Social Marketting",
                      img: "/images/tab/5.jpg",
                    })
                  }
                >
                  <li className={styles.icon}>
                    <img src="/images/mycollection/png/001-laptop.png" alt="" />
                  </li>
                  <li className={styles.name}>
                    <p>project 5</p>
                  </li>
                </ul>

                <ul
                  style={{ background: this.state.background }}
                  className={styles.tab}
                  onClick={() =>
                    this.setState({
                      heading: "Digital Marketting",
                      img: "/images/tab/6.jpg",
                    })
                  }
                >
                  <li className={styles.icon}>
                    <img src="/images/mycollection/png/001-laptop.png" alt="" />
                  </li>
                  <li className={styles.name}>
                    <p>project 6</p>
                  </li>
                </ul>
              </section>
            </section>
          </li>
          <li className={styles.Box3}>
            <section className={styles.bottom}>
              <section className={styles.clickContent}>
                <section className={styles.image}>
                  <img src={this.state.img} width={400} height={350} />
                </section>
                <section className={styles.content}>
                  <ul>
                    <li className={styles.heading}>
                      <h1>{this.state.heading}</h1>
                    </li>
                    <li className={styles.paragraph}>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        dont look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isnt anything embarrassing hidden in the middle of text.
                      </p>
                    </li>
                    <li className={styles.cardss}>
                      <section className={styles.card1}>
                        <span className={styles.icon}>
                          <img
                            src="/images/mycollection/png/002-seo.png"
                            alt="icon"
                          />
                        </span>
                        <span className={styles.icon}>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt.
                          </p>
                        </span>
                      </section>
                      <section className={styles.card1}>
                        <span className={styles.icon}>
                          <img
                            src="/images/mycollection/png/002-seo.png"
                            alt="icon"
                          />
                        </span>
                        <span className={styles.icon}>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt.
                          </p>
                        </span>
                      </section>
                    </li>
                    <li className={styles.button}>
                      <button>Discover More</button>
                    </li>
                  </ul>
                </section>
              </section>
            </section>
          </li>
        </ul>
      </section>
    );
  }
}
