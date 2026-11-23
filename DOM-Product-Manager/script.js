

const productsContainer = document.querySelector("#products")
const productTitle = document.createElement("h3")
productTitle.textContent = "Wireless Mouse"
productsContainer.append(productTitle)

const productPrice = document.createElement("p")
productPrice.textContent = "$25"
productsContainer.append(productPrice)

const productCard = document.createElement("div");
productCard.append(productTitle, productPrice)
productsContainer.append(productCard)
productCard.classList.add("product-card")