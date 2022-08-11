import React, { ReactNode } from 'react';
import style from './Botao.module.scss';

interface Props {
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    children?: React.ReactNode
  } 
  // {this.props} => é a forma que pegamos o objeto da props
  //botão está sendo usado no fomrulário e no relógio
  function Botao({ onClick, type, children }: Props) {
    return (
      <button
        onClick={onClick}
        type={type}
        className={style.botao}
      >
        {children}
      </button>
    )
  }
  
  export default Botao;

// | => ou
// type={type} => é o mesmo type que passamos via prop
//  backgroundColor: estaAtivo ? "green" : "red" 
/* ? => operador ternario Se */
// a prop é um objeto que é definido dentro de <{}>
// {this.props} => é a forma que pegamos o objeto da props
// {this.props.texto} => é a forma que pegamos a string da props
// {this.props.texto} => é a forma que pegamos a string da props
// {this.props.children} => usa os parentescos do DOM para pegar o valor da props
// Nós do Dom
// a partir do React 18 usar => children?: React.ReactNode <= para usar os Nós do DOM


// Class component não é mais utilizado. O indicado é usar function
/* #############  CLASS COMPONENT #################

class Botao1 extends React.Component<{
  type?: "button" | "submit" | "reset" | indefined,
  onClick?: () => void
}> {
  render() {
    const { type = "button", onClick } = this.props;
    return (
      <button onClick={onClick} type={type} className=
       {style.botao}>
        {this.props.children}
      </button>
    )
  }
}
*/