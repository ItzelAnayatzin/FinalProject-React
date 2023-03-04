import { useState } from "react"

export const ItemCount = ({valInitial, stock}) => {
    
    const [counter, setCounter] = useState(valInitial)
            //Var       //Modificar var     //Estado inicial

    const add = () =>  (counter < stock) && setCounter(counter + 1) 
    const sub = () => (counter > valInitial)  && setCounter(counter - 1)


  return (
    <>
        <button className="btn btn-dark" onClick={() => add()}>+</button>
            {counter}
        <button className="btn btn-light" onClick={() => sub()}>-</button>
    </>
  )
}