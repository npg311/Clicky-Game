import React from "react";
import NavMessage from "../NavMessage";
import "./style.css";


function Nav(props) {
  return (
    <nav className="navbar">
      <ul>
        <li className="brand">
          <a href="/">Clicky Game</a>
        </li>
        <NavMessage score={props.score} highScore={props.highScore} />
        <li>
          Score: {props.score} | High Score: {props.highScore}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
