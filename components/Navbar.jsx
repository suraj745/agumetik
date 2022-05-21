import styles from "../styles/Navbar.module.scss";
import { AiOutlineDown } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import { Turn as Hamburger } from "hamburger-react";
import React from "react";
import { useState } from "react";
import DropDown from "./DropDown";
import { ImCross } from "react-icons/im";
import SearchBar from "./SearchBar";
import Link from "next/link";
import { useEffect } from "react";
const Navbar = ({ modalActive, mobileNav }) => {
  const [close, setClose] = useState(false);
  const [scroll, setScroll] = useState(0);

  console.log(scroll);

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
    <div>
      <section className={styles.navbar}>
        <ul className={styles.logo}>
          <li>
            <Link href={"/"} passHref>
              <Image
                src={"https://agumentik-software.vercel.app/images/logo.png"}
                height={"44.7667px"}
                width={"150px"}
                alt={"logo"}
              />
            </Link>
          </li>
        </ul>

        <ul className={styles.menus}>
          <Link href={"/"} passHref>
            <li>
              <a>Home</a>
            </li>
          </Link>
          <DropDown
            menuName={"About Us"}
            list={About.map((value) => {
              return (
                <li key={value.length}>
                  <Link href={value.link} passHref>
                    <span>{value.name}</span>
                  </Link>
                </li>
              );
            })}
          />

          <li>
            <DropDown
              menuName={"Services "}
              list={Service.map((value) => {
                return (
                  <li key={value.length}>
                    <Link href={value.link} passHref>
                      <span>{value.name}</span>
                    </Link>
                  </li>
                );
              })}
            />
          </li>
          <Link href={"/portfolio"} passHref>
            <li>
              <a>Portfolio</a>
            </li>
          </Link>
          <li>
            <DropDown
              menuName={"Info "}
              list={Info.map((value) => {
                return (
                  <li key={value.length}>
                    <Link href={value.link}>
                      <span>{value.name}</span>
                    </Link>
                  </li>
                );
              })}
            />
          </li>
          <li>
            <DropDown
              menuName={"Support "}
              list={Support.map((value) => {
                return (
                  <li key={value.length}>
                    <span>{value}</span>
                  </li>
                );
              })}
            />
          </li>
        </ul>

        <ul className={styles.hamburger}>
          <li>
            <span onClick={() => setClose(!close)}>
              {!close ? (
                <FiSearch className={styles.search} fontSize={"2rem"} />
              ) : (
                <ImCross className={styles.search} fontSize={"2rem"} />
              )}
            </span>
            {close && <SearchBar />}
          </li>

          <li onClick={modalActive}>
            <span></span>
            <span></span>
            <span></span>
          </li>

          <li className={styles.tabHam} onClick={mobileNav}>
            <Hamburger direction="right" />
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Navbar;
