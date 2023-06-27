import React, { useState, useEffect } from "react";

const Meditar: React.FC = () => {
  const [showInstructions, setShowInstructions] = useState(true);
  const [showCountdown, setShowCountdown] = useState(false);
  const [countdown, setCountdown] = useState(15);

  useEffect(() => {
    let timer;

    if (showCountdown && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else if (showCountdown && countdown === 0) {
      setShowInstructions(true);
      setShowCountdown(false);
      setCountdown(15);
    }

    return () => clearTimeout(timer);
  }, [showCountdown, countdown]);

  const startBreathing = () => {
    setShowInstructions(false);
    setShowCountdown(true);
    setCountdown(15);
  };

  useEffect(() => {
    if (!showInstructions && !showCountdown) {
      const timeout = setTimeout(() => {
        setShowInstructions(true);
      }, 15000);

      return () => clearTimeout(timeout);
    }
  }, [showInstructions, showCountdown]);



  return (
    <div>
      {showInstructions && (
        <div className="meditar">
          <img className="img-fluid"
            src="https://cdn-icons-png.flaticon.com/512/3048/3048374.png"
            alt="Imagem Relaxante"
          />
          <p>Clique no botão "Vamos começar" para iniciar a respiração.</p>
          <button className="btn btn-primary btn-lg" onClick={startBreathing}>Vamos começar</button>
        </div>
      )}
      {showCountdown && (
        <div className="meditar">
          <div>{countdown}</div> {/* Contador regressivo de 15 segundos */}
          <p>Inspire...</p>
        </div>
      )}
      {!showInstructions && !showCountdown && (
        <div className="meditar">
          <div>{countdown}</div> {/* Contador regressivo de 15 segundos */}
          <p>Respire...</p>
        </div>
      )}
    </div>
  );
  }
export default Meditar;