var storedData = localStorage.getItem('favourites');
let cartStorge = JSON.parse(localStorage.getItem("cartStorge")) || [];
let favourites = JSON.parse(localStorage.getItem("favourites")) || [];
let isBlackStorage = JSON.parse(localStorage.getItem("isBlackStorage")) || {};

if (storedData) {
  var products = JSON.parse(storedData);

  if (products.length > 0) {
    var head =document.createElement("h1");
    head.textContent="Your Fav Products";

    document.getElementById('hh').appendChild(head);



    products.forEach(product => {
      console.log(product); // Check product in console

      var productDiv = document.createElement('div');
    //productDiv.style.display="flex";
      productDiv.style.border='1px solid black';
      productDiv.style.width='100%';
      productDiv.style.marginBottom='15px';
      productDiv.style.marginRight='20px';
      productDiv.style.padding='15px';

      
      var productName = document.createElement('p');
      productName.textContent =product.product_name; // Use id or name if available
      productName.style.display="block";
      productName.style.margin="20";
      
      productDiv.appendChild(productName);
      
      var productImage = document.createElement('img');
      productImage.src = product.image[1] || ''; // Set default empty src if image[0] is missing
      productImage.style.display = 'block';
      productImage.style.width = '200px';
      productImage.style.margin = '0 20px 20px 0';
      productImage.style.height = '200px';
      
      productDiv.appendChild(productImage);
      
      
      var productprice=document.createElement('p');
      productprice.textContent=" Price : "+product.price +" "+" LE";
      productprice.style.display="inline";

      if (product.discount) {
        var markForDis = document.createElement("div")
        markForDis.setAttribute("class","markForDis")
        markForDis.innerHTML = "Sale 15%"
        var dicounted = document.createElement("p");
        dicounted.setAttribute("class", "dicounted")
        productprice.style.width = "35%";          
        productprice.style.textDecorationLine = "line-through";          
        var dicountedtext = document.createTextNode("LE "+ (product.price - product.price * 15/100)+" (-15%)" );
        dicounted.appendChild(dicountedtext);
        productDiv.appendChild(dicounted);
        productDiv.appendChild(markForDis)
      }
      productDiv.appendChild(productprice);
      

      
      
      var productDescription=document.createElement('p');
      productDescription.textContent=" Description: "+product.description;

      productDiv.appendChild(productDescription);






      document.getElementById('product_fav').appendChild(productDiv);

    });
} else {
    var had =document.createElement("h2");
    had.textContent="Your Fav Products Is Empty";
    
    document.getElementById('empty').appendChild(had);
    console.log('No favorite products found in local storage.');
}
} else {
    
    var had =document.createElement("h2");
    had.textContent="Your Fav Products";
    
    document.getElementById('empty').appendChild(had);
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


