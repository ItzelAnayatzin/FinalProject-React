import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';

//Components
import {ItemList} from '../ItemList/ItemList';

//Context


//Firebase
import { getProducts } from '../../Firebase/Firebase';

export const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const {idCategory} = useParams ()

    useEffect(() => {
        if (idCategory){
            getProducts()
            .then(items => {
                const prods = items.filter(prod => prod.idCategory === parseInt(idCategory))
                const productsList = <ItemList prods={prods} template={'item'}/>
                setProducts(productsList)
            })
        } else {
            getProducts()
            .then(prods => {
                const productsList = <ItemList prods={prods} template={'item'}/>
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