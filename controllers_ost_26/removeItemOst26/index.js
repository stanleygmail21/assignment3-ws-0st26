const fs = require("fs");
const app = require("../../app");
const utils = require("../../utils");

const removeItemOst26 = async (req, res) => {
    try {
        const { sku } = req.body;
        const cartItemsJson = fs.readFileSync(utils.cart_file, "utf-8" ,(data) => data);
        const cartItems = JSON.parse(cartItemsJson);
        const cart = cartItems.filter(items => items.sku !== sku );
        fs.writeFileSync(utils.cart_file, JSON.stringify(cart) ,(data) => data);

        return res.status(200).json({
            status: 'success',
            result: cart.length,
            data: cart
        })

    } catch (error) {
        return res.status(400).json({
            status: 'fail',
            data: error
        })
    }
}

module.exports = removeItemOst26;