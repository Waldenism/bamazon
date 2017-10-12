const mysql = require('mysql');
const prompt = require('prompt');
var connection = mysql.createConnection({
	host: 'localhost',
	port:3306,
	user: 'root',
	password: '',
	database: bamazon
});

let purchase = [];

connection.connect();

connection.query('SELECT item_id, product_name, price FROM Products', function(err, result){
	if(err) console.log(err);

	var table = new Table({
		head: ['Item ID', 'Product Name', 'Price']
	});

	for(let i = 0; i < result.length; i++) {
		table.push([result[i].ItemID, result[i].ProductName, result[i].Price]);
	}
	console.log(table.toString());

	purchase();

});

var purchase = function() {
	var productInfo = {
		properties: {
			itemID:{description: ("What is the ID number of the item you would like to purchase?")},
			quantity:{description: ("How many?")}
		},
	};

	prompt.start();

	prompt.get(productInfo, function(err, res){
		var userOrder = {
			itemID: res.itmeID,
			quantity: res.quantity
		};

		purchase.push(userOrder);

		connection.query('SELECT * FROM Products WHERE item_id=?', productPurchase[0].itemID, function(err, res) {
			if(err) console.log(err, 'That item ID does not have a record');

			if(res[0].stock_quantity < purchase[0].quantity){
				console.log('Looks like that item is on back order');
				connection.end();
			} else if (res[0].stock_quantity >= purchase[0].quantity){
				console.log('');
				console.log(purchase[0].quantity + ' items purchased');
				console.log(res[0].product_name + ' ' + res[0].price);
				var debtDue = res[0].price * purchase[0].quantity;

				console.log("Total: " + debtDue);

				var newQuantity = res[0].stock_quantity - purchase[0].quantity;

				connection.query("UPDATE Products SET stock_quantity = " + newQuantity + " WHERE item_id = " + purchase[0].itemID, function(err, res) {
					if(err) throw err;
					console.log("Thanks for shopping at Bamazon. Your order has been recieved." )
					connection.end();
				});
			}
		});
	});
};