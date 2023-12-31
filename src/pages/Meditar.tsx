import React, { useState, useEffect } from "react";
import Profile from "../component/Profile";

const Meditar: React.FC = () => {
  const [steps, setSteps] = useState<string[]>([]);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (steps.length > 0) {
      setCountdown(5);
    }
  }, [countdown]);

  const startBreathing = () => {
    setCountdown(5);
    setSteps([ "Inspirar...", "Expirar...", "Inspirar...", "Expirar...", "Inspirar...", "Expirar..."]);
  };

  useEffect(() => {
    const newSteps = steps.slice(1);
    if (steps.length > 0) {
      const timeout = setTimeout(() => {
        setSteps(newSteps);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [steps]);

  return (
    <div>
      <Profile />
      {steps.length == 0 && (
        <div className="meditar">
          <img
            id="icon-meditar"
            className="img-fluid"
            src="https://cdn-icons-png.flaticon.com/512/3048/3048374.png"
            alt="Imagem Relaxante"
          />
          <p>Clique no botão "Vamos começar" para iniciar a respiração.</p>
          <button className="btn btn-primary btn-lg" onClick={startBreathing}>
            Vamos começar
          </button>
        </div>
      )}
      {steps.length !== 0 && (
        <div className="meditar">
          <div className="countdown">{countdown}</div>{" "}
          {/* Contador regressivo de 15 segundos */}
          <p>{steps[0]}</p>
        </div>
      )}
    </div>
  );
};
export default Meditar;
