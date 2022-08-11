import { ITarefa } from '../../../types/tarefa';
import style from './Item.module.scss';


interface Props extends ITarefa{
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Item({tarefa, tempo, selecionado, completado, id, paused, selecionaTarefa } : Props) {
    
    return(
        <li
      className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`}
      onClick={() => !completado && selecionaTarefa(
        {
          tarefa,
          tempo,
          selecionado,
          completado,
          id,
          paused
        }
        )}
      >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {completado && <span className={style.concluido} aria-label="tarefa completada"></span>}
    </li>
    )
}


// o item só tem a responsabilidade de reinderiazar esse item, só cuida da parte do array de tarefas dele
// podemos declarar os components:
//ASSIM:
// export default function Item(props: { tarefa: string, tempo:string})  => para dizer que o tarefa e tempo vem de props (é uma desestruturação de props)
// const {tarefa, tempo } = props; => para dizer que o tarefa e tempo vem de props (é uma desestruturação de props)
// OU 
// Assim:
// export default function Item({tarefa, tempo } : { tarefa: string, tempo:string}) => para dizer que o tarefa e tempo vem de props (é uma desestruturação de props)
 