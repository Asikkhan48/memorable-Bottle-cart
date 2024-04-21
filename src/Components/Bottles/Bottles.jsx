import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css"
import { addTols, getStoredCart, removefromLs } from "../../utilities/localstorage";
import Cart from "../Cart/Cart";


const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() =>{
        fetch("bottles.json")
        .then(res => res.json())
        .then(data => setBottles(data))
    }, [])

    // Load Card From Local Storage
    useEffect(()=>{
        if(bottles.length > 0){
            const storeCard = getStoredCart();
            const savedCard =[];
            for (const id of storeCard){
                const bottle = bottles.find(bottle => bottle.id === id);
                if(bottle){
                    savedCard.push(bottle)
                }
            }

            setCart(savedCard)
        }
    }, [bottles])

    const handleBottletoCart = bottle =>{
        const newCart = [...cart, bottle];
        setCart(newCart);
        addTols(bottle.id)
    }
    const handleRemoveFromCart = id =>{
        // visual Cart remove
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        // remove from LS
        removefromLs(id);
    }
    return (
        <div>
            <h1>Bottles Available: {bottles.length}</h1>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>

            <div className="bottle-container">
            {
                bottles.map(bottle => <Bottle 
                    key={bottle.id} 
                    bottle={bottle}
                    handleBottletoCart={handleBottletoCart}>
                    </Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;