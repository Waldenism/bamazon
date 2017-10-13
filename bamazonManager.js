const mysql = require('mysql');
const prompt = require('prompt');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'Bamazon'
});

connection.connect(function(err) {
  if (err) throw err;
});

var menu = function() {

	var menuOptions = {
		properties:{
			options:{
				description:('\n\nInput the number for what would you like to do? \n 1) View available products \n 2) View low inventory \n 3) Add to Inventory \n 4) Add new product \n Manager Input:')
			},
		},
	};

	prompt.start();

	prompt.get(menuOptions, function(err, res) {
		if(res.options == 1) {
			viewProducts();
		} else if(res.options == 2){
			viewInventory();
		} else if(res.options == 3) {
			addStock();
		} else if(res.options == 4) {
			addItem();
		} else {
			console.log("Invalid selection");
			connection.end();
		}
	});
};

var viewProducts = function() {

	connection.query("SELECT item_id, product_name, price, stock_quantity FROM Products", function(err, result) {
		if (err) console.log(err);
		console.log("Products");
		console.log("-------------------------");
		for (let i = 0; i < result.length; i++) {
			var id = result[i].item_id;
			var name = result[i].product_name;
			var price = result[i].price;
			var quant = result[i].stock_quantity;
			console.log("Item ID: " + id);
			console.log("Name: " + name);
			console.log("Price: $" + price);
			console.log("Amount in stock: " + quant);
			console.log('--------------------------');				
		}
		menu();
	});	
};

var viewInventory = function() {
	connection.query("SELECT product_name, stock_quantity FROM Products", function(err, result) {
		if (err) console.log(err);
		console.log("These items are scarce in our inventory");
		console.log("----------------------------------------");
		for(let i = 0; i < result.length; i++) {
			if(result[i].stock_quantity < 5) {
				console.log("The following Item(s): " + result[i].product_name);
				console.log("Only " + result[i].stock_quantity + " are left in stock");
			}
		}
		console.log("----------------------------------------");
		menu();
	});
};

var addStock = function(){
	var restockItem = {
		properties: {
			itemID:{description: ("What is the ID number of the item you would like to restock?")},
			quantity:{description: ("How many of those would you like to restock?")}
		}
	};

	prompt.start();
	prompt.get(restockItem, function(err, res){
		var inventoryItem = {
			itemID: res.itemID,
			quantity: res.quantity
		};

		connection.query(
			"UPDATE products SET stock_quantity = " + " stock_quantity + " + inventoryItem.quantity + " WHERE item_id = '" + inventoryItem.itemID + "'", function(err, res){
			if(err) throw err;
			menu();
		})
	});
};

var addItem = function(){
	
};

menu();