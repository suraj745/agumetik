import React, { Component } from "react";
import Inquiry from "../components/Inquiry";
import Home from "../components/Home";
import Blog from "../components/Page/Blog";
import QuickService from "../components/QuickService";
import Partner from "../components/Partner";
import AboutUs from "../components/AboutUs";
import Awards from "../components/Awards";
import Services from "../components/Services";
import Client from "../components/Client";
import Boosting from "../components/Boosting";
import Testinomal from "../components/Page/Testinomal";
import Ads from "../components/Ads";
export default class index extends Component {
  render() {
    return (
      <div>
        <Home />
        <QuickService />
        <Partner />
        <AboutUs />
        <Awards />
        <Services />
        <Client />
        <Inquiry />
        <Boosting />
        <Testinomal />
        <Blog />
        <Ads />
      </div>
    );
  }
}
