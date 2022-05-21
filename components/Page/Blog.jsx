import React, { Component } from "react";
import styles from "../../styles/Blog.module.scss";
import BlogCard from "../BlogCard";

export default class Blog extends Component {
  render() {
    const blogDetail = [
      {
        imageUrl: "/images/project/1.jpg",
        heading: "Startup Marketing Solution for Business Owner",
        date: "02",
      },

      {
        imageUrl: "/images/project/2.jpg",
        heading: "Startup Marketing Solution for Business Owner",
        date: "03",
      },

      {
        imageUrl: "/images/project/3.jpg",
        heading: "Startup Marketing Solution for Business Owner",
        date: "03",
      },
    ];
    return (
      <ul className={styles.blog}>
        <li className={styles.title}>
          <h5>Blog</h5>
        </li>
        <li className={styles.heading}>
          <h1>Read Our Latest Project</h1>
        </li>
        <li className={styles.design}>
          <span></span>
          <span></span>
        </li>
        <li className={styles.cards}>
          {blogDetail.map((value) => {
            return (
              <BlogCard
                key={blogDetail.length}
                cardHeading={value.heading}
                imageUrl={value.imageUrl}
                cardDate={value.date}
              />
            );
          })}
        </li>
      </ul>
    );
  }
}
