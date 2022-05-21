import React, { Component } from "react";
import styles from "../../styles/BlogStyle/blogstyle.module.scss";
import BlogCard from "../BlogCard";
export default class BlogGrid extends Component {
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

      {
        imageUrl: "/images/project/3.jpg",
        heading: "Startup Marketing Solution for Business Owner",
        date: "04",
      },

      {
        imageUrl: "/images/project/1.jpg",
        heading: "Startup Marketing Solution for Business Owner",
        date: "05",
      },

      {
        imageUrl: "/images/project/2.jpg",
        heading: "Startup Marketing Solution for Business Owner",
        date: "06",
      },
    ];

    const page = [1, 2, 3, 4, 5, 6];
    return (
      <section className={styles.blogGridContainer}>
        <section className={styles.blogGridContent}>
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
        </section>
      </section>
    );
  }
}
