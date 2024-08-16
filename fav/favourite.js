// var storedData = localStorage.getItem('favourites');
let cartStorge = JSON.parse(localStorage.getItem("cartStorge")) || [];
let favourites = JSON.parse(localStorage.getItem("favourites"));
let isBlackStorage = JSON.parse(localStorage.getItem("isBlackStorage")) || {};
let quantityStorage = JSON.parse(localStorage.getItem("quantityStorage")) || {};
let productsOnCart = JSON.parse(localStorage.getItem("numOfProducts")) || 0;

var bigDiv = document.getElementById("product_fav");
var footer = document.getElementById("footer");

if (favourites) {
  // var products = JSON.parse(storedData);

  if (favourites.length > 0) {
    var head = document.createElement("h1");
    head.textContent = "Your Fav Products";
    document.getElementById("hh").appendChild(head);

    favourites.forEach((product) => {
      var productDiv = document.createElement("div");
      productDiv.setAttribute("class", "card");

    

      var productName = document.createElement("h2");
      productName.textContent = product.product_name; // Use id or name if available

      var productDiv1 = document.createElement("div");
      var productDiv2 = document.createElement("div");
      
      productDiv1.id="productDiv1";
      productDiv2.id="productDiv2";
    

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
          productsOnCart += 1;
          cartStorge.push(itemToAdd);
          localStorage.setItem("cartStorge", JSON.stringify(cartStorge));
          localStorage.setItem(
            "numOfProducts",
            JSON.stringify(productsOnCart)
          );
          quantityStorage[itemToAdd.id] = 1;
        } else {
          productsOnCart += 1;
          localStorage.setItem(
            "numOfProducts",
            JSON.stringify(productsOnCart)
          );
          quantityStorage[itemToAdd.id] = (quantityStorage[itemToAdd.id] || 0) + 1;
          console.log(itemToAdd.id);
        }
        localStorage.setItem("quantityStorage", JSON.stringify(quantityStorage));
      });

      var productDescription = document.createElement("p");

      productDescription.innerHTML = "<strong>Description:</strong> " + product.description;
      productDescription.id="desc";

      productDiv2.appendChild(productDescription);

      // var favourites = JSON.parse(localStorage.getItem("favourites")); // Use "favourites" key



      const remove = document.createElement("button");
      remove.setAttribute("class", "remove");
      remove.textContent = "Remove";
      productDiv2.appendChild(remove);

      const itemId = product.id; // Assuming `product.id` is available in the scope
      remove.addEventListener("click", function () {
        this.parentElement.remove(); // Remove element from DOM

        // Update favourites data in memory
        favourites = favourites.filter(function (item) {
          return item.id !== itemId; // Keep items except the one with matching id
        });
        localStorage.setItem("favourites", JSON.stringify(favourites));
        console.log(favourites);
        delete isBlackStorage[itemId];
        localStorage.setItem(
          "isBlackStorage",
          JSON.stringify(isBlackStorage)

   
          
        );
        productDiv.remove();
        // Persist the updated favourites data in local storage (potentially asynchronous)

        // Update productsOnCart only if it's relevant to favourites
      });

      // try {
      //   var favourites = JSON.parse(localStorage.getItem("favourites"));
      // } catch (error) {
      //   console.error("Error parsing favourites data:", error);
      //   favourites = []; // Initialize with an empty array if parsing fails
      // }

      bigDiv.appendChild(productDiv);
    });
  } else {
    var had = document.createElement("h2");
    had.textContent = "Your Fav Products Is Empty";

    document.getElementById("empty").appendChild(had);
    console.log("No favorite products found in local storage.");
  }
} else {
  var head = document.createElement("h1");

  head.textContent= "Your fav Product is Empty";
  head.style.marginTop = "150px";
  head.style.textAlign="center";
  // head.style.border = "20px black solid";
  Div.after(head);

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
