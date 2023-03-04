import { Link } from "react-router-dom"
export const Item = ({item}) => {
    return (
      <div className="card m-1 border-light" style={{width: '18rem'}}>
            <img src={`../img/${item.img}`} className="card-img-top" alt={`Imagen de ${item.name}`}/>
                <div className="card-body text-center">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">${item.price}</p>
                    <button className="btn btn-primary"><Link className="nav-link" to={`/item/${item.id}`}>Ver Producto</Link></button>
                </div>
      </div>
    )
  }