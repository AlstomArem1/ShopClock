import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"
import "./Movie.css";
export default function Movie() {
    const { cart } = useContext(AppContext)
    return (
        
        <div className="Shop">
            <Link className="shop_pt" to="/home">Home</Link>
            <Link className="shop_pt" to="/products">Product details</Link>
            <Link className="shop_pt" to="/carts">Carts <FaShoppingCart/> <span className="length">{cart.length}</span></Link>
            <Link className="shop_pt" to="/home/SigIn">Sign in</Link>
            <Link className="shop_pt" to="/home/SignUp">Sign up</Link>
        </div>
    );
};
