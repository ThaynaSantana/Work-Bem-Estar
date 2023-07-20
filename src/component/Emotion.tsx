import React, { useContext } from "react";
import AppContext from "../context/AppContext";

export interface EmotionProps {
  status: string;
}

const Emotion: React.FC<EmotionProps> = ({ status }) => {
  const {currentEmotion} = useContext(AppContext);

  enum emojis {
    bravo = "😡",
    triste = "😢",
    neutro = "😐",
    feliz = "😄",
    muitofeliz = "😆",
  }

  let emoji = currentEmotion;

  switch (currentEmotion) {
    case "bravo":
      emoji = emojis.bravo;
      break;
    case "triste":
      emoji = emojis.triste;
      break;
    case "neutro":
      emoji = emojis.neutro;
      break;
    case "feliz":
      emoji = emojis.feliz;
      break;
    case "muito feliz":
      emoji = emojis.muitofeliz;
      break;
  }

  return <p id="emoji">{emoji}</p>;
};

export default Emotion;
