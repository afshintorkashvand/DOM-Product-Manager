

const productsContainer = document.querySelector("#products")



const productNameInput = document.querySelector("#product-name");
const productPriceInput = document.querySelector("#product-price");
const productForm = document.querySelector("form")

productForm.addEventListener("submit", function(){
    
})

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
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete"
    deleteButton.addEventListener("click", function () {
        productCard.remove()
        const productIndex = products.findIndex(function (product) {
            return product.id === item.id
        })
        products.splice(productIndex, 1)
    })

    productTitle.textContent = item.title;
    productPrice.textContent = item.price;

    productCard.append(productTitle, productPrice, deleteButton);

    productsContainer.append(productCard);
})

