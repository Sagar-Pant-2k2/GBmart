export default (cart, action) => {
    switch (action.type) {
        case 'addToCart':
            const productIdToAdd = action.payload;
            if (!cart.includes(productIdToAdd)) {
                // Add the product ID to the cart if it's not already there
                return [...cart, productIdToAdd];
            }
            return cart; 
        case 'removeFromCart':
            const productIdToRemove = action.payload;
            const updatedCart = cart.filter((productId) => productId !== productIdToRemove);
            return updatedCart;

        default:
            return cart;
    }
};
