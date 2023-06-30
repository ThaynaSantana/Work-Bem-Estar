import React, { useState } from "react";
import Calendario from "../component/Calendar";
import EmotionMenu from "../component/EmotionMenu";
import Profile from "../component/Profile";

const Status: React.FC = () => {
  const [currentEmotion, setCurrentEmotion] = useState<string>("");

  const handleEmotionSelect = (emotion: string) => {
    setCurrentEmotion(emotion);
  };

  return (
    <div className="status-page">
      <h1 id="title-status-page">Como você está se sentindo hoje?</h1>
      <EmotionMenu onSelectEmotion={handleEmotionSelect} />
      <Profile currentEmotion={currentEmotion} />
    </div>
  );
};

export default Status;
