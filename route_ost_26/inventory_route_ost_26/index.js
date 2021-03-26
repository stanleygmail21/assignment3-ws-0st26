const express = require('express');
const app = require('../../app');
const inventoryOst26 = require('../../controllers_ost_26/inventoryOst26');

const router = express.Router();

router
.route('/')
.get(inventoryOst26)

module.exports = router;