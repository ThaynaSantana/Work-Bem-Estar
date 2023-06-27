import React, { useState } from "react";
import Emotion from "./Emotion";

interface EmotionMenuProps {
  onSelectEmotion: (emotion: string) => void;
}

const EmotionMenu: React.FC<EmotionMenuProps> = ({ onSelectEmotion }) => {
  const [selectedEmotion, setSelectedEmotion] = useState("neutro");

  const handleEmotionSelect = (emotion: string) => {
    setSelectedEmotion(emotion);
    onSelectEmotion(emotion);
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
