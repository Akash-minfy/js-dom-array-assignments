const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
    { id: 2, name: "Headphones", category: "Electronics", price: 150, inStock: false },
    { id: 3, name: "The Great Gatsby", category: "Books", price: 15, inStock: true },
    { id: 4, name: "Coffee Maker", category: "Home Goods", price: 60, inStock: true },
    { id: 5, name: "To Kill a Mockingbird", category: "Books", price: 12, inStock: false },
    { id: 6, name: "Smart Watch", category: "Electronics", price: 250, inStock: true },
];

//Easy
const productList = document.getElementById("product-list");
const listItems = products.map(product => `<li>${product.name}</li>`);
productList.innerHTML = listItems.join('');
    
//Medium
const inStockProducts = products.filter(product => product.inStock);

const productItems = inStockProducts.map(product => `
    <li class="product-item">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
    </li>
`);

// const productList = document.getElementById("product-list");
productList.innerHTML = productItems.join('');


//Hard
// const productList = document.getElementById("product-list");
productList.innerHTML = "";

products.forEach(product => {
     
    const li = document.createElement("li");

    const name = document.createElement("h3");
    name.textContent = product.name;

    const price = document.createElement("p");
    price.textContent = `$${product.price}`;

    li.appendChild(name);
    li.appendChild(price);
 
    if (!product.inStock) {
        li.classList.add("out-of-stock");
    }

    const categoryClass = "category-" + product.category.toLowerCase().split(' ').join('-');
    li.classList.add(categoryClass);

    productList.appendChild(li);
});

const totalInStockValue = products.reduce((sum, product) => {
    return product.inStock ? sum + product.price : sum;
}, 0);

const totalDiv = document.createElement("div");
totalDiv.textContent = `Total Value of In-Stock Items: $${totalInStockValue}`;

const main=document.querySelector('main');
main.appendChild(totalDiv);
