import React, { useState } from "react";
import Calendario from "../component/Calendario";
import EmotionMenu from "../component/EmotionMenu";
import Profile from '../component/Profile'

const Status: React.FC = () => {
  const [currentEmotion, setCurrentEmotion] = useState<string>("");

  const handleEmotionSelect = (emotion: string) => {
    setCurrentEmotion(emotion);
  };

  return (
    <div>
      <h1>Como você está se sentindo hoje?</h1>
      <EmotionMenu onSelectEmotion={handleEmotionSelect} />
      <Calendario />
      <Profile />
    </div>
  );
};

export default Status;
