import { AppProvider } from "./AppContext";
import "./App.css";
import Product from "./Compenets3/product/Product";
import Cart from "./Compenets3/cart/Cart";
import Movie from "./Compenets3/header/Movie";
import { Routes, Route } from "react-router-dom";
import Home from "./Compenets3/home/Home";
import BasicExample from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";

function App() {
  
  return (
    <div className="App">
      <AppProvider>
        
        <Movie />
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/products" element={<Product />}></Route>
          <Route path="/carts" element={<Cart />}></Route>
          <Route path="/home/SigIn" element={<BasicExample />}></Route>
          <Route path="/home/SignUp" element={<SignUp />}></Route>
        </Routes>
      </AppProvider>



    </div>
  )
}
export default App;
