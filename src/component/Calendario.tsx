import React, { useState } from "react";

const Calendario: React.FC = () => {
  const [emotionEntries, setEmotionEntries] = useState<{ [date: string]: string }>({});

  const handleEmotionSelect = (emotion: string) => {
    const date = new Date().toISOString().split("T")[0];
    setEmotionEntries((prevEntries) => ({
      ...prevEntries,
      [date]: emotion,
    }));
  };

  return (
    <div>
      <h2>Calendário de Emoções</h2>
      <div className="Calendario">
        {/* Renderize os dias do calendário aqui */}
      </div>
    </div>
  );
};

export default Calendario;
