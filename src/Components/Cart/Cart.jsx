import { Link } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
export const Cart = () => {
    const shopCart = [
        {id: 1, name: "Corndog", img: '1corndog.jpg', price: 60, quantity: 5 },
        {id: 2, name : "Ramyeon", img: '2ramyeon.jpg', price: 85, quantity: 2 },
        {id: 3, name : "Bibimbap", img: '3bibimbap.jpg', price: 90, quantity: 3 },
    ]
    return(
        <>
            {shopCart.length === 0 
              ? //Empty cart
                <>
                    <h2>No hay artículos en tu carrito</h2>
                    <Link className="nav-link" to={'/'}><button className="btn btn-primary">Seguir comprando</button></Link> 
                </>
              : //Cart with products
              <div className="container cartContainer">
                    {
                        <ItemList prods={shopCart} template={'itemCart'}/>
                    }
                    <div className="divButtons">
                        <p>Resumen de la compra: total</p>
                        <button className="btn btn-danger">Vaciar carrito</button>
                        <Link className="nav-link" to={'/'}><button className="btn btn-dark">Seguir comprando</button></Link> 
                        <Link className="nav-link" to={'/checkout'}><button className="btn btn-dark">Finalizar pedido</button></Link> 
                    </div>
              </div>
            }
        </>
    )
}
