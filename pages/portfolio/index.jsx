import React, { Component } from "react";
import PortIntro from "../../components/portfolio/PortIntro";
import Done from "../../components/ServiceComp/Done";
import Client from "../../components/Client";
import Consultation from "../../components/portfolio/Consultation";
import Testinomial from "../../components/Page/Testinomal";
import Identity from "../../components/portfolio/Identity";
import Get from "../../components/portfolio/Get";
import Ads from "../../components/Ads";
export default class index extends Component {
  render() {
    return (
      <div>
        <PortIntro />
        <Done />
        <Client />
        <Consultation />
        <Testinomial />
        <Identity />
        <Get />
        <Ads />
      </div>
    );
  }
}
