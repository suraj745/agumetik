import React, { Component } from "react";
import TechCarousel from "../../components/ServiceComp/TechCarousel";
import TechStack from "../../components/ServiceComp/TechStack";
import FAQ from "../../components/ServiceComp/FAQ";
import Webdev from "../../components/ServiceComp/Webdev";
import Testinomal from "../../components/Page/Testinomal";
import Blog from "../../components/Page/Blog";
import Done from "../../components/ServiceComp/Done";
export default class index extends Component {
  render() {
    return (
      <section>
        <Webdev />
        <TechCarousel />
        <TechStack />
        <FAQ />
        <Done />
        <Testinomal />
      </section>
    );
  }
}
