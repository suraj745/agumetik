import React from "react";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import { useState, useEffect } from "react";
import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";
import { AnimatePresence } from "framer-motion";
import { useMediaQuery } from "beautiful-react-hooks";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const [cross, setCross] = useState(false);
  const [mobMenu, setMobMenu] = useState(false);

  // useEffect(() => {
  //   cross ? disableBodyScroll(document) : enableBodyScroll(document);
  // }, [cross]);

  // useEffect(() => {
  //   mobMenu
  //     ? disableBodyScroll(document.querySelector("body"))
  //     : enableBodyScroll(document.querySelector("body"));
  // }, [mobMenu]);

  const mobile = useMediaQuery("(max-width:1280px)");

  const router = useRouter();
  console.log(router);
  return (
    <div>
      {mobMenu && mobile && (
        <MobileMenu menuClose={() => setMobMenu(!mobMenu)} />
      )}
      <AnimatePresence>
        {cross && <Modal close={() => setCross(!cross)} />}
      </AnimatePresence>

      <nav>
        {router.route == "/carrer" ? (
          ""
        ) : (
          <Navbar
            modalActive={() => setCross(!cross)}
            mobileNav={() => {
              setMobMenu(!mobMenu);
            }}
          />
        )}
      </nav>
      <main>{children}</main>
      <footer>{router.route == "/carrer" ? "" : <Footer />}</footer>
    </div>
  );
};

export default Layout;
