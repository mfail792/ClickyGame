import React from "react";
import "./style.css";

function Wrapper(props) {
    return <dv className="wrapper">{props.children}</dv>
}

export default Wrapper;