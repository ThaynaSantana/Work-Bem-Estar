import React, { useContext } from "react";
import { EmotionProps } from "./Emotion";
import AppContext from "../context/AppContext";

export interface EmotionMenuProps {
  onSelectEmotion: (emotion: EmotionProps["status"]) => void;
}

const EmotionMenu: React.FC<EmotionMenuProps> = ({ onSelectEmotion }) => {
  const {setCurrentEmotion} = useContext(AppContext);

  const handleEmotionSelect = (emotion: EmotionProps["status"]) => {
    onSelectEmotion(emotion);
    setCurrentEmotion(emotion);
    console.log(emotion)
  };

  return (
    <div className="emotion-menu">
      <button onClick={() => handleEmotionSelect("bravo")}>😡</button>
      <button onClick={() => handleEmotionSelect("triste")}>😢</button>
      <button onClick={() => handleEmotionSelect("neutro")}>😐</button>
      <button onClick={() => handleEmotionSelect("feliz")}>😄</button>
      <button onClick={() => handleEmotionSelect("muito feliz")}>😆</button>
    </div>
  );
};

export default EmotionMenu;
