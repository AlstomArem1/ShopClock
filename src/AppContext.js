import { createContext, useState, useEffect } from "react";
import axios from "axios";
import  swal  from "sweetalert";
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
            id === item.id ? { ...item, qty: item.qty - 1 } : item
        );
        setCart(kq);
    }
    const changeSum = (id) => {
        const kq = cart.map((item) =>
            id === item.id ? { ...item, qty: item.qty + 1 } : item
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
                handle_sweel
            }}>
            {children}
        </AppContext.Provider>
    )
} 