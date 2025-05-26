import React, { createContext, useEffect} from "react";
import allproducts from "../assets/allproducts";    
import { useState } from "react";

export const ShopContext = createContext(null);

const getDefaulCart = () => {
        let cart = {};
        for (let index = 0; index < allproducts.length+1; index++) {
            cart[index] = 0;
        }
        return cart;
    }

const ShopContextProvider = (props) => {

    const [products, setAllProducts] = useState([]);
    const [cartItems,setCartItems] = useState(getDefaulCart());

    useEffect(() => {
        fetch("https://backend-lvd9.onrender.com/allproducts")
          .then((response) => response.json())
          .then((data) => setAllProducts(data))
            
          if(localStorage.getItem("auth-token")){
            fetch("https://backend-lvd9.onrender.com/getcartdata",{
                method:"POST",
                headers: {
                    Accept: "application/form-data",
                   "auth-token": `${localStorage.getItem("auth-token")}`,
                   "Content-Type": "application/json"
                },
            })
            .then((res) => res.json())
            .then((data) => {
                setCartItems(data);
            })
        }
      }, []);
    
     
    const addToCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        if(localStorage.getItem("auth-token")){
            fetch("https://backend-lvd9.onrender.com/addtocart",{
                method:"POST",
                headers: {
                    Accept: "application/form-data",
                   "auth-token": `${localStorage.getItem("auth-token")}`,
                   "Content-Type": "application/json"
                },
                body: JSON.stringify({"itemId":itemId}),
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
        
        }
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
        if(localStorage.getItem("auth-token")){
            fetch("https://backend-lvd9.onrender.com/removefromcart",{
                method:"POST",
                headers: {
                    Accept: "application/form-data",
                   "auth-token": `${localStorage.getItem("auth-token")}`,
                   "Content-Type": "application/json"
                },
                body: JSON.stringify({"itemId":itemId}),
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
        }
    }

    const getTotalAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = allproducts.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.newprice;
            }
        }
        return totalAmount;
    }
    const contextValue = {getTotalAmount, allproducts,cartItems,addToCart,removeFromCart};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;