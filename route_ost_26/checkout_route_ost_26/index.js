const express = require('express');
const app = require('../../app');
const checkoutOst26 = require('../../controllers_ost_26/checkoutOst26');

const router = express.Router();

router
.route('/')
.post(checkoutOst26)

module.exports = router;