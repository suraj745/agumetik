import React, { Component } from "react";
import styles from "../../styles/WebdevStyle/faq.module.scss";
import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

export default class FAQ extends Component {
  render() {
    const list = [
      {
        key: "1",
        heading: "What harsh truths do you prefer to ignore?",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
      },

      {
        key: "2",
        heading: "Is free will real or just an illusion?",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
      },
      {
        key: "3",
        heading: "Does the price go up as my team gets larger?",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
      },

      {
        key: "4",
        heading: "How long does it take for equipment to be delivered?",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
      },

      {
        key: "5",
        heading: "I’m a developer, how do I become a Glass Partner?",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
      },
    ];
    return (
      <section className={styles.faqContainer}>
        <section className={styles.faqContent}>
          <section>
            <ul className={styles.upper}>
              <li className={styles.title}>
                <h5>FAQ</h5>
              </li>
              <li className={styles.heading}>
                <h1>Website Development</h1>
              </li>
              <li className={styles.design}>
                <span></span>
                <span></span>
              </li>
            </ul>
          </section>
          <section className={styles.bottom}>
            <section className={styles.faqLeft}>
              <Accordion allowZeroExpanded>
                {list.map((value) => {
                  return (
                    <AccordionItem
                      key={value.key}
                      className={styles.AccordionItem}
                    >
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          {value.heading}
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>{value.text}</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </section>
            <section className={styles.faqRight}>
              <Image
                src={
                  "https://agumentik-software.vercel.app/images/faq-image.png"
                }
                width={550}
                height={450}
                alt="img"
              />
            </section>
          </section>
        </section>
      </section>
    );
  }
}
