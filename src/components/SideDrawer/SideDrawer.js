import React from "react";

import "./SideDrawer.css";

const sideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) drawerClasses = "side-drawer open";

  return (
    <nav className={drawerClasses}>
      <br /> <br />
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about" target="_blank" rel="noopener noreferrer">
            About Us
          </a>
        </li>

        <li>
          <a href="#opportunities">Opportunities</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
