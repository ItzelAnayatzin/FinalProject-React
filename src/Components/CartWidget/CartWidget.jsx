import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";

const CartWidget = () => {
    const {getItemQuantity} = useCartContext()
    
    return (
        <div>
            <Link className="nav-link" to={'/cart'}>
                <button className="btn"><img src="https://firebasestorage.googleapis.com/v0/b/ib-react2023.appspot.com/o/cart.png?alt=media&token=d503296e-2154-424b-87c9-441014fc049e" width="45" alt="" /></button>
                {getItemQuantity() > 0 && <span className="cantCart">{getItemQuantity()}</span>}
            </Link>
        </div>
    );
}

export default CartWidget;