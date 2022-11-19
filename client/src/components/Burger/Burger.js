import React from "react";
import "./Burger.css";
import { slide as Menu } from "react-burger-menu";

export default function Burger() {
  return (
    <Menu className="my-menu" width={"70vw"} isOpen={false} noOverlay right>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/">
        Skills
      </a>
      <a className="menu-item" href="/meals">
        Meals
      </a>
      <a className="menu-item" href="/involved">
        Get Involved
      </a>
    </Menu>
  );
}
