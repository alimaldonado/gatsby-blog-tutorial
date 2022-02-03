import { Link } from "gatsby";
import React, { useCallback, useEffect, useState } from "react";
import { globalHistory } from "@reach/router";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleBarState = useCallback(() => {
    setOpen(!open);
  }, [open]);

  useEffect(() => {
    return () => {
      globalHistory.listen(({ action }) => {
        if (action === "PUSH") handleBarState();
      });
    };
  }, [handleBarState]);

  const largeScreenList = (
    <nav className="w3-bar w3-container w3-black">
      <ul className="w3-ul w3-hide-medium w3-hide-small">
        <li className="w3-bar-item w3-left">
          <Link to="/" className="w3-button w3-wide">
            LOGO
          </Link>
        </li>
        <li className="w3-bar-item w3-right">
          <Link to="/" className="w3-button">
            Home
          </Link>
        </li>
        <li className="w3-bar-item w3-right">
          <Link to="/about" className="w3-button">
            About
          </Link>
        </li>
        <li className="w3-bar-item w3-right">
          <Link to="/contact" className="w3-button">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );

  const smallScreenList = (
    <React.Fragment>
      <div className="w3-hide-large w3-black w3-container">
        <Link to="/" className="w3-button w3-wide w3-left">
          LOGO
        </Link>
        <button
          onClick={handleBarState}
          className="w3-button w3-text-white w3-right"
        >
          {open ? <i className="fa fa-remove" /> : <i className="fa fa-bars" />}
        </button>
      </div>
      <nav
        className={`w3-sidebar w3-hide-large w3-black w3-animate-left w3-hide-large ${
          open ? "sidebar-show" : "sidebar-hide"
        }`}
      >
        <ul className="w3-ul w3-bar-block">
          <li className="w3-bar-item w3-right">
            <Link to="/" className="w3-button">
              Home
            </Link>
          </li>
          <li className="w3-bar-item w3-right">
            <Link to="/about" className="w3-button">
              About
            </Link>
          </li>
          <li className="w3-bar-item w3-right">
            <Link to="/contact" className="w3-button">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <div className="w3-top">
        {largeScreenList}
        {smallScreenList}
      </div>
    </React.Fragment>
  );
};

export default Navbar;
