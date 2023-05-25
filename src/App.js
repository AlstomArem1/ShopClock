import { AppProvider } from "./AppContext";
import "./App.css";
import Product from "./Compenets3/product/Product";
import Cart from "./Compenets3/cart/Cart";
import Movie from "./Compenets3/header/Movie";
import { Routes, Route } from "react-router-dom";
function App() {
  
  return (
    <div className="App">
      <AppProvider>
     
        <Movie />
        <Routes>
          <Route path="/prodocts" element={<Product />}></Route>
          <Route path="/carts" element={<Cart />}></Route>
        </Routes>
      </AppProvider>



    </div>
  )
}
export default App;
