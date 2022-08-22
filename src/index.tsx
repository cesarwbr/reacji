import React from "react";
import "./index.css";
import url from "../assets/emoji_add.png";

const Reacji: React.FC = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <div className="container">
      <div className="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
        corrupti, nemo consequuntur incidunt qui aut est sint, optio quis
        provident earum et beatae quasi ab architecto illo dolorem in dolores?
      </div>
      <div className="icon">
        <img src={url} width="20" height="20" />
        {showMenu && (
          <div className="menu-container">
            <ul>
              <li>👍</li>
              <li>😄</li>
              <li>🎉</li>
              <li>❤️</li>
              <li>🚀</li>
              <li>👀</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reacji;
