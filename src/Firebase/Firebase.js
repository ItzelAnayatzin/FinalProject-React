import { initializeApp } from "firebase/app";
import {getFirestore, collection, doc, addDoc, getDoc, getDocs, updateDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBo3jh4CW8Z3eOxGy8__YgGWIqJSYK26S8",
  authDomain: "ib-react2023.firebaseapp.com",
  projectId: "ib-react2023",
  storageBucket: "ib-react2023.appspot.com",
  messagingSenderId: "55460224102",
  appId: "1:55460224102:web:2e3bca02593c83f11e21a7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore()

//Upload data base.
export const uploadDB = async () => {
    const promise = await fetch('./json/products.json')
    const products = await promise.json()
    products.forEach( async (prod) => {
        await addDoc(collection(db,"Products"), {
            name: prod.name,
            description: prod.description,
            idCategory: prod.idCategory,
            stock: prod.stock,
            price: prod.price,
            img: prod.img
        })
    })
}

export const getProducts = async() => {
    const products = await getDocs(collection(db,"Products"))
    const items = products.docs.map(prod => {
        return {...prod.data(), id: prod.id}
    })
    return items
}

export const getProduct = async(id) => {
    const product = await getDoc(doc(db, "Products", id))
    const item = {...product.data(), id: product.id}
    return item
}

//Update products.
export const updateProduct = async(id, info) => {
    await updateDoc(doc(db, "Products", id), info)
}

//Create the order.
export const createOrder = async(client, products, totalPrice, date) => {
    const order = await addDoc(collection(db, "order"), {
        dataClient: client,
        products: products,
        totalPrice: totalPrice, 
        date: date
    })
    return order
}

export const getOrder = async(id) => {
    const order = await getDoc(doc(db, "order", id))
    const purchase = {...order.data(), id: order.id}
    return purchase
}