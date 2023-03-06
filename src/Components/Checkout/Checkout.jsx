import React from 'react'
import { useCartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { createOrder, getOrder, getProduct, updateProduct } from '../../Firebase/Firebase';

export const Checkout = () => {
    const {cart, emptyCart, totalPrice} = useCartContext()
    const dataForm = React.useRef()
    let navigate = useNavigate()

    const consultForm = (e) => {
        e.preventDefault()
        const datForm = new FormData(dataForm.current)
        const client = Object.fromEntries(datForm)
        
        const aux = [...cart]

        //Remove from stock.
        aux.forEach(prodCart => {
            getProduct(prodCart.id).then(prodDB => {
                prodDB.stock -= prodCart.quant
                updateProduct(prodCart.id, prodDB)
            })
        })

        //Alert that the order was created.
        createOrder(client, aux, totalPrice(), new Date().toISOString()).then(order => {
            toast.success(`¡Gracias por tu compra en Saranghae Café 사랑해 🤞😸!, tu orden con el ID: ${order.id} por un total de $${totalPrice()} fue realizada con éxito. En breve la recibirás. ☕🐱`)
            emptyCart()
            e.target.reset()
            navigate("/")
        })

        //Email check.
        function VerifyEmail(id) {
            let characters = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                if (characters.test(document.getElementById(id).value)){
                return true;
                }
                return false;
            }
            
        function Verify(id1, id2){
            let email = document.getElementById(id1);
            let confirmEmail = document.getElementById(id2);
                if(VerifyEmail(id1) && VerifyEmail(id2) && email.value == confirmEmail.value){
                return true;
                }
                return false;
            }
    }

    return (
        <>
            {cart.length === 0 
            ?
            <> 
                <div className='p-5 m-5'>
                    <h2>No hay artículos en tu carrito</h2>
                    <Link className="nav-link" to={'/'}><button className="btn btn-primary">Seguir comprando</button></Link>
                </div>
            </>
            :
            //Purchase form.
                <div id="f1" className="container" style={{marginTop:"20px"}}>
                <form id="myform" onsubmit="if(!Verify('email', 'confirmEmail')){ alert('Email Doesnt Match, Verify Again'); return false; }" onSubmit={consultForm} ref={dataForm}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nombre y Apellido</label>
                        <input type="text" className="form-control" name="name"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" id='id1' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmEmail" className="form-label">Confirmar Email</label>
                        <input type="email" className="form-control" name="confirmEmail" id='id2' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Teléfono</label>
                        <input type="number" className="form-control" name="phone" />
                    </div>
                    <div className="mb-3">
                            <label htmlFor="address" className="form-label">Domicilio Completo (calle, número y colonia)</label>
                            <input type="text" className="form-control" name="address" />
                    </div>
                    <button type="submit" className="btn btn-primary">Finalizar Compra</button>
                </form>
                </div> 
                }
        </>
    )
}