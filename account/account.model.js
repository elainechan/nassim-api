'use strict';
const mongoose = require('mongoose');

// TODO
// should reference Portfolio _id
const Account = mongoose.Schema({
	date: Date,
	email: String,
	password: String,
	cash: Number,
	assets: Number,
	portfolios: Array,
	transactions: Array,
	holdings: Array
})

module.exports = mongoose.model('Account', Account, 'account');

/*
date
email
password
cash
assets under management
Portfolios
Transactions
*/