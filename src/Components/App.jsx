import './App.css'
import 'react-toastify/dist/ReactToastify.css'

//Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Toastify
import { ToastContainer } from 'react-toastify';

//Firebase
import { getProducts } from '../Firebase/Firebase';

//Components
import NavBar from "./NavBar/NavBar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import {Cart} from './Cart/Cart';
import {Checkout} from './Checkout/Checkout';
import { Title } from './Title/Title';

//Context
import { CartProvider } from '../Context/CartContext';

const App = () => {
  return (
   <>
   <BrowserRouter>
        <CartProvider>
            <NavBar/>
              <Title></Title>
              <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/item/:id' element={<ItemDetailContainer/>}/>
                <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
              </Routes>
            <ToastContainer/>
        </CartProvider>
   </BrowserRouter>    
   </>
  );
}

export default App;