import React, { useState } from "react";
import { Link } from "react-router-dom";
import Emotion from "./Emotion";

const Profile: React.FC = () => {
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
            src="https://cdn-icons-png.flaticon.com/512/2920/2920072.png"
            alt="Avatar"
          />
          <h2>Elis Menezes</h2>
          <h3>Professora Senac</h3>
          <div className="status">
            <h2>Status:</h2>
            <Emotion status="feliz" />
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
