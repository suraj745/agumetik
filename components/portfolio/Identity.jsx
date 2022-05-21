import React, { Component } from "react";
import styles from "../../styles/Portfolio/Identity.module.scss";
import IdentCard from "./IdentCard";
import { MdEmail } from "react-icons/md";
import { AiTwotonePhone } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
export default class Identity extends Component {
  render() {
    const cards = [
      {
        logo: <AiTwotonePhone />,
        detail: ["(882) 569-7565", " (882) 453-4565"],
        heading: "Phone / Fax",
      },

      {
        logo: <MdEmail />,
        detail: ["Agumentik@gmail.com", "supportAugumentik.com"],
        heading: "Email",
      },

      {
        logo: <IoLocationSharp />,
        detail: ["INNOVATION VALLEY Hill No. 3", "   IT-Sez , Rushikonda"],
        heading: "Location",
      },
    ];
    return (
      <section className={styles.identityContainer}>
        <section className={styles.identityContent}>
          {cards.map((value) => {
            return (
              <IdentCard
                key={cards.length}
                logo={value.logo}
                heading={value.heading}
                detail={value.detail}
              />
            );
          })}
        </section>
      </section>
    );
  }
}
