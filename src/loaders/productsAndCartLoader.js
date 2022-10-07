import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
    // get products
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    // get cart from DB
    const storedCart = getStoredCart();
    const initialCart = [];
    for (const id in storedCart) {
        const addedProduct = products.find(product => product.id === id);
        if (addedProduct) {
            addedProduct.quantity = storedCart[id];
            initialCart.push(addedProduct);
        }
    }

    return { products, initialCart };
}