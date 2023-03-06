import { useContext, createContext, useState } from "react";

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartProvider = (props) => {

    const [cart, setCart] = useState([])

    //If there are products in the cart
    const isInCart = (id) => {
        return cart.find(prod => prod.id === id)
    }

    //Add products
    const addItem = (product, quantity) => {
        if(isInCart(product.id)) { 
            const index = cart.findIndex(prod => prod.id === product.id)
            const aux = [...cart]
            aux[index].quant = quantity
            setCart(aux)
        } else {
            const prodCart ={
                ...product, 
                quant: quantity
            }
            setCart([...cart, prodCart])
        }
    }

    //Delete product
    const removeItem = (id) => {
        setCart(cart.filter(prod => prod.id !== id))
    }

    //Empty cart
    const emptyCart = () => {
        setCart([])
    }

    //Total quantity of products in the cart
    const getItemQuantity = () => {
        return cart.reduce((accu, prod) => accu += prod.quant, 0)
    }

     //Total price
     const totalPrice = () => {
        return cart.reduce((accu, prod) => accu += (prod.quant * prod.price), 0)
    }
    console.log(cart)

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, emptyCart, getItemQuantity, totalPrice}}>
                {props.children}
        </CartContext.Provider>
    )
}
