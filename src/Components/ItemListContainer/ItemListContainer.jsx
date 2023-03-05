import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';

//Components
import {ItemList} from '../ItemList/ItemList';

//Context


export const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const {idCategory} = useParams ()

    useEffect(() => {
        if (idCategory){
            fetch('../json/products.json')
            .then(response => response.json())
            .then(items => {
                const prods = items.filter(prod => prod.idCategory === parseInt(idCategory))
                const productsList = <ItemList prods={prods} template={'item'}/>
                console.log(productsList)
                setProducts(productsList)
            })
        } else {
            fetch('./json/products.json')
            .then(response => response.json())
            .then(prods => {
                console.log(prods)
                const productsList = <ItemList prods={prods} template={'item'}/>
                console.log(productsList)
                setProducts(productsList)
            })
        }
    }, [idCategory])
    return (
        <div className='row align-items-center justify-content-center m-3'>
            {products}
        </div>
    );
}

export default ItemListContainer;