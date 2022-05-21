import "../styles/globals.scss";
import "animate.css";
import Layout from "../Layout/Layout";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (
    <>
      {!loading ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default MyApp;
