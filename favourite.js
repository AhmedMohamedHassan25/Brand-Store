var Div = document.createElement('div');
Div.id = 'MyDiv';
Div.style.width = '100%';
Div.style.height = '100px';
// edit by Elghoul   //+  محتاجة تعديل عشان تلزق في السقف ونظب الدروب دون لست
Div.style.backgroundColor = 'wheat';
Div.style.position = 'sticky'; 
Div.style.top = '0'; 
Div.style.left="-10px";
Div.style.Top="0px";
Div.style.borderRadius="0px 0px 10px 10px";
Div.style.zIndex="1000";
//fillters.before(Div);

var CrtIcon = document.createElement('img');
CrtIcon.src = "./rss/Cart.png";
CrtIcon.style.height = '25px';
CrtIcon.style.position = 'absolute';
CrtIcon.style.cursor='pointer';
CrtIcon.style.bottom='40px'
CrtIcon.style.right = '120px'; 
Div.appendChild(CrtIcon);
CrtIcon.addEventListener('click', function() {
    window.open("cart.html", '_self');
});


var CartNumbDiv = document.createElement("div")
CartNumbDiv.style.height = '25px';
CartNumbDiv.style.width = '25px';
CartNumbDiv.style.position = 'absolute';
CartNumbDiv.style.bottom='60px'
CartNumbDiv.style.right = '105px'; 
CartNumbDiv.style.backgroundColor = 'red'; 
CartNumbDiv.style.borderRadius = '50%'; 
CartNumbDiv.style.textAlign = 'center'; 

var CartNumb= document.createElement("p")
CartNumb.style.marginTop = '-1px'; 

function updateCartDisplay() {
    CartNumb.textContent = cartStorge.length.toString();
}

CartNumbDiv.appendChild(CartNumb)
Div.appendChild(CartNumbDiv);



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
        
        var productDiv = document.createElement('div');
        productDiv.setAttribute("class", "card")

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
      
      productImage.addEventListener("mouseover", function () {
        productImage.src = product.image[1];
      });
      productImage.addEventListener("mouseleave", function () {
        productImage.src = product.image[0];
      });


      
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
      var addToCart = document.createElement("button");
      addToCart.setAttribute("class", "addtocart")
      var addtext = document.createTextNode("Add To Cart");
      addToCart.appendChild(addtext);
      productDiv.appendChild(addToCart);

      
      const itemToAdd = product;
      addToCart.addEventListener("click", function (event) {
          event.stopPropagation(); 
          function isItemInCart(item) {            
              for (let i = 0; i < cartStorge.length; i++) {
                console.log(product);
                    if (cartStorge[i].id == product.id) {
                        return true; 
                  
                      }
                    }
              return false;
          }
          if (!isItemInCart(itemToAdd)) {
              console.log(itemToAdd);
              console.log(cartStorge);
              var curnum = parseInt(CartNumb.textContent);
              var newnum = curnum + 1;
              CartNumb.textContent = newnum;
              cartStorge.push(itemToAdd);
              localStorage.setItem("cartStorge", JSON.stringify(cartStorge));
          }
      });

      
      
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

