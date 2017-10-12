CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE Products (
item_id INT NOT NULL,
product_name VARCHAR(50) NOT NULL,
department_name VARCHAR(50) NOT NULL,
price DECIMAL (4,2) NOT NULL,
stock_quantity INT NOT NULL
);

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity)
VALUES (00001, 'push button', 'parts', 2.99, 200);

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity)
VALUES (00002, 'control stick', 'parts', 42.99, 50);

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity)
VALUES (00003, 'power supply', 'parts', 22.99, 50);

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity)
VALUES (00004, 'video driver', 'parts', 22.99, 50);

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity)
VALUES (00005, 'audio amp', 'parts', 12.99, 200);

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity)
VALUES (00006, 'Squids attack', 'games', 9.99, 40);

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity)
VALUES (00007, 'Heroes vs. Villans Turbo', 'games', 19.99, 30);

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity)
VALUES (00008, 'push button', 'games', 29.99, 20;

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity)
VALUES (00009, 'push button', 'games', 39.99, 10);

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity)
VALUES (00010, 'push button', 'games', 59.99, 5);