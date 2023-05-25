import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"
import "./Movie.css";
export default function Movie() {
    const { cart } = useContext(AppContext)
    return (
        
        <div className="Shop">
            <Link className="shop_pt" to="/">Home</Link>
            <Link className="shop_pt" to="/prodocts">Shop_Products</Link>
            <Link className="shop_pt" to="/carts">Carts <FaShoppingCart/> <span className="length">{cart.length}</span></Link>
            {/* <h1>Count:{cart.length}</h1> */}
        </div>
    );
};
