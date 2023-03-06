import {ItemCount} from '../ItemCount/ItemCount'

//Context
import { useCartContext } from '../../Context/CartContext'

export const ItemDetail = ({item}) => {
  const {addItem} = useCartContext ()

  const onAdd = (quantity) => {
    addItem (item, quantity)
  }

  return (
    <div className='row g-0'>
        <div className="col-md-4">
            <img src= {item.img} alt={`Imagen de ${item.name}`} className="img-fluid rounded-start"/>
        </div>
        <div className="col-md-8">
            <div className="card-body">
                <h5 className='card-title'>{item.nombre}</h5>
                <p className='card-text'>Descripción: {item.description}</p>
                <p className='card-text'>Precio: ${item.price}</p>
                <p className='card-text'>Stock: {item.stock}</p>
                <ItemCount valInitial={1} stock={item.stock} onAdd={onAdd}/>
            </div>
        </div>
     
    </div>
  )
}