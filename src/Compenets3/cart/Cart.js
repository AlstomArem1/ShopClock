import { useContext } from "react"
import { AppContext } from "../../AppContext"
import imgles from "./Cart1.jpg";
import { MdAutoDelete } from "react-icons/md"
import "./Cart.css";

export default function Cart() {
    const { cart, changeMinus, changeSum, DeleteMode, handle_sweel} = useContext(AppContext)
    console.log(cart);
    return (
        
        <div className="carts">
            {
                cart && cart.map((item, index) =>
                (
                    <div className="Carts_Box" key={index} >
                        <img src={imgles} alt="" />
                        <h3 className="font_name">{item.name}</h3>
                        <div className="btn">
                            <button className="btn1" onClick={() => changeMinus(item.id)}>-</button>
                            {item.qty}
                            <button className="btn2" onClick={() => changeSum(item.id)}>+</button>
                        </div>
                        <h2>Gia tien</h2>
                        <button className="buy_shop" onClick={handle_sweel}>Buy</button>
                        <div className="Delete" onClick={() => {
                            DeleteMode(item.id)
                        }}><MdAutoDelete/></div>
                    </div>
                )
                )
            }
        </div>
    )
}