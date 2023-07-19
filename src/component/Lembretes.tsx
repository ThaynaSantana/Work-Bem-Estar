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

const Lembretes = () => {
  return (
    <>
      <div className="lembretes">
        <h2>Lembretes</h2>
        <div>
          <h2>💧Beba Agua 14:00</h2>
          <button
            className="btn btn-primary"
            onClick={() => actionNotify("Beba Agua! 💧")}
          >
            Confirmar
          </button>
        </div>
        <div>
          <h2>🧘‍♀️Medite 12:05</h2>
          <button
            className="btn btn-primary"
            onClick={() => actionNotify("Hora de Meditar! 🧘‍♀️")}
          >
            Confirmar
          </button>
        </div>
        <div>
          <h2>🥘Lembrete de Almoço</h2>
          <button
            className="btn btn-primary"
            onClick={() => actionNotify("Almoçar! daqui a 10min 🥘")}
          >
            Confirmar
          </button>
        </div>
      </div>
    </>
  );
};

export default Lembretes;
