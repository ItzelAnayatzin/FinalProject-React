import { Link } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
import { useCartContext } from "../../Context/CartContext"

export const Cart = () => {
    const {cart, totalPrice, emptyCart } = useCartContext()
    
    return(
        <>
            {cart.length === 0 
              ? //Empty cart
                <>
                    <h2>No hay artículos en tu carrito</h2>
                    <Link className="nav-link" to={'/'}><button className="btn btn-primary">Seguir comprando</button></Link> 
                </>
              : //Cart with products
              <div className="container cartContainer">
                    {
                        <ItemList prods={cart} template={'itemCart'}/>
                    }
                    <div className="divButtons d-flex flex-row justify-content-center align-items-center">
                        <p>Resumen de la compra: ${totalPrice()}</p>
                        <button className="btn btn-outline-danger m-5" onClick={() => emptyCart()}>Vaciar carrito</button>
                        <Link className="nav-link m-5" to={'/'}><button className="btn btn-outline-primary">Seguir comprando</button></Link> 
                        <Link className="nav-link m-5" to={'/checkout'}><button className="btn btn-outline-primary">Realizar pedido</button></Link> 
                    </div>
              </div>
            }
        </>
    )
}
