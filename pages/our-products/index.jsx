import React, { Component } from "react";
import OurProduct from "../../components/ProductComp/OurProduct";
import Explore from "../../components/AboutComp/Explore";
import AboutAds from "../../components/AboutComp/AboutAds";
export default class index extends Component {
  render() {
    return (
      <section>
        <OurProduct />
        <Explore />
        <AboutAds />
      </section>
    );
  }
}
