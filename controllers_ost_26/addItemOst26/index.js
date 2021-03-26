const fs = require("fs");
const app = require("../../app");
const utils = require("../../utils");

const addItemOst26 = async (req, res) => {
    try {
        const { sku, name, quantity, price } = req.body;
        const newItem = { sku, name, quantity, price };
        const cartItemsJson = fs.readFileSync(utils.cart_file, "utf-8" ,(data) => data);
        let cart = [];
        if(cartItemsJson) {
            cart = JSON.parse(cartItemsJson)
        };
        let found = cart.find(item => item.sku === sku)
        if(found){
            cart.forEach(element => {
                if(element.sku === sku && element.quantity < quantity){
                    element.quantity+=1
                }
            });
        }else{
            newItem.quantity = 1;
        cart.push(newItem);
        }
        
        fs.writeFileSync(utils.cart_file, JSON.stringify(cart) ,(data) => data);

        return res.status(200).json({
            status: 'success',
            result: cart.length,
            data: cart
        })

    } catch (error) {
        return res.status(400).json({
            status: 'fail',
            data: error.message
        })
    }
}

module.exports = addItemOst26;