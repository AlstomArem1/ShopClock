import { AppContext } from "../../AppContext";
import { useContext } from "react";
import imgl from "./Product1.jpg";
import { AiTwotoneStar } from "react-icons/ai";
import "./Product.css";

export default function Product() {
    const { product, addCart } = useContext(AppContext);
    return (
       <div className="product_shopes">
    
         <div className="product">
           {product && product.map((item, key) => (
               <div className="product_img" key={key}>
                   <div className="imgl">
                       <img  src={imgl} alt="" />
                   </div>
                   <p className="p1">Fossil</p>
                   <h3 className="blog_size">Product:{item.name}</h3>
                   <p className="p2">$100.000 - $300.000</p>
                   <button className="button" onClick={() => addCart(item.id)}>Buy Now</button>
                   <div className="product_icon">
                       <i><AiTwotoneStar /></i>
                       <i><AiTwotoneStar /></i>
                       <i><AiTwotoneStar /></i>
                       <i><AiTwotoneStar /></i>
                       <i><AiTwotoneStar /></i>
                       <i className="review">(1 review)</i>
                   </div>
               </div>

           ))}
       </div>
       </div>
    )
}