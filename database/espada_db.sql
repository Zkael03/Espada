CREATE DATABASE espada_db;
USE espada_db;

CREATE TABLE users  (
  id INT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  nomor_telepon VARCHAR(20),
  password VARCHAR(255) NOT NULL
);

CREATE TABLE items (
  id INT PRIMARY KEY,
  name VARCHAR(20) NOT NULL,
  price DECIMAL(10.2) NOT NULL,
  category VARCHAR(10) NOT NULL,
  image VARCHAR(50) NOT NULL,
  best_seller VARCHAR(10) NOT NULL,
  trending VARCHAR(10) NOT NULL
)

INSERT INTO items (id, name, price, category, image, best_seller, trending) VALUES
(1, 'Grilled Steak', 180.00, 'Steak', '/images/grilled steak.png', 'Yes', 'No'),
(2, 'Ribeye Steak', 200.00, 'Steak', '/images/rib eye.png', 'No', 'No'),
(3, 'T-Bone Steak', 220.00, 'Steak', '/images/t-bone steak.png', 'No', 'No'),
(4, 'Filet Mignon', 350.00, 'Steak', '/images/fillet mignon.png', 'No', 'Yes'),
(5, 'Beef Wellington', 450.00, 'Steak', '/images/beef wellington.png', 'Yes', 'No'),
(6, 'Grilled Salmon', 180.00, 'Steak', '/images/grilled salmon.png', 'No', 'Yes'),
(7, 'Grilled Chicken', 130.00, 'Steak', '/images/grilled chicken.png', 'No', 'No'),
(8, 'Brisket', 300.00, 'Steak', '/images/brisket.png', 'Yes', 'No'),
(9, 'Cajun Fries', 50.00, 'Side Dish', '/images/cajun fries.png', 'No', 'No'),
(10, 'Sweet Potato Fries', 55.00, 'Side Dish', '/images/sweet potato.png', 'No', 'No'),
(11, 'Mashed Potato', 50.00, 'Side Dish', '/images/mashed potato.png', 'No', 'No'),
(12, 'Onion Rings', 55.00, 'Side Dish', '/images/onion rings.png', 'No', 'No'),
(13, 'Garlic Bread', 45.00, 'Side Dish', '/images/garlic bread.png', 'No', 'No'),
(14, 'Mac n Cheese', 60.00, 'Side Dish', '/images/mac and cheese.png', 'No', 'No'),
(15, 'Kangkung', 45.00, 'Side Dish', '/images/kangkung.png', 'No', 'No'),
(16, 'Cheese Breadstick', 60.00, 'Side Dish', '/images/cheese breadstick.png', 'No', 'No'),
(17, 'Surya 😋', 70.00, 'Dessert', '/images/surya.jpeg', 'No', 'No'),
(18, 'Cheesecake', 80.00, 'Dessert', '/images/cheesecake.png', 'No', 'No'),
(19, 'Cinnamon Roll', 75.00, 'Dessert', '/images/cinnamon rolls.png', 'No', 'No'),
(20, 'Apple Pie', 70.00, 'Dessert', '/images/apple pie.png', 'No', 'No'),
(21, 'Brownie', 70.00, 'Dessert', '/images/brownies.png', 'No', 'No'),
(22, 'Macarons', 100.00, 'Dessert', '/images/macarons.png', 'No', 'No'),
(23, 'Sundae', 75.00, 'Dessert', '/images/sundae.png', 'No', 'No'),
(24, 'Chocolate Mousse', 80.00, 'Dessert', '/images/chocolate mousse.jpeg', 'No', 'No'),
(25, 'Mojito Mocktail', 50.00, 'Drink', '/images/mojito mocktail.jpeg', 'No', 'No'),
(26, 'Green Tea', 30.00, 'Drink', '/images/green tea.jpeg', 'No', 'No'),
(27, 'Black Tea', 30.00, 'Drink', '/images/black tea.jpeg', 'No', 'No'),
(28, 'Iced Latte', 40.00, 'Drink', '/images/iced latte.jpeg', 'No', 'No'),
(29, 'Vanilla Milkshake', 45.00, 'Drink', '/images/vanilla milkshake.jpeg', 'No', 'No'),
(30, 'Strawberry Smoothie', 45.00, 'Drink', '/images/strawberry smoothie.jpeg', 'No', 'No'),
(31, 'Coffe', 30.00, 'Drink', '/images/coffe.jpeg', 'No', 'No'),
(32, 'Apple Juice', 35.00, 'Drink', '/images/apple juice.jpeg', 'No', 'No');
