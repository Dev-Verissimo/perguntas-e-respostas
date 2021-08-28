import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
import { Div } from "./style";

import api from "../../api";
import Modal from "../Modal/Modal";

export default function Pagina1() {
  const [posts, setPosts] = useState([]);
  const [perguntas, setPerguntas] = useState([]);
  const [perguntasTotal, setPerguntasTotal] = useState([]);
  const [correct, setCorrect] = useState([]);

  const [quantidade, setQuantidade] = useState(1);

  function changeFunction(e) {
    setQuantidade(e.target.value);
  }


  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=" + quantidade)
      .then((response) => {
        // setPosts(response.data)
        setPosts(response.data.results[0].question);
        setPerguntas(response.data.results[0].incorrect_answers);
        setCorrect(response.data.results[0].correct_answer);
        console.log(response.data.results);
        setPerguntasTotal(response.data.results);
        console.log(perguntasTotal[0]);
        console.log(response.data.results);
      });
  }, [quantidade]);

  const [modalVisible, setModalVisible] = useState(true);
  const [modalOneVisible, setmodalOneVisible] = useState(true);

  function start() {
    setModalVisible(false);
  }
  function cancel() {
    setmodalOneVisible(true);
    setModalVisible(false);
  }
  function startOne() {
    setModalVisible(true);
    setmodalOneVisible(false);
  }

  let inputCorrect = document.getElementsByClassName('correct')

  const [pontos, setPontos] = useState(0)
  const [clique, setClick] = useState('')
  const [correctOne, setCorrectOne] = useState('')
  const [respostaUser, setrespostaUser] = useState(0)
  const [display, setDisplay] = useState('')

  function question11(i,j) {
    setClick('o'+j+'yello'+i)
    setCorrectOne('green')

  }
  function correta() {
    setPontos(pontos+1)
    console.log(pontos)
  }

  function submitFunction() {
    
  }



  return (
    <Div>
      <Modal visible={modalVisible}>
        <div className="Modal">
          <div>
            <h1>Conhecimentos Gerais</h1>
            <p>Teste de conhecimentos gerais com o número de questões escolhidas</p>
          </div>
          <form>
            <div>
              <Button onClick={start} variant="contained" color="primary">
                Start
              </Button>
              <Button onClick={cancel} variant="contained" color="secondary">
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </Modal>
      <Modal visible={modalOneVisible}>
        <section>
          <label>
            Número de questões:
            <input type="number" onChange={changeFunction} />
          </label>
          <Button onClick={startOne} variant="contained" color="primary">
            Start
          </Button>
        </section>
      </Modal>
      <h1>Conhecimentos Gerais  </h1>
       <h1 className={display}>{pontos}</h1> 

      <div className="card">
        {perguntasTotal.map((pergunta, j) => {
          return (
            <div key={perguntasTotal.question}>
              <h2>{pergunta.question}</h2>
              <ul className={'i'+j}>
                {pergunta.incorrect_answers.map((questao, i) => {
                  return (
                    <li>
                      <input name='tentativa' type='radio' className={'click '+clique} onClick={()=>question11(i,j)} />
                        <label>
                      {questao}
                    </label>
                    </li>
                  
                  )
                })}
                <li className={correctOne} onClick={()=>correta()}>
                  
                  <input name='tentativa' type='radio' />
                        <label>
                        {pergunta.correct_answer}
                  </label>
                  </li>
              </ul>
            </div>
          );
        })}
      </div>

      <Button color="primary" onClick={submitFunction}>
        Confirmar
      </Button>
    </Div>
  );
}
