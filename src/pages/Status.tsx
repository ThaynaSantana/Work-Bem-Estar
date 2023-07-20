import React, { useState} from "react";
import EmotionMenu from "../component/EmotionMenu";
import Profile from "../component/Profile";
import EmotionCalendario from "../component/EmotionCalendario";
import Mensagem from "../component/Mensagem";

const Status: React.FC = () => {
  const [currentEmotion, setCurrentEmotion] = useState<string>("");
  const [mostrarMensagem, setMostrarMensagem] = useState(false);

  const handleEmotionSelect = (emotion: string) => {
    setCurrentEmotion(emotion);
  };

  const handleClickBotao = () => {
    setMostrarMensagem(true);
  };

  const handleCloseMensagem = () => {
    setMostrarMensagem(false);
  };

  return (
    <div className="status-page">
      <Profile currentEmotion={currentEmotion} />
      <h1 id="title-status-page">Como você está se sentindo?</h1>
      <EmotionMenu onSelectEmotion={handleEmotionSelect} />
      <h1>Calendario de suas Emoções</h1>
      <button onClick={handleClickBotao} className="btn btn-lg btn-warning">Resultado</button>
      {mostrarMensagem && (
        <Mensagem onClose={handleCloseMensagem} />
      )}
      <EmotionCalendario />
    </div>
  );
};

export default Status;
