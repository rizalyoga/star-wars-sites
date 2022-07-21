import React, { useEffect } from "react";
import NProgress from "nprogress";
import { useRouter } from "next/router";

// component
import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

// styles
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    NProgress.configure({ showSpinner: false });
    router.events.on("routeChangeStart", () => {
      NProgress.start();
      // console.log("start page move");
    });

    router.events.on("routeChangeComplete", () => {
      NProgress.done();
      // console.log("complete page move");
    });

    router.events.on("routeChangeError", () => {
      NProgress.done();
    });

    return () => {
      NProgress.done();
    };
  }, []);

  return (
    <>
      <Head>
        <title>Star Wars Site</title>
        <link rel="shortcut icon" href="/star-wars.ico" type="image/x-icon" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
