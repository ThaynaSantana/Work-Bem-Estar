import React, { useState, useEffect } from "react";

const Meditar: React.FC = () => {
  const [steps, setSteps] = useState<string[]>([]);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if(steps.length > 0) {
      setCountdown(15);
    }
    
  }, [countdown]);

  const startBreathing = () => {
    setCountdown(15);
    setSteps(['Respirar...', 'Inspirar...','Respirar...'])
  };

  useEffect(() => {
    const newSteps = steps.slice(1)
    if (steps.length > 0) {
      const timeout = setTimeout(() => {
        setSteps(newSteps)
      }, 15000);

      return () => clearTimeout(timeout);
    }
  }, [steps]);


  return (
    <div>
      {steps.length == 0 && (
        <div className="meditar">
          <img className="img-fluid"
            src="https://cdn-icons-png.flaticon.com/512/3048/3048374.png"
            alt="Imagem Relaxante"
          />
          <p>Clique no botão "Vamos começar" para iniciar a respiração.</p>
          <button className="btn btn-primary btn-lg" onClick={startBreathing}>Vamos começar</button>
        </div>
      )}
      {steps.length !== 0 && (
        <div className="meditar">
          <div>{countdown}</div> {/* Contador regressivo de 15 segundos */}
          <p>{steps[0]}</p>
        </div>
      )}
    </div>
  );
  }
export default Meditar;