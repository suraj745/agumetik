import React, { Component } from "react";
import SingleService from "../../components/singleService/SingleService";
import Second from "../../components/singleService/Second";
export default class index extends Component {
  render() {
    return (
      <div>
        <SingleService />

        <Second />
      </div>
    );
  }
}
