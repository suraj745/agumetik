import React, { Component } from "react";
import About from "../../components/AboutComp/About";
import Mission from "../../components/AboutComp/Mission";
import Vision from "../../components/AboutComp/Vision";
import Group from "../../components/AboutComp/Group";
import Team from "../../components/AboutComp/Team";
import Awards from "../../components/Awards";
import Explore from "../../components/AboutComp/Explore";
import Partner from "../../components/Partner";
import AboutAds from "../../components/AboutComp/AboutAds";
export default class index extends Component {
  render() {
    return (
      <div>
        <About />
        <Mission />
        <Vision />
        <Group />
        <Team />
        <Awards />
        <Explore />
        <Partner />
        <AboutAds />
      </div>
    );
  }
}
