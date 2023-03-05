export const ItemCart = ({item}) => {
    return (
        <div className="card mb-3 cardCart">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={item.img} alt={`Imagen de ${item.name}`} className="img-fluid rounded-start" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">Cantidad: {item.quantity}</p>
                        <p className="card-text">Precio: ${(item.price)}</p>
                        <p className="card-text">Subtotal: ${(item.price * item.quantity)}</p>
                        <button className="btn btn-danger" onClick={() => "Delete product"}>Eliminar del Carrito</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
