import React from "react";
import "./index.css";
import url from "../assets/emoji_add.png";

export default function Reacji() {
  return (
    <div className="container">
      <div className="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
        corrupti, nemo consequuntur incidunt qui aut est sint, optio quis
        provident earum et beatae quasi ab architecto illo dolorem in dolores?
      </div>
      <img src={url} width="20" height="20" />
    </div>
  );
}
