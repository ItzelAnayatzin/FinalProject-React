import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc} from 'firebase/firestore'

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

export const uploadDB = async () => {
    const promise = await fetch('./json/products.json')
    const products = await promise.json()
    products.forEach( async (prod) => {
        await addDoc(collection(db,"Products"), {
            name: prod.name,
            description: prod.description,
            idCategory: prod.idCategory,
            stock: prod.stock,
            precio: prod.price,
            img: prod.img
        })
    })
}