import React from "react";
import { Helmet } from "react-helmet";
import "../../assets/styles.css";
import { Navbar } from "../";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://www.w3schools.com/w3css/4/w3.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Helmet>
      <Navbar />
      <div className="w3-container">{children}</div>
    </React.Fragment>
  );
};

export default Layout;
