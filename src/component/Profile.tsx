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
          <img
            id="avatar"
            src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/afro_woman_female_person-256.png"
            //src="https://cdn-icons-png.flaticon.com/512/2920/2920072.png"
            alt="Avatar"
          />
          <h2>Elis Menezes</h2>
          <h3>Professora Senac</h3>
          <div className="status">
            <h2>Status:</h2>
            <Emotion status={currentEmotion ?? ''} />
          </div>
          <button className="btn btn-lg btn-info">
            <Link className="btn-perfil" to="/meditar">
              Respire!
            </Link>
          </button>
        </div>
      )}
    </>
  );
};

export default Profile;
