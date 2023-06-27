import React from "react";

interface EmotionProps {
  status: string;
}

const Emotion: React.FC<EmotionProps> = ({ status }) => {
  enum emojis {
    bravo = "😡",
    triste = "😢",
    neutro = "😐",
    feliz = "😄",
    muitofeliz = "😆",
  }

  let emoji = emojis.neutro;

  switch (status) {
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
    default:
      emoji = emojis.feliz;
  }

  return <p>{emoji}</p>;
};

export default Emotion;
