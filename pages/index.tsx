import { useState } from "react";
import Questao from "../components/Questao";
import QuestaoModel from "../model/questao";
import RespostaModel from "../model/resposta";

const questaoMock = new QuestaoModel(1, "Melhor Cor?", [
  RespostaModel.errada("Verde"),
  RespostaModel.errada("Vermelho"),
  RespostaModel.errada("Azul"),
  RespostaModel.certa("Preto"),
]);
export default function Home() {
  const [questao, setQuestao] = useState(questaoMock);

  function respostaFornecida(indice: number) {
    console.log(indice);
    setQuestao(questao.responderCom(indice));
  }

  function tempoEsgotado() {
    if (questao.naoRespondida) {
      setQuestao(questao.responderCom(-1));
    }
  }

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Questao
        valor={questao}
        tempoPraResposta={5}
        respostaFornecida={respostaFornecida}
        tempoEsgotado={tempoEsgotado}
      />
    </div>
  );
}
