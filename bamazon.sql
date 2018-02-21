DROP DATABASE IF EXISTS;
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
VALUES (10001, 'push button', 'parts', 2.99, 200);

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10002, 'control stick', 'parts', 42.99, 50);

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10003, 'power supply', 'parts', 22.99, 50);

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10004, 'video driver', 'parts', 22.99, 50);

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10005, 'audio amp', 'parts', 12.99, 200);

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10006, 'Squids attack', 'games', 9.99, 40);

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10007, 'Heroes vs. Villans Turbo', 'games', 19.99, 30);

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10008, 'hot shots golf', 'games', 29.99, 20);

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10009, 'golf story', 'games', 39.99, 10);

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10010, 'fifa', 'games', 59.99, 5);