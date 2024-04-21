const getStoredCart = () =>{
    const storedCardString = localStorage.getItem("cart");
    if(storedCardString){
        return JSON.parse(storedCardString)
    } return [];
};

const saveCartToLS = cart =>{
    const cartStringfied = JSON.stringify(cart);
    localStorage.setItem("cart", cartStringfied);

}


const addTols = id =>{
    const cart = getStoredCart();
    cart.push(id);
    // save to local storage
    saveCartToLS(cart)
}
const removefromLs = id =>{
    const cart = getStoredCart();
    // removing every id
    const remaining = cart.filter(idx =>idx !==id);
    saveCartToLS(remaining);
}

export {addTols, getStoredCart, removefromLs}