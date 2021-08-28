import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from '@material-ui/core';
import { Div } from "./style"; 

import api from "../../api";

export default function Pagina1() {
  // export default class Pagina1 extends Component {

  //   // async componentDidMount() {
  //   //   const [input, setInput]
  //   //   const response = await api.get(input);
  //   //   this.setState({input: response.data})

  //   // state={
  //   //   perguntas: []
  //   // }

  //   // componentDidMount(){
  //   //   axios.get('https://opentdb.com/api.php?amount=')
  //   //     .then(res=>{
  //   //       const perguntasTotal=res.total
  //   //       this.setState({perguntas: perguntasTotal})
  //   //     })
  //   // }

  //   render() {
  //     // const {input} = this.state
  //     // function handleChange(e) {
  //     //   setState(e.target.value);
  //     // }

  const [posts, setPosts] = useState([]);
  const [perguntas, setPerguntas] = useState([]);
  const [perguntasTotal, setPerguntasTotal] = useState([]);
  const [correct, setCorrect] = useState([]);

  const [quantidade, setQuantidade] = useState(1);

  function changeFunction(e) {
    setQuantidade(e.target.value);
  }

  let urls = [];

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
      })
      .catch(() => {
        console.log("merda");
      });
  }, [quantidade]);

  function submitFunction() {
    console.log("merd");
  }

  return (
    <Div>
      <h1>Conhecimentos Gerais</h1>
      <div>
        <label>Número de questões:</label>
        <input type="number" onChange={changeFunction} />
      </div>
      <div className="card">
        {perguntasTotal.map((pergunta, j) => {
          return (
            <div key={perguntasTotal.question}>
              <h2>{pergunta.question}</h2>
              <ul>
              {pergunta.incorrect_answers.map((questao,i) => {
                  return(
                    <li>
                      {questao}
                    </li>
                  )
                })}
                <li>
                  {pergunta.correct_answer}
                </li>
              </ul>
            </div>
          );
        })}
      </div>

      <Button color="primary" onClick={submitFunction}>Confirmar</Button>
      {/* <h1>{posts}</h1>
    <ul>
    {perguntas.map((i, key) => {
        return(
          <li key={key}>
            {perguntas,i}
          </li>
        )
    })} */}
      {/* <li>{correct}</li> */}
      {/* </ul> */}
    </Div>
  );
}
