import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { getProduct } from '../../Firebase/Firebase';

const ItemDetailContainer = () => {
    const [element, setElement] = useState([])
    const {id} = useParams ()
    useEffect(() => {
        getProduct(id)
        .then(item => {
           setElement(item)
        })
    }, [])
    return (
        <div className='card mb-3 container itemDetail'>
            <ItemDetail item={element}/>
        </div>
    );
}

export default ItemDetailContainer;