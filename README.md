**Assignment 1: DOM Manipulation Only**<br>
**Output (Easy+Medium+Hard)--**<br>


![Screenshot (66) crop](https://github.com/user-attachments/assets/b201e062-e464-4eff-b072-d49f6e3ef085)
<br>
<br>
**Assignment 2: Array Methods Only**<br>
**Easy**<br>
**1)Filter: Create a new array called inStockProducts that contains only the products that are inStock. Log it to the console.**
```js
const inStockProducts = products.filter(product => product.inStock===true);
console.log(inStockProducts);
```
![Screenshot (60)](https://github.com/user-attachments/assets/b4de5ee5-82de-4bd6-bed7-85832dc94888)

**2)Filter: Create a new array called bookProducts that contains only the products in the "Books" category. Log it to the console.**
```js
const bookProducts = products.filter(product => product.category === "Books");
console.log(bookProducts);
```
![Screenshot (61)](https://github.com/user-attachments/assets/16d2a11f-2553-4a17-86f3-e0a589e57c26)

**Medium:** <br>
**1)Map:Create a new array called `productNames` that contains only the names of the products. Log it to the console. (e.g., `['Laptop', 'Headphones', ...]`)**
```js
const productNames = products.map(product => product.name);
console.log(productNames);
```
![Screenshot (62)](https://github.com/user-attachments/assets/c5221639-42c9-4791-86a3-65e1ef4ce12c)


**2)Map:Create a new array of strings where each string is formatted as "Product Name - $Price". (e.g., `['Laptop - $1200', 'Headphones - $150', ...]`). Log it to the console.**
```js
const formattedProducts = products.map(product => `${product.name} - $${product.price}`);
console.log(formattedProducts);
```
![Screenshot (63)](https://github.com/user-attachments/assets/6b67902f-d127-4566-ab75-49d464de72fd)

**Hard** <br>

**1)Reduce: Calculate the total price of all products in the `products` array. Log the final number to the console.**
```js
const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
console.log(totalPrice);
```
![Screenshot (64)](https://github.com/user-attachments/assets/80fd4ff0-7748-47e4-9646-2b7fb67a506d)

**2)Chaining Methods: Create a new array that contains the names of all "Electronics" products that are currently in stock. You must do this by **chaining** the `filter` and `map` methods. Log the result to the console.**
```js
const inStockElectronicsNames = products
    .filter(product => product.category === "Electronics" && product.inStock===true)
    .map(product => product.name);

console.log(inStockElectronicsNames);
```
![Screenshot (65)](https://github.com/user-attachments/assets/83660b13-2fe9-40fb-81cf-7a1c7729b177)
<br><br><br><br>
**Assignment 3: Combining DOM & Array Methods** <br><br>
**Easy**<br>
 ![Screenshot (55) crop](https://github.com/user-attachments/assets/333300fd-2ecc-4704-b087-4de59e93a945)

**Medium**<br>
![Screenshot (57)](https://github.com/user-attachments/assets/40605a30-8f7d-47f8-b804-b9f9623e3339)

**Hard**<br>
![Screenshot (58)](https://github.com/user-attachments/assets/661488d2-6733-4ce9-9364-637bf0757547)
