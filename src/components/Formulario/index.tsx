import React, { useState } from 'react';
import { ITarefa } from '../../types/tarefa';
import Botao from '../Botao';
import style from './Formulario.module.scss';
import { v4 as uuidv4 } from 'uuid';


interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

function Formulario({ setTarefas }: Props) {
    const [tarefa, setTarefa] = useState("");
          // tarefa => representa a propriedade de uma classe
          // setTarefa => representa um getter ou setter de uma classe
          // useState => retorna um valor e uma função para atualizar esse valor
    const [tempo, setTempo] = useState("00:00");

    // evento: React.FormEvent<HTMLFormElement> => é como tipamos um evento de formulário
    // React.FormEvent => tipo do evento
    // HTMLFormElement => especifica mais ainda o evento. Diz que ele é um evento de formulário que vem de um tag formulário do HTML
    
    function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
        setTarefas(tarefasAntigas => 
            [
              ...tarefasAntigas,
              {
                
                tarefa,
                tempo,
                selecionado: false,
                completado: false,
                id: uuidv4(), //função importada from pacote externo: npm i uuid
                paused: false
              }
            ]
          )
          setTarefa("");
          setTempo("00:00");
               
    }

    // o escopo da funcção não consegue ler o escopo do class component
    //.bind() => associa a função a outro escopo, um escopo de fora. Neste caso ele associa a 

    return (
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className= {style.inputContainer}>
                <label htmlFor="tarefa">
                Adicione um novo estudo
                </label>
                <input
                type="text"
                name="tarefa"
                id="tarefa"
                value={tarefa}
                onChange={evento => setTarefa(evento.target.value)}
                placeholder="O que você quer estudar"
                required
                />
            
            </div>

            <div className= {style.inputContainer}>
                <label htmlFor="tempo">
                Tempo
                </label>
                <input
                 type="time"
                 step="1"
                 name="tempo"
                 value={tempo}
                 onChange={evento => setTempo(evento.target.value)}
                 id="tempo"
                 min="00:00:00"
                 max="01:30:00"
                 required
                />                    
            </div>

            <Botao type="submit">
                Adicionar
            </Botao>
        </form>
    )
}       


export default Formulario;



// label htmlFor="tempo" => qnd clica aparece o input com o timer
//  <Botao> Adicionar </Botao>