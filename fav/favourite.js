
var cartStorge = JSON.parse(localStorage.getItem("cartStorge")) || [];
let favourites = JSON.parse(localStorage.getItem("favourites")) || [];
var storedData = localStorage.getItem('favourites') || [];
//let cartStorge = JSON.parse(localStorage.getItem("cartStorge")) || [];
let isBlackStorage = JSON.parse(localStorage.getItem("isBlackStorage")) || {};


var bigDiv = document.getElementById("product_fav");
var footer = document.getElementById("footer");
var productDiv = document.createElement("div");
var bestProd = document.createElement("div");
const cardemp = document.createElement("div");
const bestSel = document.createElement("p");

if (favourites!=0) {
  // var products = JSON.parse(storedData);

  if (favourites.length > 0) {
    var head = document.createElement("h1");
    head.textContent = "Your Fav Products";
    document.getElementById("hh").appendChild(head);

    favourites.forEach((product) => {
      var productDiv = document.createElement("div");
      productDiv.setAttribute("class", "card");

      //productDiv.style.display="flex";
      productDiv.style.border = "3px solid black ";
      productDiv.style.boxShadow = "4px 2px 0  #14202E ";
      productDiv.style.borderRadius = "10px ";
      productDiv.style.backgroundColor = "white ";
      productDiv.style.width = "60%";
      productDiv.style.display = "flex";
      productDiv.style.textAlign = "center";
      productDiv.style.justifyContent = "center";
      
      productDiv.style.marginBottom = "20px";
      productDiv.style.marginTop = "20px";
      productDiv.style.marginBottom = "20px";
      productDiv.style.marginLeft = "19%";
      productDiv.style.padding = "20px";

      var productName = document.createElement("h2");
      productName.textContent = product.product_name; // Use id or name if available

      var productDiv1 = document.createElement("div");
      var productDiv2 = document.createElement("div");
      
      productDiv1.style.width="50%";
      productDiv1.style.height="100%";
      productDiv2.style.width="50%";

      productDiv.appendChild(productDiv1);
      productDiv.appendChild(productDiv2);

      
            var productImage = document.createElement("img");
            productImage.src = product.image[1] || ""; // Set default empty src if image[0] is missing
            productImage.style.flex = "1";
            productImage.style.width = "250";
            productImage.style.height = "300px";
            productImage.style.borderRadius = "25px";
            productImage.style.position = "relative";
            productImage.style.left = "-50px";


      
            productDiv1.appendChild(productImage);
            productDiv2.appendChild(productName);

      productImage.addEventListener("mouseover", function () {
        productImage.src = product.image[0];
      });
      productImage.addEventListener("mouseleave", function () {
        productImage.src = product.image[1];
      });

      var productprice = document.createElement("p");
      productprice.textContent = " Price : " + product.price + " " + " LE";
      productprice.style.display = "block";

      if (product.discount) {
        var markForDis = document.createElement("div");
        markForDis.setAttribute("class", "markForDis");
        markForDis.textContent = "Sale 15%";
        markForDis.style.color = "#9a0707";
        markForDis.style.fontWeight = "bold";
        var dicounted = document.createElement("p");
        dicounted.setAttribute("class", "dicounted");
        productprice.style.textDecorationLine = "line-through";
        productprice.style.color = "#9a0707";
        var dicountedtext = document.createTextNode(
          "LE " + (product.price - (product.price * 15) / 100) + " (-15%)"
        );
        dicounted.appendChild(dicountedtext);
        productDiv2.appendChild(dicounted);
        productDiv2.appendChild(markForDis);
      }
      productDiv2.appendChild(productprice);
      var addToCart = document.createElement("button");
      addToCart.setAttribute("class", "addtocart");
      addToCart.style.width="300px";
      addToCart.style.height="30px";
      addToCart.style.backgroundColor="#14202E";
      addToCart.style.color="white";
      addToCart.style.fontSize="20px";
      addToCart.style.border="0";
      var addtext = document.createTextNode("Add To Cart");
      addToCart.appendChild(addtext);
      productDiv2.appendChild(addToCart);

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

          cartStorge.push(itemToAdd);
          localStorage.setItem("cartStorge", JSON.stringify(cartStorge));
        }
      });

      var productDescription = document.createElement("p");

      productDescription.innerHTML = "<strong>Description:</strong> " + product.description;
      productDescription.id="desc";

      productDiv2.appendChild(productDescription);

      // var favourites = JSON.parse(localStorage.getItem("favourites")); // Use "favourites" key


      let productsOnCart = JSON.parse(localStorage.getItem("numOfProducts")); // Assuming this tracks cart items

      const remove = document.createElement("button");
      remove.setAttribute("class", "remove");
      remove.textContent = "Remove";
      remove.style.width = "300px";
      remove.style.height = "30px";
      remove.style.backgroundColor="#14202E";
      remove.style.color="white";
      remove.style.fontSize="20px";
      remove.style.border="0";
      productDiv2.appendChild(remove);

      const itemId = product.id; // Assuming `product.id` is available in the scope
      remove.addEventListener("click", function () {
        this.parentElement.remove(); // Remove element from DOM

        // if(favourites.length==0){
          
        // }
        // Update favourites data in memory
        favourites = favourites.filter(function (item) {
          
          return item.id !== itemId; // Keep items except the one with matching id
        });
        localStorage.setItem("favourites", JSON.stringify(favourites));
        console.log(favourites);

         if (productsOnCart) {
          // Check if productsOnCart exists
          productsOnCart -= 1;
          console.log(productsOnCart);
          localStorage.setItem("numOfProducts", JSON.stringify(productsOnCart));
        }
      });

    
      bigDiv.appendChild(productDiv);
    });
  } else {
    
    var head = document.getElementById("hh")
    var main = document.getElementById("empty");
  
    head.innerHTML= "<h1>Your fav Product is Impty</h1>";
    head.style.marginTop = "150px";
    head.style.textAlign="center";
    // head.style.border = "20px black solid";
    productDiv.appendChild(head);
    main.appendChild(productDiv);
    console.log(favourites.length);
  
    const cartMessageContainer = document.getElementById('cart-message-container');
      const emptyCartContainer = document.createElement('div');
      emptyCartContainer.className = 'empty-cart-container';
  
      const emptyCartMessage = document.createElement('div');
      emptyCartMessage.className = 'empty-cart-message';
      // emptyCartMessage.textContent = 'Your cart is Empty';
  
      const emptyCartButton = document.createElement('button');
      emptyCartButton.className = 'empty-cart-button';
      emptyCartButton.textContent = 'Check out our products';
  
      // Append elements
      emptyCartContainer.appendChild(emptyCartMessage);
      emptyCartContainer.appendChild(emptyCartButton);
      cartMessageContainer.appendChild(emptyCartContainer);
  
      emptyCartButton.addEventListener('mouseover', function () {
          emptyCartButton.style.backgroundColor = 'rgb(20, 32, 46)';
          emptyCartButton.style.color = 'white';
      });
  
      emptyCartButton.addEventListener('mouseout', function () {
          emptyCartButton.style.backgroundColor = 'white';
          emptyCartButton.style.color = 'rgb(20, 32, 46)';
      });
  
  
      emptyCartButton.addEventListener("click", function () {
        localStorage.removeItem("category");
        window.open("../products/Products.html", "_self");
  
      });
  
  
  
  
  
  
  }
}
else {
  console.log("kmqkln");
  

  var head = document.getElementById("hh")
  var main = document.getElementById("empty");

  head.innerHTML= "<h1>Your fav Product is Impty</h1>";
  head.style.marginTop = "150px";
  head.style.textAlign="center";
  // head.style.border = "20px black solid";
  productDiv.appendChild(head);
  main.appendChild(productDiv);
  console.log(favourites.length);

  const cartMessageContainer = document.getElementById('cart-message-container');
    const emptyCartContainer = document.createElement('div');
    emptyCartContainer.className = 'empty-cart-container';

    const emptyCartMessage = document.createElement('div');
    emptyCartMessage.className = 'empty-cart-message';
    // emptyCartMessage.textContent = 'Your cart is Empty';

    const emptyCartButton = document.createElement('button');
    emptyCartButton.className = 'empty-cart-button';
    emptyCartButton.textContent = 'Check out our products';

    // Append elements
    emptyCartContainer.appendChild(emptyCartMessage);
    emptyCartContainer.appendChild(emptyCartButton);
    cartMessageContainer.appendChild(emptyCartContainer);

    emptyCartButton.addEventListener('mouseover', function () {
        emptyCartButton.style.backgroundColor = 'rgb(20, 32, 46)';
        emptyCartButton.style.color = 'white';
    });

    emptyCartButton.addEventListener('mouseout', function () {
        emptyCartButton.style.backgroundColor = 'white';
        emptyCartButton.style.color = 'rgb(20, 32, 46)';
    });


    emptyCartButton.addEventListener("click", function () {
      localStorage.removeItem("category");
      window.open("../products/Products.html", "_self");

    });






}




bigDiv.after(footer);






//start of header

var Div = document.createElement("div");

Div.style.display = "flex";
Div.id = "MyDiv";
Div.style.width = "100%";
Div.style.height = "100px";
Div.style.backgroundColor = "#14202E";
Div.style.position = "absolute";
Div.style.top = "0px";
Div.style.zIndex = "1000";
Div.style.left = "0px";
Div.style.padding = "0px";
Div.style.margin = "0px";

document.body.append(Div);
// logo
var logo = document.createElement("img");
logo.src = "../rss/White-Logo.png";
logo.style.height = "140px";
logo.style.width = "220px";
logo.style.position = "absolute";

logo.style.left = "5%";
logo.style.top = "-13px";

logo.style.cursor = "pointer";
logo.id = "logo";
logo.addEventListener("click", function () {
  window.location.href = "../index.html";
});
Div.appendChild(logo);

// categories
var LIST = document.createElement("div");
LIST.style.display = "inline-block";
LIST.style.width = "fit-content";
LIST.style.backgroundColor = "rgba(245, 222, 179, 0)";
LIST.style.Color = "#f6ead9";

var C1 = document.createElement("button");
var C2 = document.createElement("button");
var C3 = document.createElement("button");
var C4 = document.createElement("button");
var C5 = document.createElement("button");
var C6 = document.createElement("button");
var C7 = document.createElement("button");

C1.textContent = "All Products";
C2.textContent = "Jackets";
C3.textContent = "Hoodies";
C4.textContent = "jeans";
C5.textContent = "Shirts";
C6.textContent = "T-shirts";
C7.textContent = "Accessories";

C1.style.display = "inline";
C2.style.display = "inline";
C3.style.display = "inline";
C4.style.display = "inline";
C5.style.display = "inline";
C6.style.display = "inline";
C7.style.display = "inline";

C1.style.margin = "7px";
C2.style.margin = "7px";
C3.style.margin = "7px";
C4.style.margin = "7px";
C5.style.margin = "7px";
C6.style.margin = "7px";
C7.style.margin = "7px";

C2.style.backgroundColor = "rgba(245, 222, 179, 0)";
C1.style.backgroundColor = "rgba(245, 222, 179, 0)";
C3.style.backgroundColor = "rgba(245, 222, 179, 0)";
C4.style.backgroundColor = "rgba(245, 222, 179, 0)";
C5.style.backgroundColor = "rgba(245, 222, 179, 0)";
C6.style.backgroundColor = "rgba(245, 222, 179, 0)";
C7.style.backgroundColor = "rgba(245, 222, 179, 0)";

C2.style.border = "0";
C1.style.border = "0";
C3.style.border = "0";
C4.style.border = "0";
C5.style.border = "0";
C6.style.border = "0";
C7.style.border = "0";

C1.onclick = function () {
  localStorage.removeItem("category");
  window.open("../products/Products.html", "_self");
};
C2.onclick = function () {
  sending("Jackets");
};
C3.onclick = function () {
  sending("Hoodies");
};
C4.onclick = function () {
  sending("Jeans");
};
C5.onclick = function () {
  sending("Shirts");
};
C6.onclick = function () {
  sending("T-shirts");
};
C7.onclick = function () {
  sending("Accessories");
};

function sending(category) {
  localStorage.setItem("category", category);
  window.open("../products/Products.html", "_self");
}

function HoverEffect(element) {
  element.style.color = "#f6ead9";
  element.addEventListener("mouseover", function () {
    element.style.transition =
      "transform 0.2s ease-in-out, color 0.2s ease-in-out";
    element.style.transform = "scale(1.05)";
    element.style.color = "#E1A140";
  });

  element.addEventListener("mouseout", function () {
    element.style.transform = "scale(1)";
    element.style.color = "white";
  });
}

HoverEffect(C1);
HoverEffect(C2);
HoverEffect(C3);
HoverEffect(C4);
HoverEffect(C5);
HoverEffect(C6);
HoverEffect(C7);

C1.style.fontSize = "15px";
C2.style.fontSize = "15px";
C3.style.fontSize = "15px";
C4.style.fontSize = "15px";
C5.style.fontSize = "15px";
C6.style.fontSize = "15px";
C7.style.fontSize = "15px";

LIST.style.position = " absolute";
LIST.style.left = "31%";
LIST.style.top = "30px";
LIST.style.color = "#f4f4f4";

LIST.appendChild(C1);
C1.after(C2);
C2.after(C3);
C3.after(C4);
C4.after(C5);
C5.after(C6);
C6.after(C7);

LIST.style.transition = "transform";

Div.appendChild(LIST);

// cart icon
var CrtIcon = document.createElement("img");
CrtIcon.src = "../rss/Cart2.png";
CrtIcon.style.height = "22px";
CrtIcon.style.position = "absolute";
CrtIcon.style.cursor = "pointer";
CrtIcon.style.bottom = "40px";
CrtIcon.style.right = "120px";

Div.appendChild(CrtIcon);

//heart icon
var HeartIcon = document.createElement("img");
HeartIcon.src = "../rss/icons8-administrator-male-96.png";
HeartIcon.style.height = "23px";
HeartIcon.style.position = "absolute";
HeartIcon.style.right = "170px";
HeartIcon.style.bottom = "40px";
HeartIcon.style.cursor = "pointer";
Div.appendChild(HeartIcon);

function applyHoverEffect(element, url) {
  element.addEventListener("mouseover", function () {
    element.style.filter = "invert(50%) hue-rotate(180deg)";
  });

  element.addEventListener("mouseout", function () {
    element.style.filter = "none";
  });

  element.addEventListener("click", function () {
    window.location.href = url;
  });
}

applyHoverEffect(CrtIcon, "../cart/cart.html");
applyHoverEffect(HeartIcon, "../login/login.html");

//end of header
