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
 
    if (product && product.length > 0) {

        console.log("hello");
        var b = product[i];
        for (var i = 0; i < product.length; i++) {
            

            console.log(product[i].id);
            if ((product[i].id) == productID) {
                console.log("hello");
                // foundProduct = item;


            
                     // Display product data in the document
                    const productDisplayDiv = document.getElementById('product-display');
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


} else {
    console.log("Product with ID", productID, "not found in local storage");
}



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
