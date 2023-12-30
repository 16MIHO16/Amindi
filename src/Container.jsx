import React from "react";
import "./Container.css";

function Container(props) {
  return (
    <div className="info">
      <p>University name: {props.name}</p>
      <p>Country: {props.countryName}</p>
      <p>
        Web Page:{" "}
        <a target="blank" href={props.web}>
          Click here
        </a>
      </p>
    </div>
  );
}

export default Container;
