import { Link } from "react-router-dom";
const CartWidget = () => {
    return (
        <div>
            <Link className="nav-link" to={'/cart'}><button className="btn">Carrito</button></Link>
            <p>1</p>
        </div>
    );
}

export default CartWidget;