import React from 'react';
import { ITarefa } from '../../types/tarefa';
import Item from './item';
import style from './Lista.module.scss';


interface Props {
  tarefas: ITarefa[],
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void 
}

function Lista({ tarefas, selecionaTarefa }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map(item => (
          <Item
           selecionaTarefa={selecionaTarefa}
            key={item.id}
            {...item} // spread dos itens => desestrutura os itens e conseguimos acessar todos daqui
          />
        ))}
      </ul>
    </aside>
  )
}

export default Lista;

// a lista só tem a responsabilidade de fazer a iteração (o map) e enviar cada tarefa para o componente item
// usamos return direto pq não há função obrigatória
// essa função só retorna
// para ter uma state dentro do component precisamos criar uma classe
// hooks => funções externas que podemos importar no function component e, assim, ter estado dentro do componente. 
// usando o hooks, não precisamos mais usar o Stateful Component 
// Stateful Component está caindo em desuso
// Functional componente terá atualizações do React
// .map => função que percore os arrays no JS. Faz o loop no array e retorna algo de cada iteração.
//  .map aceita dois parâmetros. O primeiro é o próprio item, a própria tarefa, logo, teremos {tarefas.map((tarefa, ))}. 
// E o segundo é o index do array nessa tarefa, {tarefas.map((tarefa, index) => (. Atenção aos parênteses, porque significam que você já vai retornar.
// Sempre q tiver uma reinderização dinamica(.map), usar a Key com o valor do id

//  <Item {...item} /> => faz um spread e busca tudo que há dentro do item de uma vez só. Usar só em escopo fechado - OBS: não é indicado usar desse jeito caso a chamada seja feita de uma api



// Stateful Component sintax:
//const Item = () => (
//    <li>
//      item...
//    </li>
//  )

// A função useState retorna um array para que possamos desestruturar e pegar os valores de forma simples, apenas utilizando [estado, funcaoQueMudaOEstado].
// function component utiliza hook
// class component já tem o state junto com o class


 // toda função com useState é uma função hook. O Use é a sintaxe pra chamar o hook....
  // state => é uma variável. Sempre que esse state e muda, o componente que tem ele, também muda. Por isso, usamos o state na lista.
  // para usar o State sempre pecisamos setar ele
  // setTarefas => Set é para setar o State e o Tarefas é para refereênciar com o nome do componente que queremos setar
/*
Através da interface
onClick={() => {         
            // setamos o objeto com uma nova tarefa
            // é um hook pq está enganchado com o objeto tarefas
            setTarefas([...tarefas, {tarefa: "Estudar Estados", tempo: "05:00:00"}])
          }}

*/