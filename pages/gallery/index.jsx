import React, { Component } from "react";
import GalleryPage from "../../components/Gallery/GalleryPage";
import AboutAds from "../../components/AboutComp/AboutAds";
export default class index extends Component {
  render() {
    return (
      <div>
        <GalleryPage />
        <AboutAds />
      </div>
    );
  }
}
