const response = fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data => {
    const productsElement = document.getElementById('products');
    data.products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product-item')
    productElement.innerHTML = `
        <div class="cardBlock">
            <div class="img_holder">
                <img src="${product.thumbnail}" />
                <span class="price">$ ${product.price}</span>
            </div>
            <h1>${product.title}</h1>
            <p>${product.description}</p>
        </div>
    `
    productsElement.appendChild(productElement);
});
});