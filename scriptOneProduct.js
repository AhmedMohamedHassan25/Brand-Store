// Example product data
// const product = {
//     category: "jeans",
//     description: "Upgrade your denim collection with our versatile jeans. Designed for durability and comfort, they are perfect for any occasion. Make a statement with our stylish cuts and washes.",
//     discount: false,
//     id: 2,
//     image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRfQy8BHa3k_BSw-bsDnS-ihEo2QEvSk97iYhNYaVPVidgUUmfC",
//     price: 770,
//     product_name: "Classic Stonewash",
//     quantity: 332,
//     size: "3XL"
// };


// made by Menna Abd-Elaziz

var len;
// get product data from local storage
const storedProductData = localStorage.getItem('item');
if (storedProductData) {
    const product = JSON.parse(storedProductData);
    
    // Display product data in the document
    const productDisplayDiv = document.getElementById('product-display');
    len= product.length;
    console.log(len);
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    // productDiv.style.display='flex';
    // productDiv.style.flexDirection = 'column';
    // productDiv.style.alignItems = 'center';
    
    
    const productName = document.createElement('h2');
    productName.textContent = product[len - 1].product_name;
    productName.style.textAlign='center'
    
    productDiv.appendChild(productName);
    
    const productImage = document.createElement('img');
    productImage.src = product[len - 1].image;
    productImage.alt = product[len - 1].product_name;
    productImage.style.width='50%' ;
    productImage.style.marginLeft= '20px' ;
    productImage.style.borderRadius = '20px';
    

    productDiv.appendChild(productImage);
    
    const productCategory = document.createElement('p');
    productCategory.innerHTML = `<strong>Category:</strong> ${product[len - 1].category}`;
    // productCategory.style.display='inline-block';
    productDiv.appendChild(productCategory);
    
    const productId = document.createElement('p');
    productId.innerHTML = `<strong>ID:</strong> ${product[len - 1].id}`;
    // productId.style.display='inline-block';
    productDiv.appendChild(productId);
    
    const productDescription = document.createElement('p');
    productDescription.innerHTML = `<strong>Description:</strong> ${product[len - 1].description}`;
    productDiv.appendChild(productDescription);
    
    const productPrice = document.createElement('p');
    productPrice.innerHTML = `<strong>Price:</strong> $${product[len - 1].price}`;
    productDiv.appendChild(productPrice);
    
    const productSize = document.createElement('p');
    productSize.innerHTML = `<strong>Size:</strong> ${product[len - 1].size}`;
    productDiv.appendChild(productSize);
    
    const productQuantity = document.createElement('p');
    productQuantity.innerHTML = `<strong>Quantity:</strong> ${product[len - 1].quantity}`;
    productDiv.appendChild(productQuantity);
    
    const productDiscount = document.createElement('p');
    productDiscount.innerHTML = `<strong>Discount:</strong> ${product[len - 1].discount ? 'Yes' : 'No'}`;
    productDiv.appendChild(productDiscount);
    
    // Append the productDiv to the document body or any other container
    document.getElementById('product-display').appendChild(productDiv);
}
