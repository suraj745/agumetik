import React, { Component } from "react";
import styles from "../styles/Footer.module.scss";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";
export default class Footer extends Component {
  render() {
    const list = {
      important: ["About Us", "Project", "Services", "Team", "Contact"],

      list: [
        "iOs Development",
        "Android Development",
        "Web Development",
        "Pay-Per-Click",
        "Social Media",
      ],

      service: ["3D Game Development", "2D Game Development"],

      contact: [
        {
          icon: <BsFillTelephoneFill />,
          li: "Phone (882) 569-7565",
        },
        {
          icon: <MdEmail />,
          li: "Email hello@neemo.com",
        },
        {
          icon: <ImLocation />,
          li: "Address INOVATION VALLEY Hill No :3 IT-SEZ , Rushikonda",
        },
      ],
    };

    return (
      <>
        <section className={styles.footer}>
          <section className={styles.about}>
            {/* About */}
            <ul>
              <li>
                <h1>About Us</h1>
              </li>
              <li>
                <p>
                  Let’s work together to create a changing experience that will
                  turn your brand from bland to buzz worthy. We would love to
                  hear from you whether you are curious about the features,
                </p>
              </li>
              <li className={styles.aboutIcons}>
                <span className={styles.linkedIn}>
                  <FaLinkedinIn />
                </span>
                <span className={styles.facebook}>
                  <FaFacebookF />
                </span>
                <span className={styles.twitter}>
                  <FaTwitter />
                </span>
                <span className={styles.insta}>
                  <FaInstagram />
                </span>
              </li>
            </ul>
          </section>

          {/* importatn */}
          <section className={styles.important}>
            <ul>
              <li className={styles.heading}>
                <h1>Important Link</h1>
              </li>
              <li>
                <ul>
                  {list.important.map((value) => {
                    return <li key={list.important.length}>{value}</li>;
                  })}
                </ul>
              </li>
            </ul>
          </section>
          <section className={styles.featured}>
            <ul>
              <li>
                <h1>Featured Services</h1>
              </li>
              <li>
                <ul>
                  {list.list.map((value) => {
                    return <li key={list.list.length}>{value}</li>;
                  })}
                </ul>
              </li>
            </ul>
          </section>
          <section className={styles.service}>
            <ul>
              <li>
                <h1>Featured Services</h1>
              </li>
              <li>
                <ul>
                  {list.service.map((value) => {
                    return <li key={list.service.map}>{value}</li>;
                  })}
                </ul>
              </li>
            </ul>
          </section>
          <section className={styles.contact}>
            <ul>
              <li>
                <h1>Contact</h1>
              </li>
              <li>
                <ul>
                  {list.contact.map((value) => {
                    return (
                      <li key={list.contact.map}>
                        <span style={{ color: "white", marginRight: "1rem" }}>
                          {value.icon}
                        </span>
                        <span>{value.li}</span>
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ul>
          </section>
        </section>
        <section className={styles.rights}>
          <ul>
            <li>
              <p>© 2022 AgumentikSoftware. All Rights Reserved by </p>
            </li>
            <li>
              <p>
                <span>Terms & ConditionsPrivacy </span>
                <span>|</span>
                <span>Policy</span>
              </p>
            </li>
          </ul>
        </section>
      </>
    );
  }
}
