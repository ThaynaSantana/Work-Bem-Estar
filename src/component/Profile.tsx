import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Emotion from "./Emotion";

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
    setButtonStyle(prevStyle => (prevStyle === "exit-button" ? "open-button" : "exit-button"));
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
              <strong>Status:</strong>
              <Emotion status={currentEmotion ?? ""} />
            </div>
            <Link className="btn-perfil" to="/meditar">
              <button
                className="btn btn-primary"
                ata-mdb-toggle="animation"
                data-mdb-animation-reset="true"
                data-mdb-animation="pulse"
                data-mdb-animation-start="onHover"
              >
                Respire!
              </button>
            </Link>
          </div>
          <img
            id="avatar"
            src="https://i.ibb.co/RvfWQJY/unnamed.jpg"
            alt="Avatar"
          />
        </div>
      )}
    </>
  );
};

export default Profile;
