import './App.css'

//Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Firebase
import { uploadDB } from '../Firebase/Firebase';

//Components
import NavBar from "./NavBar/NavBar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import {Cart} from './Cart/Cart';

//Context

//uploadDB ()
const App = () => {
  return (
   <>
   <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
   </BrowserRouter>    
   </>
  );
}

export default App;