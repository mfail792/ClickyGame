import React from "react";
import "./style.css";

const Navbar = props => (
    <nav>
        <ul>

            <li id="cur-scor"><strong>Current Score: {props.currentScore}</strong></li>

            <li id="top-scor"><strong>Top Score: {props.topScore}</strong></li>
        </ul>
    </nav>

);

export default Navbar;