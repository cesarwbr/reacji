import React, { useRef, useState } from "react";
import "./index.css";
import url from "../assets/emoji_add.png";

const Reacji: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [options, setOptions] = useState<{ [key: string]: number }>({
    "😄": 1,
  });
  const userChoose = useRef<Set<string>>(new Set());

  function handleOpenMenu() {
    setShowMenu((showMenu) => !showMenu);
  }

  function handleChooseEmoji(emoji: string) {
    const userChosen = userChoose.current.has(emoji);

    setOptions((options) => {
      let count = 1;

      if (options[emoji]) {
        count = options[emoji] + (userChosen ? -1 : 1);
      }

      if (count) {
        return {
          ...options,
          [emoji]: count,
        };
      } else {
        const nextOptions = { ...options };
        delete nextOptions[emoji];

        return nextOptions;
      }
    });
    setShowMenu(false);

    if (!userChosen) {
      userChoose.current.add(emoji);
    } else {
      userChoose.current.delete(emoji);
    }
  }

  const emojis = ["👍", "😄", "🎉", "❤️", "🚀", "👀"];

  return (
    <div className="container">
      <div className="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
        corrupti, nemo consequuntur incidunt qui aut est sint, optio quis
        provident earum et beatae quasi ab architecto illo dolorem in dolores?
      </div>
      <div className="reacji-container">
        <ul className="reacji-container__choose">
          {Object.keys(options).map((key) => {
            return (
              <li key={key} onClick={() => handleChooseEmoji(key)}>
                {key} {options[key]}
              </li>
            );
          })}
        </ul>
        <div className="icon">
          {showMenu && (
            <div className="menu-container">
              <ul>
                {emojis.map((emoji) => (
                  <li key={emoji} onClick={() => handleChooseEmoji(emoji)}>
                    {emoji}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <img src={url} width="20" height="20" onClick={handleOpenMenu} />
        </div>
      </div>
    </div>
  );
};

export default Reacji;
