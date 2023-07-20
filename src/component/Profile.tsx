import React, { useState } from "react";
import { Link } from "react-router-dom";
import Emotion, { EmotionProps } from "./Emotion";

interface ProfileProps {
  currentEmotion?: string;
}

const Profile: React.FC<ProfileProps> = ({ currentEmotion }) => {
  const [showMenu, setShowMenu] = useState(true);
  const [buttonStyle, setButtonStyle] = useState("exit-button");
  const [meterInput, setMeterInput] = useState(3)

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

  const switchValueMeter = () => {
    switch (currentEmotion) {
      case "bravo":
        setMeterInput(1)
        break;
      case "triste":
        setMeterInput(2)
        break;
      case "neutro":
        setMeterInput(3)
        break;
      case "feliz":
        setMeterInput(4)
        break;
      case "muito feliz":
        setMeterInput(5)
        break;
      default:
        setMeterInput(5)      
    }
  }

   // Atualize o valor do meterInput quando o currentEmotion for alterado
   React.useEffect(() => {
    switchValueMeter();
  }, [currentEmotion]);

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
              <meter min="1" max="5" value={meterInput}></meter>
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
