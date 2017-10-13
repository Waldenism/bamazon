const mysql = require('mysql');
const prompt = require('prompt');
// var Table = require('cli-table');
var connection = mysql.createConnection({
	host: 'localhost',
	port:3306,
	user: 'root',
	password: '',
	database: 'Bamazon'
});

let purchase = [];

connection.connect(function(err) {
  if (err) throw err;
});

connection.query('SELECT item_id, product_name, price FROM Products', function(err, result){
	if(err) console.log(err);
	console.log('--------------------------');
	console.log("Currently available items: ");
	console.log('--------------------------');
	for (let i = 0; i < result.length; i++) {

		var id = result[i].item_id;
		var name = result[i].product_name;
		var price = result[i].price;
		console.log("Item ID: " + id);
		console.log("NAME: " + name);
		console.log("PRICE: $" + price);
		console.log('--------------------------');				
	}

	checkout();

});

var checkout = function() {
	var productInfo = {
		properties: {
			itemID:{description: ("What is the ID number of the item you would like to purchase?")},
			quantity:{description: ("How many?")}
		}
	};

	prompt.start();

	prompt.get(productInfo, function(err, res){
		var userOrder = {
			itemID: res.itemID,
			quantity: res.quantity
		};

		purchase.push(userOrder);

		connection.query('SELECT * FROM Products WHERE item_id=?', purchase[0].itemID, function(err, res) {
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