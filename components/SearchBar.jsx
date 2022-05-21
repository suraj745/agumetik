import React, { Component } from "react";
import styles from "../styles/SearchBar.module.scss";
import { AiOutlineSearch } from "react-icons/ai";
export default class SearchBar extends Component {
  render() {
    return (
      <div className={styles.SearchBar}>
        <div className={styles.SearchBarPack}>
          <input type="text" name="searchBar" placeholder="Search" />
          <AiOutlineSearch fontSize={"3rem"} />
        </div>
      </div>
    );
  }
}
