// made by Menna Abd-Elaziz

var storedData = localStorage.getItem('item');
console.log(storedData);
if (storedData) {
    
    var product = JSON.parse(storedData);
    var Product= product[0];
    var productDisplayDiv = document.getElementById('product-display');
    console.log(Product);

    var productDiv=document.getElementById('container');
    var productName=document.getElementById('p_name');
    productName.textContent=Product.product_name;
    productName.style.textAlign='center'
    productDiv.appendChild(productName)

    
    var productImage = document.getElementById('main-image');
    productImage.src = Product.image[0];
    productImage.style.display='block';
    productImage.style.marginLeft='20px';
    productImage.style.marginRight='auto';
    productImage.alt = Product.product_name;
    productImage.style.width='50%' ;
    productImage.style.marginLeft= '20px' ;
    productImage.style.borderRadius = '20px';
    
    productDiv.appendChild(productImage);

    
    var thumbnails =document.getElementsByClassName("thumbnails")[0];
    
    thumbnails.style.textAlign="center";
    
    var img1 =document.getElementById("img1");
    img1.src=Product.image[1];
    img1.style.cursor="pointer";
    img1.style.width="130px";
    img1.style.height="130px";

    thumbnails.appendChild(img1);
    productDiv.appendChild(thumbnails);
    //    thumbnails.appendChild(img1);
    
    var img2 =document.getElementById("img2");
    img2.src=Product.image[2];
    img2.style.cursor="pointer";
    img2.style.width= "130px";
    img2.style.height="130px";
    
    thumbnails.appendChild(img2);
    productDiv.appendChild(thumbnails);
    
    // thumbnails.appendChild(img2);
    
    var img3 =document.getElementById("img3");
    img3.style.cursor="pointer";
    img3.style.width="130px";
    img3.style.height="130px";
    img3.src=Product.image[0];
    // thumbnails.appendChild(img3);
    
    thumbnails.appendChild(img3);
    productDiv.appendChild(thumbnails);
    



    var thumbnaills = document.querySelectorAll('.thumbnails img');
    console.log(thumbnaills);
    
    var mainImage = document.getElementById('main-image');

    thumbnaills.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Change the main image source
            console.log(this);
            
            mainImage.src = this.src;

            // Remove the active class from all thumbnails
            thumbnaills.forEach(img => img.classList.remove('active-thumbnail'));

            // Add the active class to the clicked thumbnail
            this.classList.add('active-thumbnail');
        });
    });
    
    

    var productCategory = document.getElementById('p_category');
    productCategory.innerHTML = `<strong>Category:</strong> ${Product.category}`;
    // productCategory.style.display='inline-block';
    productDiv.appendChild(productCategory);
    
    
    
    var productDescription = document.getElementById('p_decsription');
    productDescription.innerHTML = `<strong>Description:</strong> ${Product.description}`;
    productDiv.appendChild(productDescription);
    
    var productPrice = document.getElementById('p_price');
    productPrice.textContent= "Price: "+ Product.price+"  LE";
    productDiv.appendChild(productPrice);
    
    var productSize = document.getElementById('p_size');
    productSize.innerHTML = `<strong>Size:</strong> ${Product.size}`;
    productDiv.appendChild(productSize);
    
    var productQuantity = document.createElement('p');
    productQuantity.innerHTML = `<strong>Quantity:</strong> ${Product.quantity}`;
    productDiv.appendChild(productQuantity);


    
    var productDiscount = document.createElement('p');
    productDiscount.innerHTML = `<strong>Discount:</strong> ${Product.discount ? 'Yes' : 'No'}`;
    productDiv.appendChild(productDiscount);
    
    // Append the productDiv to the document body or any other container
    document.getElementById('product-display').appendChild(productDiv);
    
    

}    
 else {
    console.log("Product with ID", productID, "not found in local storage");
}








// var len;
// var product;

// // get product data from local storage
// var urlParams = new URLSearchParams(window.location.search);
// var productID = urlParams.get('id');

// console.log(productID);

// var storedProductData = localStorage.getItem('item');
// console.log(storedProductData);

// if (storedProductData) 
//     product = JSON.parse(storedProductData);
    
//     if (product && product.length > 0) {
        
//         console.log("hello");
//         var b = product[i];
//         for (var i = 0; i < product.length; i++) {
            

//             console.log(product[i].id);
//             if ((product[i].id) == productID) {
//                 console.log("hello");
//                 // foundProduct = item;
                
                
                
//                 // Display product data in the document
//                 console.log(product[i].id);
//                 // productDiv.style.display='flex';
//                 // productDiv.style.flexDirection = 'column';
//                 // productDiv.style.alignItems = 'center';
                
                



//             }
//         }
//     }





// // function parseURLParams(url) {
// //     var queryStart = url.indexOf("?") + 1,
// //         queryEnd = url.indexOf("#") + 1 || url.length + 1,
// //         query = url.slice(queryStart, queryEnd - 1),
// //         pairs = query.replace(/\+/g, " ").split("&"),
// //         parms = {}, i, n, v, nv;

// //     if (query === url || query === "") return;

// //     for (i = 0; i < pairs.length; i++) {
// //         nv = pairs[i].split("=", 2);
// //         n = decodeURIComponent(nv[0]);
// //         v = decodeURIComponent(nv[1]);

// //         if (!parms.hasOwnProperty(n)) parms[n] = [];
// //         parms[n].push(nv.length === 2 ? v : null);
// //     }
// //     return parms;
// // }
