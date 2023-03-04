import {ItemCount} from '../ItemCount/ItemCount'
export const ItemDetail = ({item}) => {
  return (
    <div className='row g-0'>
        <div className="col-md-4">
            <img src={`../img/${item.img}`} className="img-fluid rounded-start" alt={`Imagen de ${item.name}`} />
        </div>
        <div className="col-md-8">
            <div className="card-body">
                <h5 className='card-title'>{item.nombre}</h5>
                <p className='card-text'>Descripción: {item.description}</p>
                <p className='card-text'>Precio: ${item.price}</p>
                <p className='card-text'>Stock: {item.stock}</p>
                <ItemCount valInitial={1} stock={item.stock}/>
                <button className='btn btn-secondary'>Finalizar Compra</button>
            </div>
        </div>
     
    </div>
  )
}