const express = require('express');
const app = require('../../app');
const getCartOst26 = require('../../controllers_ost_26/getCartOst26');
const addItemOst26 = require('../../controllers_ost_26/addItemOst26');
const removeItemOst26 = require('../../controllers_ost_26/removeItemOst26');

const router = express.Router();

router
.route('/')
.get(getCartOst26)
.post(addItemOst26)
.delete(removeItemOst26)

module.exports = router;