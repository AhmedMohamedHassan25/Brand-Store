var storedData = localStorage.getItem('favourites');

if (storedData) {
  var products = JSON.parse(storedData);

  if (products.length > 0) {
    var head =document.createElement("h1");
    head.textContent="Your Fav Products";

    document.getElementById('hh').appendChild(head);



    products.forEach(product => {
      console.log(product); // Check product in console

      var productDiv = document.createElement('div');
      
      var productImage = document.createElement('img');
      productImage.src = product.image[1] || ''; // Set default empty src if image[0] is missing
      productImage.style.display = 'block';
      productImage.style.width = '100%';
      productImage.style.height = '350px';
      productDiv.appendChild(productImage);
      
      var productName = document.createElement('p');
      productName.textContent =product.product_name; // Use id or name if available
      productDiv.style.display="inline-block";
      productDiv.style.border='1px solid black';
      productDiv.style.margin='15px';
      
      productDiv.appendChild(productName);
      // Append to preferred container (choose one)
      document.getElementById('product_fav').appendChild(productDiv);
      // OR
      // document.getElementById('container').appendChild(productDiv);
    });
  } else {
    console.log('No favorite products found in local storage.');
  }
} else {
  console.log('No favourites found in local storage.');
}


    //var Product= product;
    //  for (var i=0 ; i<=product.le;i++){

    //      var productDisplayDiv = document.getElementById('container');
    //     // console.log(Product);

    //      var productDiv=document.getElementById('product_fav');
    //      var productName=document.getElementById('p_name');
    //      productName.textContent=Product.product_name;
    //      productName.style.textAlign='center'
    //      productDiv.appendChild(productName)

    //  }


