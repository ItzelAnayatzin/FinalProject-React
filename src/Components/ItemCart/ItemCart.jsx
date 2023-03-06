import { useCartContext } from "../../Context/CartContext";

export const ItemCart = ({item}) => {
    const {removeItem} = useCartContext()

    return (
        <div className="card mb-3 cardCart">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={item.img} alt={`Imagen de ${item.name}`} className="img-fluid rounded-start" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">Cantidad: {item.quant}</p>
                        <p className="card-text">Precio: ${(item.price)}</p>
                        <p className="card-text">Subtotal: ${(item.price * item.quant)}</p>
                        <button className="btn btn-danger" onClick={() => removeItem(item.id)}>Eliminar del Carrito</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
