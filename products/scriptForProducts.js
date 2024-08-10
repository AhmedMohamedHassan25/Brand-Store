// made by mohamed
/// resopnd and cards
var PriceRange = document.getElementById("priceRange");
var priceIndecator = document.getElementById("indPrice");
PriceRange.addEventListener("change", function () {
  priceIndecator.value = PriceRange.value;
  loadProducts(dropvalue, PriceRange.value, sizeRange.value);
});
var sizeIndecator = document.getElementById("indSize");
var sizeRange = document.getElementById("sizeRange");
sizeRange.addEventListener("change", function () {
  sizeIndecator.value = sizeRange.value;
  loadProducts(dropvalue, PriceRange.value, sizeRange.value);
});

console.log(sizeRange.value);
let item = [];
let cartStorge = parseInt(localStorage.getItem("cartStorge")) || [];
let favourites = JSON.parse(localStorage.getItem("favourites")) || [];
let isBlackStorage = JSON.parse(localStorage.getItem("isBlackStorage")) || {};
let productsOnCart = JSON.parse(localStorage.getItem("numOfProducts")) || 0;
function loadProducts(category, PriceRange, Size) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "../json/test.json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var json = JSON.parse(xhr.response);
      main.innerHTML = "";
      for (let i = 0; i < json.length; i++) {
        if (
          (!category || json[i].category == category) &&
          (!PriceRange || PriceRange > json[i].price) &&
          (!Size || json[i].size == Size)
        ) {
          CartNumb.textContent = productsOnCart.toString();
          var card = document.createElement("div");
          card.setAttribute("class", "card");
          const img = document.createElement("img");
          img.src = json[i].image[0];
          img.style.width = "250px";
          img.style.height = "250px";
          const favIconDiv = document.createElement("div");
          favIconDiv.setAttribute("class", "favIconDiv");
          const favIcon = document.createElement("i");
          favIcon.setAttribute("class", "fa-solid fa-heart");
          favIconDiv.appendChild(favIcon);
          let isBlack = isBlackStorage[json[i].id] || false;
          if (isBlack) {
            favIcon.style.color = "black";
          } else {
            favIcon.style.color = "white";
          }
          var title = document.createElement("p");
          title.style.display = "inline-block";
          title.style.width = "100%";
          title.style.marginBlock = "3px";
          var titletext = document.createTextNode(json[i].product_name);
          title.appendChild(titletext);
          var price = document.createElement("p");
          price.style.display = "inline-block";
          price.style.marginBlock = "5px";
          price.style.width = "100%";
          price.style.fontWeight = "600";
          var pricetext = document.createTextNode("LE " + json[i].price);
          price.appendChild(pricetext);
          var addToCart = document.createElement("button");
          addToCart.setAttribute("class", "addtocart");
          var addtext = document.createTextNode("Add To Cart");
          addToCart.appendChild(addtext);
          card.appendChild(img);
          card.appendChild(favIconDiv);
          card.appendChild(title);
          card.appendChild(price);
          if (json[i].discount) {
            var markForDis = document.createElement("div");
            markForDis.setAttribute("class", "markForDis");
            markForDis.innerHTML = "Sale 15%";
            var dicounted = document.createElement("p");
            dicounted.setAttribute("class", "dicounted");
            price.style.width = "35%";
            price.style.textDecorationLine = "line-through";
            var dicountedtext = document.createTextNode(
              "LE " + (json[i].price - (json[i].price * 15) / 100) + " (-15%)"
            );
            dicounted.appendChild(dicountedtext);
            card.appendChild(dicounted);
            card.appendChild(markForDis);
          }
          var size = document.createElement("p");
          size.setAttribute("class", "size");
          size.innerHTML = "Size: " + json[i].size;
          card.appendChild(size);
          card.appendChild(addToCart);
          main.appendChild(card);

          const targtedProduct = json[i];
          favIconDiv.addEventListener("click", function (event) {
            event.stopPropagation();
            if (!isBlack) {
              favIcon.style.color = "Black";
              favourites.push(targtedProduct);
              isBlackStorage[json[i].id] = true;
            } else {
              favIcon.style.color = "White";
              favourites = favourites.filter(function (item) {
                return item.id !== targtedProduct.id;
              });
              delete isBlackStorage[targtedProduct.id];
            }
            localStorage.setItem("favourites", JSON.stringify(favourites));
            localStorage.setItem(
              "isBlackStorage",
              JSON.stringify(isBlackStorage)
            );
            isBlack = !isBlack;
          });
          const itemToAdd = json[i];
          addToCart.addEventListener("click", function (event) {
            event.stopPropagation();
            function isItemInCart(item) {
              for (let i = 0; i < cartStorge.length; i++) {
                console.log(item);
                if (cartStorge[i].id == item.id) {
                  return true;
                }
              }
              return false;
            }
            if (!isItemInCart(itemToAdd)) {
              console.log(itemToAdd);
              console.log(cartStorge);
              productsOnCart += 1;
              CartNumb.innerHTML = "";
              CartNumb.textContent = productsOnCart.toString();
              cartStorge.push(itemToAdd);
              localStorage.setItem("cartStorge", JSON.stringify(cartStorge));
              localStorage.setItem(
                "numOfProducts",
                JSON.stringify(productsOnCart)
              );
            }
          });
          card.addEventListener("click", function (event) {
            if (!event.target.closest("button")) {
              const clickedProductId = json[i].id;
              window.open("../oneProduct/product.html", "_self");
              item.push(json[i]);
              localStorage.setItem("item", JSON.stringify(item));
            }
          });
          card.addEventListener("mouseover", function () {
            img.src = json[i].image[1];
          });
          card.addEventListener("mouseleave", function () {
            img.src = json[i].image[0];
          });
        }
      }
    }
  };
  xhr.send();
}
let SentCat = localStorage.getItem("category");
console.log(SentCat);

loadProducts(SentCat);

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

const fillters = document.getElementById("fillters");
fillters.before(Div);
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
HeartIcon.src = "../rss/Heart2.png";
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
applyHoverEffect(HeartIcon, "../fav/favourite.html");

var CartNumbDiv = document.createElement("div");
CartNumbDiv.style.height = "20px";
CartNumbDiv.style.width = "20px";
CartNumbDiv.style.position = "absolute";
CartNumbDiv.style.bottom = "60px";
CartNumbDiv.style.right = "105px";
CartNumbDiv.style.backgroundColor = "yellow";
CartNumbDiv.style.borderRadius = "50%";
CartNumbDiv.style.textAlign = "center";

var CartNumb = document.createElement("p");
CartNumb.style.marginTop = "-1px";

if (parseInt(localStorage.getItem("numOfProducts")) == NaN) {
  CartNumb.textContent = 0;
} 

CartNumbDiv.appendChild(CartNumb);
Div.appendChild(CartNumbDiv);

//end of header

//footer
const foot = document.getElementById("foot");
