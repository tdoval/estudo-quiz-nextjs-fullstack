import React from "react";
import QuestaoModel from "../model/questao";
import styles from "../styles/Questao.module.css";
import Enunciado from "./Enunciado";
import Resposta from "./Resposta";
import Temporizador from "./Temporizador";

const letras = [
  { valor: "A", cor: "#F2C866" },
  { valor: "B", cor: "#F266BA" },
  { valor: "C", cor: "#85D4F2" },
  { valor: "D", cor: "#BCE596" },
];

interface QuestaoProps {
  valor: QuestaoModel;
  tempoPraResposta?: number;
  respostaFornecida: (indice: number) => void;
  tempoEsgotado: () => void;
}

const Questao = (props: QuestaoProps) => {
  const questao = props.valor;

  function renderizarRespostas() {
    return questao.respostas.map((resposta, i) => {
      return (
        <Resposta
          key={i}
          valor={resposta}
          indice={i}
          letra={letras[i].valor}
          corFundoLetra={letras[i].cor}
          respostaFornecida={props.respostaFornecida}
        />
      );
    });
  }

  return (
    <div className={styles.questao}>
      <Enunciado texto={questao.enunciado} />
      <Temporizador
        duracao={props.tempoPraResposta ?? 10}
        tempoEsgotado={props.tempoEsgotado}
      />
      {renderizarRespostas()}
    </div>
  );
};

export default Questao;
