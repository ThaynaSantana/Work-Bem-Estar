import React from "react";

interface MensagemProps {
  onClose: () => void;
}

const Mensagem: React.FC<MensagemProps> = ({ onClose }) => {
  return (
    <div className="popup-container">
      <div className="popup-content">
        <p>Relatório de Saúde Mental da Funcionária<br></br><br></br>

Período: 03/07/2023 a 24/07/2023<br></br><br></br>

Durante o período analisado, a funcionária apresentou uma série de emoções, variando de 😡 (raiva) e 😢 (tristeza) a 😄 (alegria) e 😆 (riso). Essa diversidade de emoções pode indicar que a funcionária está passando por diferentes situações e desafios emocionais em seu ambiente de trabalho.<br></br><br></br>

No entanto, é notável que as segundas-feiras têm sido mais desafiadoras emocionalmente para a funcionária, com um aumento nas emoções negativas, como raiva e tristeza. Isso pode ser indicativo de possíveis níveis de estresse ou ansiedade que a trabalhadora pode estar enfrentando no início da semana.<br></br><br></br>

Para melhorar sua saúde mental e bem-estar emocional, recomendamos que a funcionária considere a prática de meditação. A meditação é uma técnica eficaz para reduzir o estresse, aumentar a concentração e promover o equilíbrio emocional.<br></br><br></br>

Em nosso site, oferecemos sessões de meditação guiada, especialmente projetadas para ajudar a aliviar o estresse e promover a tranquilidade mental. Recomendamos que a funcionária explore essas opções e reserve alguns minutos do seu dia para meditar regularmente. A prática consistente de meditação pode trazer benefícios significativos para a saúde mental, incluindo maior clareza mental, maior resiliência emocional e uma sensação geral de bem-estar.<br></br><br></br>

Lembramos que, além da meditação, é essencial que a funcionária cuide de si mesma, mantendo uma rotina equilibrada, reservando tempo para atividades relaxantes e mantendo uma comunicação aberta com seus colegas e superiores para lidar com quaisquer desafios ou preocupações no ambiente de trabalho.<br></br><br></br>

Nossa empresa se preocupa com a saúde mental de seus funcionários, e estamos comprometidos em fornecer recursos e suporte para promover o bem-estar emocional de todos os colaboradores.</p>
        <button className="btn btn-lg btn-danger" onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default Mensagem;
