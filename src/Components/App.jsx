import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from "./NavBar/NavBar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";

const App = () => {
  return (
   <>
   <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
        </Routes>
   </BrowserRouter>    
   </>
  );
}

export default App;