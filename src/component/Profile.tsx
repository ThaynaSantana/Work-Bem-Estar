import React, { useState } from "react";
import { Link } from "react-router-dom";
import Emotion, { EmotionProps } from "./Emotion";

interface ProfileProps {
  currentEmotion?: string;
}

const Profile: React.FC<ProfileProps> = ({ currentEmotion }) => {
  const [showMenu, setShowMenu] = useState(true);
  const [buttonStyle, setButtonStyle] = useState("exit-button");

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
    switchStyleButton();
  };

  const switchStyleButton = () => {
    if (buttonStyle === "exit-button") {
      setButtonStyle("open-button");
    } else {
      setButtonStyle("exit-button");
    }
  };

  return (
    <>
      <div id="menu">
        <button className={buttonStyle} onClick={toggleMenu}>
          X
        </button>
      </div>
      {showMenu && (
        <div className="perfil">
          <div>
            <h3>Olá, Elis Menezes!</h3>
            <p>Educadora Senac</p>
            <div className="status">
              <h2>BARRA</h2>
              <Emotion status={currentEmotion ?? ""} />
            </div>
            <button className="btn btn-lg btn-info">
              <Link className="btn-perfil" to="/meditar">
                Respire!
              </Link>
            </button>
          </div>
          <img
            id="avatar"
            src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/afro_woman_female_person-256.png"
            alt="Avatar"
          />
        </div>
      )}
    </>
  );
};

export default Profile;
