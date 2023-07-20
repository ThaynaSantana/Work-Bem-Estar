import React, { useContext } from "react";
import { EmotionProps } from "./Emotion";
import AppContext from "../context/AppContext";

export interface EmotionMenuProps {
  onSelectEmotion: (emotion: EmotionProps["status"]) => void;
}

const EmotionMenu: React.FC<EmotionMenuProps> = ({ onSelectEmotion }) => {
  const { setCurrentEmotion } = useContext(AppContext);

  const handleEmotionSelect = (emotion: EmotionProps["status"]) => {
    onSelectEmotion(emotion);
    setCurrentEmotion(emotion);
  };

  return (
    <div className="emotion-menu">
      <div className="emoji">
        <button onClick={() => handleEmotionSelect("bravo")}>😡</button>
        <label>Raiva</label>
      </div>
      <div className="emoji">
        <button onClick={() => handleEmotionSelect("triste")}>😢</button>
        <label>Mal</label>
      </div>
      <div className="emoji">
        <button onClick={() => handleEmotionSelect("neutro")}>😐</button>
        <label>Mais ou Menos</label>
      </div>
      <div className="emoji">
        <button onClick={() => handleEmotionSelect("feliz")}>😄</button>
        <label>Bem</label>
      </div>
      <div className="emoji">
        <button onClick={() => handleEmotionSelect("muito feliz")}>😆</button>
        <label>Muito bem!</label>
      </div>
    </div>
  );
};

export default EmotionMenu;
