import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss';
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from '../../types/tarefa';
import { useEffect, useState } from "react";

interface Props {
  selecionado: ITarefa | undefined,
  finalizarTarefa: () => void,
  paused: false
}

//desestruturar desctracting object literals
export default function Cronometro( {selecionado, finalizarTarefa, paused}: Props) {
  const [tempo, setTempo] = useState<number>();
  //toda vez que alterar 
  // State => só podemos mudar ele através do react
  // useState => devolve o state e uma função para aletrar o state. Faz isso através da const (tempo) e de função (setTempo)
  // useEffect (para lidar com as mudanças) => td vez q muda o card precisa mudar o tempo

  useEffect(() => {
    if(selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo));
    }
  },[selecionado]);

  function regressiva(contador: number = 0) {
    const funcao = function()  {
      if(contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }
      finalizarTarefa();
    };
    setTimeout(funcao, 1000)
  }
  
  function pause(timer = 0) {    
    if(timer > 0){
       return !paused;
    }
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o Cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>
      <Botao onClick={() => regressiva(tempo)}>
        Começar!
      </Botao>
      <div style={{marginTop: "10px"}}>
        <Botao onClick={() => pause(tempo)}>STOP</Botao>
      </div>     
    </div>        
    
  )
}

// useEffect => sempre que clicamos no selecionado ele atualiza 
