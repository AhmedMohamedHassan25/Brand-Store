var storedData = localStorage.getItem('favourites');
let cartStorge = JSON.parse(localStorage.getItem("cartStorge")) || [];
let favourites = JSON.parse(localStorage.getItem("favourites")) || [];
let isBlackStorage = JSON.parse(localStorage.getItem("isBlackStorage")) || {};
//var cart = JSON.parse(localStorage.getItem("favourites")); // Assuming "cart" is the correct key
//var cart = JSON.parse(localStorage.getItem("favourites"));

var bigDiv = document.getElementById('product_fav');
var footer = document.getElementById("footer");

if (storedData) {
  var products = JSON.parse(storedData);

  if (products.length > 0) {
    var head = document.createElement("h1");
    head.textContent = "Your Fav Products";
    document.getElementById('hh').appendChild(head);



    products.forEach(product => {

      var productDiv = document.createElement('div');
      productDiv.setAttribute("class", "card")

      //productDiv.style.display="flex";
      productDiv.style.border = '1px solid black';
      productDiv.style.width = '100%';
      productDiv.style.marginBottom = '15px';
      productDiv.style.marginRight = '20px';
      productDiv.style.padding = '15px';


      var productName = document.createElement('p');
      productName.textContent = product.product_name; // Use id or name if available
      productName.style.display = "block";
      productName.style.margin = "20";

      productDiv.appendChild(productName);

      var productImage = document.createElement('img');
      productImage.src = product.image[1] || ''; // Set default empty src if image[0] is missing
      productImage.style.display = 'block';
      productImage.style.width = '200px';
      productImage.style.margin = '0 20px 20px 0';
      productImage.style.height = '200px';

      productDiv.appendChild(productImage);

      productImage.addEventListener("mouseover", function () {
        productImage.src = product.image[0];
      });
      productImage.addEventListener("mouseleave", function () {
        productImage.src = product.image[1];
      });



      var productprice = document.createElement('p');
      productprice.textContent = " Price : " + product.price + " " + " LE";
      productprice.style.display = "inline";

      if (product.discount) {
        var markForDis = document.createElement("div")
        markForDis.setAttribute("class", "markForDis")
        markForDis.innerHTML = "Sale 15%"
        var dicounted = document.createElement("p");
        dicounted.setAttribute("class", "dicounted")
        productprice.style.width = "35%";
        productprice.style.textDecorationLine = "line-through";
        var dicountedtext = document.createTextNode("LE " + (product.price - product.price * 15 / 100) + " (-15%)");
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
          // var curnum = parseInt(CartNumb.textContent);
          //var newnum = curnum + 1;
          // CartNumb.textContent = newnum;
          cartStorge.push(itemToAdd);
          localStorage.setItem("cartStorge", JSON.stringify(cartStorge));
        }
      });

      var productDescription = document.createElement('p');

      productDescription.textContent = " Description: " + product.description;

      productDiv.appendChild(productDescription);




      var favourites = JSON.parse(localStorage.getItem("favourites")); // Use "favourites" key

      let productsOnCart = JSON.parse(localStorage.getItem("numOfProducts")); // Assuming this tracks cart items
      
      var remove = document.createElement("button");
      remove.setAttribute("class", "remove");
      remove.innerHTML = "X";
      productDiv.appendChild(remove);
      
      remove.addEventListener("click", function () {
        const itemId = product.id; // Assuming `product.id` is available in the scope
      
        this.parentElement.remove(); // Remove element from DOM
      
        // Update favourites data in memory
        favourites = favourites.filter(function (item) {
          return item.id !== itemId; // Keep items except the one with matching id
        });
      
        // Persist the updated favourites data in local storage (potentially asynchronous)
        localStorage.setItem("favourites", JSON.stringify(favourites));
      
        // Update productsOnCart only if it's relevant to favourites
        if (productsOnCart) { // Check if productsOnCart exists
          productsOnCart -= 1;
          console.log(productsOnCart);
          localStorage.setItem("numOfProducts", JSON.stringify(productsOnCart));
        }
      });



      try {
        var favourites = JSON.parse(localStorage.getItem("favourites"));
      } catch (error) {
        console.error("Error parsing favourites data:", error);
        favourites = []; // Initialize with an empty array if parsing fails
      }
      
      
      





      bigDiv.appendChild(productDiv);


    });

  } else {
    var had = document.createElement("h2");
    had.textContent = "Your Fav Products Is Empty";

    document.getElementById('empty').appendChild(had);
    console.log('No favorite products found in local storage.');
  }
} else {

  var had = document.createElement("h2");
  had.textContent = "Your Fav Products";

  document.getElementById('empty').appendChild(had);
  console.log('No favourites found in local storage.');
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
})
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
