import { useState } from "react"
import {toast} from 'react-toastify'

export const ItemCount = ({valInitial, stock, onAdd}) => {
    
    const [counter, setCounter] = useState(valInitial)

    const add = () =>  (counter < stock) && setCounter(counter + 1) 
    const sub = () => (counter > valInitial)  && setCounter(counter - 1)
    const addToCart = () => {
      onAdd(counter)
      toast(`🤞😸 ¡Agregaste ${counter} productos al carrito!`) 
    }

  return (
    <>
        <button className="btn btn-ligh" onClick={() => sub()}>-</button>
            {counter}
        <button className="btn btn-light" onClick={() => add()}>+</button>
        <button className="btn btn-outline-primary" onClick={() => addToCart()}>Agregar al carrito</button>
    </>
  )
}