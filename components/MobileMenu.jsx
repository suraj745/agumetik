import React, { Component } from "react";
import styles from "../styles/Mobile.module.scss";
import Link from "next/dist/client/link";
export default class MobileMenu extends Component {
  render() {
    const { menuClose } = this.props;

    const About = [
      {
        link: "/about-us",
        name: "About Company",
      },
      {
        link: "/gallery",
        name: "Gallery",
      },
      {
        link: "/our-products",
        name: "Products",
      },
      {
        link: "/carrer",
        name: "Carrers",
      },
    ];
    const Service = [
      {
        link: "/service",
        name: " Web Development",
      },
      {
        link: "/single-service",
        name: "Ecommerce Development",
      },
      {
        link: "/single-service",
        name: " Single Vendor",
      },

      {
        link: "/Load",
        name: "    Multivendor",
      },
      {
        link: "/single-service",
        name: "  Mobile App Development",
      },
      {
        link: "/single-service",
        name: "Software Development",
      },
      {
        link: "/single-service",
        name: "UI/UX Designing",
      },
      {
        link: "/single-service",
        name: "Emerging Technologies",
      },
    ];

    const Info = [
      {
        link: "/blog",
        name: "Blogs",
      },
      {
        link: "/404",
        name: "Media & Events",
      },

      {
        link: "",
        name: "CSR",
      },
    ];
    const Support = [
      "Verify Employee",
      "Verify Certificate",
      "Project Status",
      "Grievance Board",
      "Contact",
    ];

    return (
      <section className={styles.mobileMenu}>
        <ul>
          <Link href={"/"}>
            <li onClick={menuClose}>Home </li>
          </Link>

          <li className={styles.About}>
            <span>About us</span>
            <ul>
              {About.map((value) => {
                return (
                  <Link href={value.link}>
                    <li onClick={menuClose} key={value.length}>
                      {value.name}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </li>

          <li className={styles.Service}>
            <span>Services</span>
            <ul>
              {Service.map((value) => {
                return (
                  <Link href={value.link}>
                    <li onClick={menuClose} key={value.length}>
                      {value.name}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </li>

          <li>Portfolio</li>

          <li className={styles.Info}>
            <span>Info</span>
            <ul>
              {Info.map((value) => {
                return (
                  <Link href={value.link} passHref>
                    <li onClick={menuClose} key={value.length}>
                      {value.name}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </li>

          <li className={styles.Support}>
            <span>Support</span>
            <ul>
              {Support.map((value) => {
                return (
                  <li onClick={menuClose} key={value.length}>
                    {value}
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </section>
    );
  }
}
