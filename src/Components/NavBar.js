import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/NavBar.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const onClickHambergBtn = e => {
    e.preventDefault();

    setOpen(!open);
  };

  return (
    <div className="root">
      <div className="container">
        <div className="logo">
          <Link to="/">Logo</Link>
        </div>
        <div className="nav-bar">
          <ul className={open ? "open" : "close"}>
            <li>
              <a href={"/changetextsize"}>Change Text Size</a>
            </li>
            <li>
              <a href={"/greeter"}>Greeter</a>
            </li>
            <li>
              <a href={"/piechart"}>PieChart</a>
            </li>
            <li>
              <a href={"/profile"}>Profile</a>
            </li>
          </ul>
        </div>
        <button
          className={open ? "button btn-open" : "button"}
          onClick={onClickHambergBtn}
        >
          <i className="fa fa-bars fa-2x"></i>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
