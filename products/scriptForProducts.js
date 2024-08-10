var Div = document.createElement("div");
Div.id = "MyDiv";
Div.style.width = "100%";
Div.style.height = "100px";
// edit by Elghoul   //+  محتاجة تعديل عشان تلزق في السقف ونظب الدروب دون لست
Div.style.backgroundColor = "wheat";
Div.style.position = "sticky";
Div.style.top = "0";
Div.style.left = "-10px";
Div.style.Top = "0px";
Div.style.borderRadius = "0px 0px 10px 10px";
Div.style.zIndex = "1000";
fillters.before(Div);

var CrtIcon = document.createElement("img");
CrtIcon.src = "../rss/Cart.png";
CrtIcon.style.height = "25px";
CrtIcon.style.position = "absolute";
CrtIcon.style.cursor = "pointer";
CrtIcon.style.bottom = "40px";
CrtIcon.style.right = "120px";
Div.appendChild(CrtIcon);
CrtIcon.addEventListener("click", function () {
  window.open("../cart/cart.html", "_self");
});

var CartNumbDiv = document.createElement("div");
CartNumbDiv.style.height = "25px";
CartNumbDiv.style.width = "25px";
CartNumbDiv.style.position = "absolute";
CartNumbDiv.style.bottom = "60px";
CartNumbDiv.style.right = "105px";
CartNumbDiv.style.backgroundColor = "red";
CartNumbDiv.style.borderRadius = "50%";
CartNumbDiv.style.textAlign = "center";

var CartNumb = document.createElement("p");
CartNumb.style.marginTop = "-1px";

function updateCartDisplay() {
  CartNumb.textContent = parseInt(localStorage.getItem("numOfProducts"));
}

CartNumbDiv.appendChild(CartNumb);
Div.appendChild(CartNumbDiv);

var HeartIcon = document.createElement("img");
HeartIcon.src = "../rss/Heart.png";
HeartIcon.style.height = "23px";
HeartIcon.style.position = "absolute";
HeartIcon.style.right = "170px";
HeartIcon.style.bottom = "40px";
HeartIcon.style.cursor = "pointer";
Div.appendChild(HeartIcon);

var CatIcon = document.createElement("img");
CatIcon.src = "../rss/menu.png";
CatIcon.style.height = "23px";
CatIcon.style.position = "absolute";
CatIcon.style.right = "70px";
CatIcon.style.bottom = "40px";
CatIcon.style.cursor = "pointer";
Div.appendChild(CatIcon);

var dropdown = document.createElement("div");
dropdown.style.position = "absolute";
dropdown.style.display = "none";
dropdown.style.backgroundColor = "#f9f9f9";
dropdown.style.boxShadow = "0px 8px 16px 0px rgba(0,0,0,0.2)";
dropdown.style.right = "70px";
dropdown.style.display = "none"; //not expand by default
dropdown.style.bottom = "-230px";
Div.appendChild(dropdown);
var dropvalue;
console.log(dropvalue);
var CatArr = [
  "jeans",
  "t-shirts",
  "shirts",
  "hoodies",
  "jackets",
  "accessories",
];

CatArr.forEach(function (item) {
  var a = document.createElement("a");
  a.href = "#";
  a.textContent = item;
  a.style.color = "black";
  a.style.padding = "12px 16px";
  a.style.textDecoration = "none"; //remove line under text
  a.style.display = "block";
  a.addEventListener("mouseover", function () {
    a.style.backgroundColor = "#d3d3d3";
  });
  a.addEventListener("mouseout", function () {
    a.style.backgroundColor = "#f9f9f9";
  });
  a.addEventListener("click", function () {
    dropvalue = item;
    loadProducts(dropvalue, PriceRange.value, sizeRange.value);
  });
  dropdown.appendChild(a);
});

CatIcon.addEventListener("click", function () {
  //
  if (dropdown.style.display === "none") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
});

window.onclick = function (event) {
  //close dropdownlist if click on any place in window
  if (!event.target.matches("img")) {
    // if you click on other icon don't close dropdownlist
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    }
  }
};

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
function applyHoverEffectForCategory(element) {
  element.addEventListener("mouseover", function () {
    element.style.filter = "invert(50%) hue-rotate(180deg)";
  });

  element.addEventListener("mouseout", function () {
    element.style.filter = "none";
  });
}
applyHoverEffect(HeartIcon, "../rss/Heart2.png");
applyHoverEffectForCategory(CatIcon);

//end of header

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
              // var curnum = parseInt(CartNumb.textContent);
              // var newnum = curnum + 1;
              // CartNumb.textContent = newnum;
              productsOnCart += 1;
              CartNumb.textContent = productsOnCart.toString();
              cartStorge.push(itemToAdd);
              localStorage.setItem("cartStorge", JSON.stringify(cartStorge));
              localStorage.setItem("numOfProducts",JSON.stringify(productsOnCart)
              );
            }
          });
          updateCartDisplay();
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
