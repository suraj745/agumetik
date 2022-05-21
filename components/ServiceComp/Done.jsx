import React, { Component } from "react";
import styles from "../../styles/Boosting.module.scss";
import style from "../../styles/WebdevStyle/gridImage.module.scss";
export default class Boosting extends Component {
  constructor() {
    super();

    this.state = {
      img1: [
        "http://fakeimg.pl/365x365/",
        "http://fakeimg.pl/365x365/",
        "http://fakeimg.pl/365x365/",
        "http://fakeimg.pl/365x365/",
        "http://fakeimg.pl/365x365/",
        "http://fakeimg.pl/365x365/",
        "http://fakeimg.pl/365x365/",
        "http://fakeimg.pl/365x365/",
        "http://fakeimg.pl/365x365/",
      ],
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
                  <h1>Our Done Projects</h1>
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
                      img1: [
                        "http://fakeimg.pl/365x365/",
                        "http://fakeimg.pl/365x365/",
                        "http://fakeimg.pl/365x365/",
                        "http://fakeimg.pl/365x365/",
                        "http://fakeimg.pl/365x365/",
                        "http://fakeimg.pl/365x365/",
                      ],
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
                      img1: [
                        "http://fakeimg.pl/365x365/",
                        "http://fakeimg.pl/365x365/",
                        "http://fakeimg.pl/365x365/",
                      ],
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
                      img1: [
                        "http://fakeimg.pl/365x365/",
                        "http://fakeimg.pl/365x365/",
                        "http://fakeimg.pl/365x365/",
                        "http://fakeimg.pl/365x365/",
                      ],
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
                      img1: [
                        "http://fakeimg.pl/365x365/",
                        "http://fakeimg.pl/365x365/",
                        "http://fakeimg.pl/365x365/",
                        "http://fakeimg.pl/365x365/",
                        "http://fakeimg.pl/365x365/",
                      ],
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
                      img1: [
                        "http://fakeimg.pl/365x365/",
                        "http://fakeimg.pl/365x365/",
                        "http://fakeimg.pl/365x365/",
                        "http://fakeimg.pl/365x365/",
                        "http://fakeimg.pl/365x365/",
                        "http://fakeimg.pl/365x365/",
                        "http://fakeimg.pl/365x365/",
                        "http://fakeimg.pl/365x365/",
                        "http://fakeimg.pl/365x365/",
                      ],
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
                <section className={style.gridImage}>
                  {this.state.img1.map((value) => {
                    return <img src={value} width={400} height={350} />;
                  })}
                </section>
              </section>
            </section>
          </li>
        </ul>
      </section>
    );
  }
}
