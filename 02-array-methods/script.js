const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
    { id: 2, name: "Headphones", category: "Electronics", price: 150, inStock: false },
    { id: 3, name: "The Great Gatsby", category: "Books", price: 15, inStock: true },
    { id: 4, name: "Coffee Maker", category: "Home Goods", price: 60, inStock: true },
    { id: 5, name: "To Kill a Mockingbird", category: "Books", price: 12, inStock: false },
    { id: 6, name: "Smart Watch", category: "Electronics", price: 250, inStock: true },
];

//Easy
const inStockProducts = products.filter(product => product.inStock===true);
console.log(inStockProducts);

const bookProducts = products.filter(product => product.category === "Books");
console.log(bookProducts);

//Medium    
const productNames = products.map(product => product.name);
console.log(productNames);

const formattedProducts = products.map(product => `${product.name} - $${product.price}`);
console.log(formattedProducts);

//Hard
const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
console.log(totalPrice);

const inStockElectronicsNames = products
    .filter(product => product.category === "Electronics" && product.inStock===true)
    .map(product => product.name);

console.log(inStockElectronicsNames);
