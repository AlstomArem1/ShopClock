import { createContext, useState, useEffect } from "react";
import axios from "axios";
import  swal  from "sweetalert";
import moment from "moment";
export const AppContext = createContext({});
export const AppProvider = ({ children }) => {
    const [show, setShow] = useState(false); // ko co show
    const [count, setCount] = useState(1); // ko co count
    //++++++++++++++++++++++++++++++++++++++++++++++++++++
    const [product, setProduct] = useState(null);
    const [cart, setCart] = useState([]);

    const getData = async () => {
        const url = `https://6468b572e99f0ba0a82ad809.mockapi.io/Produclist`;
        axios
            .get(url)
            .then(res => {
                setProduct(res.data)
                console.log(res.data)
            })
            .catch(error => {
                if (error.response.status == "404") {

                }
            })
    }
    useEffect(() => {
        getData();
    }, []);
    const addCart = async (id) => {
        const kq = product.find((item) => item.id == id)
        const index = cart.findIndex((item) => item.id == id)

        if (index >= 0) {
            const Listnew = cart;
            Listnew[index]["qty"]++;
            setCart(Listnew);
        }
        else {
            setCart([...cart, { ...kq, qty: 1 }])
        }
    }

    console.log(cart);

    const changeMinus = (id) => {
        const kq = cart.map((item) =>         
            id === item.id ? { ...item, qty: item.qty - (item.qty > 1 ? 1:0)}  : item 
        );
        setCart(kq);
    }
    const changeSum = (id) => {
        const kq = cart.map((item) => 
            id === item.id ? { ...item, qty: item.qty + (item.qty < 10 ? 1:0) } : item
        );
        setCart(kq);
    }
    const DeleteMode = (id) => {
        const kq = cart.filter((str) => str.id !== id);
        setCart(kq);
    }
    const handle_sweel = () => {
        swal({
            title: "Complete!",
            text: "payment methods",
            icon: "success",
            button: "YES",
        });
    }
    const handle_next = () => {
        swal({
            title: "Complete!",
            text: "payment methods",
            icon: "success",
            button: "YES",
        });
    }
    const hour = moment().format('hh');
    const minet = moment().format('mm');
    const sec = moment().format('ss');
    const today = moment().format('MMMM');
    const [time, setTime] = useState();
    const Times = () => {
        const sec = moment().format('ss');
        setTime(sec)
    }
    setInterval(Times,1000)
    
    return (
        <AppContext.Provider
            value={{
                show,
                count,
                setShow,
                product,
                cart,
                addCart,
                changeMinus,
                changeSum,
                DeleteMode,
                handle_sweel,
                today,
                hour,
                minet,
                sec,
                time,
                handle_next
            }}>
            {children}
        </AppContext.Provider>
    )
} 