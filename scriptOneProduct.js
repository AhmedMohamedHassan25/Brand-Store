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
var product;
// get product data from local storage

var urlParams = new URLSearchParams(window.location.search);
var productID = urlParams.get('id');

console.log(productID);

var storedProductData = localStorage.getItem('item');
console.log(storedProductData);

if (storedProductData) {
    product = JSON.parse(storedProductData);
    // console.log(product[2].id);


    // Find the product matching the received ID
    // let foundProduct = null;
    // console.log(item.id);
    if (product && product.length > 0) {

        console.log("hello");
        var b = product[i];
        for (var i = 0; i < product.length; i++) {
            // console.log(b);

            // console.log("hello");

            console.log(product[i].id);
            if ((product[i].id) == productID) {
                console.log("hello");
                // foundProduct = item;


                // break;
                // const productDisplayDiv = document.getElementById('product-display');
                // const productDiv = document.createElement('div');
                // productDiv.className = 'product';
                // // ... (styling code for productDiv)

                // const productName = document.createElement('h2');
                // productName.textContent = product[i].product_name; // Access using foundProduct
                // productName.style.textAlign = 'center';

                // productDiv.appendChild(productName);

                // productDisplayDiv.appendChild(productDiv);
                /////////////////////////////////////////////////////////
                //     // Display product data in the document
                    const productDisplayDiv = document.getElementById('product-display');
                    // len= product.length;
                    console.log(product[i].id);
                    const productDiv = document.createElement('div');
                    productDiv.className = 'product';
                    // productDiv.style.display='flex';
                    // productDiv.style.flexDirection = 'column';
                    // productDiv.style.alignItems = 'center';


                    const productName = document.createElement('h2');
                    productName.textContent = product[i].product_name;
                    productName.style.textAlign='center'

                    productDiv.appendChild(productName);

                    const productImage = document.createElement('img');
                    productImage.src = product[i].image;
                    productImage.alt = product[i].product_name;
                    productImage.style.width='50%' ;
                    productImage.style.marginLeft= '20px' ;
                    productImage.style.borderRadius = '20px';


                    productDiv.appendChild(productImage);

                    const productCategory = document.createElement('p');
                    productCategory.innerHTML = `<strong>Category:</strong> ${product[i].category}`;
                    // productCategory.style.display='inline-block';
                    productDiv.appendChild(productCategory);

                    const productId = document.createElement('p');
                    productId.innerHTML = `<strong>ID:</strong> ${product[i].id}`;
                    // productId.style.display='inline-block';
                    productDiv.appendChild(productId);

                    const productDescription = document.createElement('p');
                    productDescription.innerHTML = `<strong>Description:</strong> ${product[i].description}`;
                    productDiv.appendChild(productDescription);

                    const productPrice = document.createElement('p');
                    productPrice.innerHTML = `<strong>Price:</strong> $${product[i].price}`;
                    productDiv.appendChild(productPrice);

                    const productSize = document.createElement('p');
                    productSize.innerHTML = `<strong>Size:</strong> ${product[i].size}`;
                    productDiv.appendChild(productSize);

                    const productQuantity = document.createElement('p');
                    productQuantity.innerHTML = `<strong>Quantity:</strong> ${product[i].quantity}`;
                    productDiv.appendChild(productQuantity);

                    const productDiscount = document.createElement('p');
                    productDiscount.innerHTML = `<strong>Discount:</strong> ${product[i].discount ? 'Yes' : 'No'}`;
                    productDiv.appendChild(productDiscount);

                    // Append the productDiv to the document body or any other container
                    document.getElementById('product-display').appendChild(productDiv);





            }
        }
    }

    // if (foundProduct) {
    // Display product data in the document
    // const productDisplayDiv = document.getElementById('product-display');

    // const productDiv = document.createElement('div');
    // productDiv.className = 'product';
    // // ... (styling code for productDiv)

    // const productName = document.createElement('h2');
    // productName.textContent = foundProduct.product_name; // Access using foundProduct
    // productName.style.textAlign = 'center';

    // productDiv.appendChild(productName);

    // productDisplayDiv.appendChild(productDiv);
} else {
    console.log("Product with ID", productID, "not found in local storage");
}
//   }

// if (storedProductData) {
//     const product = JSON.parse(storedProductData);

//     // Display product data in the document
//     const productDisplayDiv = document.getElementById('product-display');
//     // len= product.length;
//     console.log(product[productID].id);
//     const productDiv = document.createElement('div');
//     productDiv.className = 'product';
//     // productDiv.style.display='flex';
//     // productDiv.style.flexDirection = 'column';
//     // productDiv.style.alignItems = 'center';


//     const productName = document.createElement('h2');
//     productName.textContent = product[productID].product_name;
//     productName.style.textAlign='center'

//     productDiv.appendChild(productName);

//     const productImage = document.createElement('img');
//     productImage.src = product[productID].image;
//     productImage.alt = product[productID].product_name;
//     productImage.style.width='50%' ;
//     productImage.style.marginLeft= '20px' ;
//     productImage.style.borderRadius = '20px';


//     productDiv.appendChild(productImage);

//     const productCategory = document.createElement('p');
//     productCategory.innerHTML = `<strong>Category:</strong> ${product[productID - 1].category}`;
//     // productCategory.style.display='inline-block';
//     productDiv.appendChild(productCategory);

//     const productId = document.createElement('p');
//     productId.innerHTML = `<strong>ID:</strong> ${product[productID].id}`;
//     // productId.style.display='inline-block';
//     productDiv.appendChild(productId);

//     const productDescription = document.createElement('p');
//     productDescription.innerHTML = `<strong>Description:</strong> ${product[productID].description}`;
//     productDiv.appendChild(productDescription);

//     const productPrice = document.createElement('p');
//     productPrice.innerHTML = `<strong>Price:</strong> $${product[productID].price}`;
//     productDiv.appendChild(productPrice);

//     const productSize = document.createElement('p');
//     productSize.innerHTML = `<strong>Size:</strong> ${product[productID ].size}`;
//     productDiv.appendChild(productSize);

//     const productQuantity = document.createElement('p');
//     productQuantity.innerHTML = `<strong>Quantity:</strong> ${product[productID ].quantity}`;
//     productDiv.appendChild(productQuantity);

//     const productDiscount = document.createElement('p');
//     productDiscount.innerHTML = `<strong>Discount:</strong> ${product[productID ].discount ? 'Yes' : 'No'}`;
//     productDiv.appendChild(productDiscount);

//     // Append the productDiv to the document body or any other container
//     document.getElementById('product-display').appendChild(productDiv);
// }


function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;

    if (query === url || query === "") return;

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=", 2);
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) parms[n] = [];
        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
}
