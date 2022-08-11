export const addToCart = (book) =>{
    return {
        type:"ADD_TO_CART",payload: book
    };
}
export const removeToCart = (id) =>{
    return {
        type:"Remove_TO_CART",payload: id
    };
}