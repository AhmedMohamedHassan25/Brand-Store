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
    
    thumbnails.style.marginTop="20px";

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
    
    

    // var productCategory = document.getElementById('p_category');
    // productCategory.innerHTML = `<strong>Category:</strong> ${Product.category}`;
    // // productCategory.style.display='inline-block';
    // productDiv.appendChild(productCategory);
    
    var paras=document.getElementById("pras");
    
    
    var productDescription = document.getElementById('p_decsription');
    productDescription.innerHTML = `<strong>Description:</strong> ${Product.description}`;
    paras.appendChild(productDescription);


    productDiv.appendChild(paras);
    
    // var productPrice = document.getElementById('p_price');
    // productPrice.textContent= "Price: "+ Product.price+"  LE";
    // productDiv.appendChild(productPrice);
    
    var productSize = document.getElementById('p_size');
    productSize.innerHTML = `<strong>Size:</strong> ${Product.size}`;

    paras.appendChild(productSize);
    productDiv.appendChild(paras);



    //productDiv.appendChild(productSize);


    
    var productQuantity = document.createElement('p');
    productQuantity.innerHTML = `<strong>Quantity:</strong> ${Product.quantity}`;

    paras.appendChild(productQuantity);
    productDiv.appendChild(paras);
    
    
    
    var productDiscount = document.createElement('p');
    
    if (!Product.discount) {
        
        var productPrice = document.getElementById('p_price');
        productPrice.innerHTML = `<strong>Price : </strong> ${Product.price} LE `;
        productDiv.appendChild(productPrice);
        paras.appendChild(productPrice);


    productDiv.appendChild(paras);
    }
    else{
        var discount =document.getElementById("discound") ;
        discount.innerHTML=`<strong>Sale: </strong> -15%`;
        //discount.style.textAlign="center";

        paras.appendChild(discount)
         
        var productPrice = document.getElementById('p_price');
        productPrice.innerHTML = `<strong>Price After Sale : </strong> ${(Product.price - Product.price * 15/100)}LE `;
      //  productDiv.appendChild(productPrice);

        paras.appendChild(productPrice);


        productDiv.appendChild(paras);

    //     var productPrice = document.getElementById('p_price');
    //     productPrice.innerHTML = ` `;
    //     productDiv.appendChild(productPrice);
        
    //     var markForDis = document.createElement("div")
    //     var dicountedtext=document.createElement("p")
    //     // var dicounted = document.createElement("p");
    //     markForDis.innerHTML =  `<strong>Sale : </strong>  -15%  `;
    //     // markForDis.setAttribute("class","markForDis")
    //     // dicounted.setAttribute("class", "dicounted")
    //     productPrice.style.width = "35%";          
    //     productPrice.style.textDecorationLine = "line-through";          
    //     dicountedtext .innerHTML=` <strong>Price After Sale:</strong> ${(Product.price - Product.price * 15/100)} LE `;
    //     productDiv.appendChild(markForDis)
    //     dicounted.appendChild(dicountedtext);
    //    // productDiv.appendChild(dicounted);
    //     paras.appendChild(dicounted);
    //     productDiv.appendChild(paras);


        
      }

    //productDiv.appendChild(productDiscount);
    
    // Append the productDiv to the document body or any other container
    document.getElementById('product-display').appendChild(productDiv);
    
    

}    
 else {
    console.log("Product with ID", productID, "not found in local storage");
}




