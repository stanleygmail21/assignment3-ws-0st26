const fs = require("fs");
const app = require("../../app");
const utils = require("../../utils");

const inventoryOst26 = async (req, res) => {
    try {
        const inventoryItemsJson = fs.readFileSync(utils.inventory_file, "utf-8" ,(data) => data);
        const inventory = JSON.parse(inventoryItemsJson);
        return res.status(200).json({
            status: 'success',
            result: inventory.length,
            data: inventory
        })

    } catch (error) {
        return res.status(404).json({
            status: 'fail',
            data: error
        })
    }
}

module.exports = inventoryOst26;