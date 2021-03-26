const fs = require("fs");
const express = require('express');
const cors = require('cors');
const cart_route_ost_26 = require('./route_ost_26/cart_route_ost_26');
const inventory_route_ost_26 = require('./route_ost_26/inventory_route_ost_26');
const checkout_route_ost_26 = require('./route_ost_26/checkout_route_ost_26');

const app = express();

app.use(express.json());
app.use(cors());
app.options('*', cors());

const cartItems = fs.readFileSync(__dirname+'/data_ost_26/cart_ost_26.json', "utf-8" ,(data) => data);


// app.use('/cartOst26');
app.use('/cartOst26', cart_route_ost_26);
app.use('/inventoryOst26', inventory_route_ost_26);
app.use('/checkoutOst26', checkout_route_ost_26);


module.exports = app;