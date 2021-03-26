const fs = require("fs");
const app = require("../../app");
const utils = require("../../utils");

const checkoutOst26 = async (req, res) => {
    try {
        const { sku } = req.body;
        const cartItemsJson = fs.readFileSync(utils.cart_file, "utf-8" ,(data) => data);
        const inventoryItemsJson = fs.readFileSync(utils.inventory_file, "utf-8" ,(data) => data);
        
        const cartItems = JSON.parse(cartItemsJson);
        const inventoryItems = JSON.parse(inventoryItemsJson);

        inventoryItems.forEach((inventory_element, index) => {
            cartItems.forEach(cart_element => {
                if( inventory_element.sku === cart_element.sku ){
                    inventoryItems[index]['quantity'] -= cart_element['quantity'];
                }
            }); 
        });

        const cart = [];
        fs.writeFileSync(utils.cart_file, JSON.stringify(cart) ,(data) => data);
        fs.writeFileSync(utils.inventory_file, JSON.stringify(inventoryItems) ,(data) => data);

        return res.status(201).json({
            status: 'success',
            result: cart.length,
            cart,
            inventoryItems
        })

    } catch (error) {
        return res.status(400).json({
            status: 'fail',
            data: error
        })
    }
}

module.exports = checkoutOst26;