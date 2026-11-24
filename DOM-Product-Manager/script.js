

const productsContainer = document.querySelector("#products")

const products = [
    {
        id: 1,
        title: "Wireless Mouse",
        price: 25
    },
    {
        id: 2,
        title: "Mechanical Keyboard",
        price: 32
    },
    {
        id: 3,
        title: "Gaming Headset",
        price: 40
    },
]

products.forEach(function (item) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    const productTitle = document.createElement("h3");
    const productPrice = document.createElement("p");

    productTitle.textContent = item.title;
    productPrice.textContent = item.price;

    productCard.append(productTitle, productPrice);

    productsContainer.append(productCard);
})