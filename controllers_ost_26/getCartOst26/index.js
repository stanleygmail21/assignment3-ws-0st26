const fs = require("fs");
const app = require("../../app");
const utils = require("../../utils");

const getCartOst26 = async (req, res) => {
    try {
        const cartItemsJson = fs.readFileSync(utils.cart_file, "utf-8" ,(data) => data);
        let cart = [];
        if(cartItemsJson) {
            cart = JSON.parse(cartItemsJson)
        };
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

module.exports = getCartOst26;