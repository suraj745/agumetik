import React, { Component } from "react";
import styles from "../styles/Navbar.module.scss";
import { AiOutlineDown } from "react-icons/ai";
export default class DropDown extends Component {
  constructor() {
    super();
    this.state = {
      drop: false,
    };
  }

  render() {
    console.log(this.state);
    const { menuName, list } = this.props;
    return (
      <section>
        <ul className={styles.dropDownContainer}>
          <li>
            <section
              className={styles.box}
              onClick={() => this.setState({ drop: !this.state.drop })}
            >
              <a className={styles.dropName}>{menuName}</a>
              <AiOutlineDown fontSize={"1.2rem"} />
            </section>

            <ul className={styles.dropContainer}>{list}</ul>
          </li>
        </ul>
      </section>
    );
  }
}
