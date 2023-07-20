import React, { useState, useEffect } from "react";
import LembreteItem from "./LembreteItem";
import addNotification from "react-push-notification";

const actionNotify = (msg: string) => {
  addNotification({
    title: "Work Bem-estar",
    message: msg,
    duration: 4000,
    icon: "logo.png",
    native: true,
  });
};

const LEMBRETES_KEY = "lembretes";

const Lembretes = () => {
  const [tempLembrete, setTempLembrete] = useState<{ title: string; text: string }>({ title: "", text: "" });
  const [lembretes, setLembretes] = useState<{ title: string; text: string }[]>([]);

  useEffect(() => {
    const storedLembretes = localStorage.getItem(LEMBRETES_KEY);
    if (storedLembretes) {
      setLembretes(JSON.parse(storedLembretes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LEMBRETES_KEY, JSON.stringify(lembretes));
  }, [lembretes]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTempLembrete((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddLembrete = () => {
    setLembretes([...lembretes, tempLembrete]);
    setTempLembrete({ title: "", text: "" });
  };

  const handleDeleteLembrete = (index: number) => {
    setLembretes((prevLembretes) => {
      const updatedLembretes = [...prevLembretes];
      updatedLembretes.splice(index, 1);
      return updatedLembretes;
    });
  };

  return (
    <>
      <div className="lembretes">
        <h2><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/></svg> Lembretes</h2>
        <label>Permita no Pop-up as <b>notificações</b> para que tudo ocorra com exito.</label>
        {lembretes.map((lembrete, index) => (
          <LembreteItem
            key={index}
            title={lembrete.title}
            text={lembrete.text}
            onDelete={() => handleDeleteLembrete(index)}
          />
        ))}
        <div className="menu">
          <input
            name="title"
            value={tempLembrete.title}
            onChange={handleInputChange}
            placeholder="Escreva o título do lembrete..."
            className="form-control"
            type="text"
          />
          <input
            name="text"
            value={tempLembrete.text}
            onChange={handleInputChange}
            placeholder="Escreva a mensagem da notificação..."
            className="form-control"
            type="text"
          />
          <button className="btn btn-lg btn-outline-info" onClick={handleAddLembrete}>
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default Lembretes;
