<<<<<<< HEAD
=======
var cartdiv = document.getElementById("cartdiv");
var cart = JSON.parse(localStorage.getItem("cartStorge"));

console.log(cart);
if (cart.length == 0) {
  var empityParag = document.createElement("p");
  empityParag.setAttribute("id", "empityParag");
  empityParag.innerHTML = "Your cart is Empity";
  empityParag.style.textAlign = "center";
  var checkproducts = document.createElement("button");
  var checkproductstext = document.createTextNode("Chick out our products");
  checkproducts.appendChild(checkproductstext);
  checkproducts.setAttribute("id", "empitycartbtn");
  cartdiv.appendChild(empityParag);
  cartdiv.appendChild(checkproducts);
  checkproducts.addEventListener("click", function () {
    localStorage.removeItem("category");
    window.location.href = "../products/Products.html";
  });
  const line = document.createElement("hr");
  cartdiv.appendChild(line);
  const bestSel = document.createElement("p");
  bestSel.setAttribute("id", "bestSel");
  bestSel.innerHTML = "Best Sellers";
  cartdiv.appendChild(bestSel);
  const bestProd = document.createElement("div");
  cartdiv.appendChild(bestProd);
  function updateCartDisplay() {
    CartNumb.textContent = cartStorge.length.toString();
  }

  const CartNumb = document.createElement("p");
  let item = [];
  let cartStorge = JSON.parse(localStorage.getItem("cartStorge")) || [];
  let favourites = JSON.parse(localStorage.getItem("favourites")) || [];
  let isBlackStorage = JSON.parse(localStorage.getItem("isBlackStorage")) || {};
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "../json/test.json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var json = JSON.parse(xhr.response);
      for (let i = 0; i < json.length; i++) {
        if (json[i].BestSeller) {
          const cardemp = document.createElement("div");
          cardemp.setAttribute("class", "cardemp");
          const imgemp = document.createElement("img");
          imgemp.setAttribute("class", "imgemp");
          imgemp.src = json[i].image[0];
          imgemp.style.width = "250px";
          imgemp.style.height = "250px";
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
          var titleEmp = document.createElement("p");
          titleEmp.style.display = "inline-block";
          titleEmp.style.width = "100%";
          titleEmp.style.marginBlock = "3px";
          var titletext = document.createTextNode(json[i].product_name);
          titleEmp.appendChild(titletext);
          var priceEmp = document.createElement("p");
          priceEmp.style.display = "inline-block";
          priceEmp.style.marginBlock = "5px";
          priceEmp.style.width = "100%";
          priceEmp.style.fontWeight = "600";
          var pricetext = document.createTextNode("LE " + json[i].price);
          priceEmp.appendChild(pricetext);
          var addToCart = document.createElement("button");
          addToCart.setAttribute("class", "addtocart");
          var addtext = document.createTextNode("Add To Cart");
          addToCart.appendChild(addtext);
          cardemp.appendChild(imgemp);
          cardemp.appendChild(favIconDiv);
          cardemp.appendChild(titleEmp);
          cardemp.appendChild(priceEmp);
          if (json[i].discount) {
            var markForDis = document.createElement("div");
            markForDis.setAttribute("class", "markForDisEmp");
            markForDis.innerHTML = "Sale 15%";
            var dicountedEmb = document.createElement("p");
            dicountedEmb.setAttribute("class", "dicountedEmb");
            priceEmp.style.width = "35%";
            priceEmp.style.textDecorationLine = "line-through";
            var dicountedtext = document.createTextNode(
              "LE " + (json[i].price - (json[i].price * 15) / 100) + " (-15%)"
            );
            dicountedEmb.appendChild(dicountedtext);
            cardemp.appendChild(dicountedEmb);
            cardemp.appendChild(markForDis);
          }
          var sizeEmp = document.createElement("p");
          sizeEmp.setAttribute("class", "sizeEmp");
          sizeEmp.innerHTML = "Size: " + json[i].size;
          cardemp.appendChild(sizeEmp);
          cardemp.appendChild(addToCart);
          bestProd.appendChild(cardemp);

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
              var curnum = parseInt(CartNumb.textContent);
              var newnum = curnum + 1;
              CartNumb.textContent = newnum;
              cartStorge.push(itemToAdd);
              localStorage.setItem("cartStorge", JSON.stringify(cartStorge));
            }
          });

          cardemp.addEventListener("click", function (event) {
            if (!event.target.closest("button")) {
              const clickedProductId = json[i].id;
              window.open("../oneProduct/product.html", "_self");
              item.push(json[i]);
              localStorage.setItem("item", JSON.stringify(item));
            }
          });
          cardemp.addEventListener("mouseover", function () {
            imgemp.src = json[i].image[1];
          });
          cardemp.addEventListener("mouseleave", function () {
            imgemp.src = json[i].image[0];
          });
          updateCartDisplay();
        }
      }
    }
  };
  xhr.send();
} else {
  var carthead = document.createElement("div");
  var productdiv = document.createElement("p");
  carthead.setAttribute("id", "carthead");
  productdiv.innerHTML = "Product";
  productdiv.setAttribute("id", "productdiv");
  var pricediv = document.createElement("p");
  pricediv.innerHTML = "Price";
  pricediv.setAttribute("id", "pricediv");
  var amountdiv = document.createElement("p");
  amountdiv.innerHTML = "Amount";
  amountdiv.setAttribute("id", "amountdiv");
  var totaldiv = document.createElement("p");
  totaldiv.innerHTML = "Total";
  totaldiv.setAttribute("id", "totaldiv");
  carthead.appendChild(productdiv);
  carthead.appendChild(pricediv);
  carthead.appendChild(amountdiv);
  carthead.appendChild(totaldiv);

  cartdiv.appendChild(carthead);
  var sidediv = document.createElement("div");
  sidediv.setAttribute("id", "sidediv");
  cartdiv.appendChild(sidediv);

  let productsOnCart = JSON.parse(localStorage.getItem("numOfProducts"));
  let overAllPrice = 0;
  const storedQuantities =
    JSON.parse(localStorage.getItem("cartQuantities")) || {};
  const SubtotalAmount = document.createElement("p");
  for (let i = 0; i < cart.length; i++) {
    var cartcarddiv = document.createElement("div");
    cartcarddiv.setAttribute("class", "cartcarddiv");
    cartdiv.appendChild(cartcarddiv);
    var cartcardimg = document.createElement("img");
    cartcardimg.setAttribute("class", "cartcardimg");
    cartcardimg.src = cart[i].image[0];
    cartcarddiv.appendChild(cartcardimg);

    var Title = document.createElement("p");
    Title.setAttribute("class", "cartcardtitle");
    Title.innerHTML = cart[i].product_name;
    cartcarddiv.appendChild(Title);

    var categ = document.createElement("p");
    categ.setAttribute("class", "categ");
    categ.innerHTML = " category: " + cart[i].category;
    cartcarddiv.appendChild(categ);

    var quantity = document.createElement("p");
    quantity.setAttribute("class", "quantity");
    quantity.innerHTML = cart[i].quantity + " pieces left !";
    cartcarddiv.appendChild(quantity);

    var price = document.createElement("p");
    price.setAttribute("class", "price");
    price.innerHTML = "LE " + cart[i].price;
    cartcarddiv.appendChild(price);

    if (cart[i].discount) {
      var markForDis = document.createElement("div");
      markForDis.setAttribute("class", "markForDis");
      markForDis.innerHTML = "Sale 15%";
      const dicounted = document.createElement("p");
      dicounted.setAttribute("class", "dicounted");
      price.style.marginLeft = "200px";
      price.style.textDecorationLine = "line-through";
      dicounted.innerHTML =
        "LE " + (cart[i].price - (cart[i].price * 15) / 100) + " (-15%)";
      cartcarddiv.appendChild(dicounted);
      cartcarddiv.appendChild(markForDis);
    }

    const counter = document.createElement("input");
    counter.setAttribute("type", "number");
    counter.setAttribute("class", "counterinput");
    counter.setAttribute("value", storedQuantities[cart[i].id] || 1);
    counter.setAttribute("max", 10);
    counter.setAttribute("min", 1);
    cartcarddiv.appendChild(counter);

    const totalprice = document.createElement("p");
    totalprice.setAttribute("class", "totalprice");
    totalprice.setAttribute("id", cart[i].id);
    const totalpriceNumber = cart[i].price;
    const discountedTotal = parseInt(
      cart[i].price - (cart[i].price * 15) / 100
    );
    if (cart[i].discount) {
      totalprice.innerHTML = "LE " + discountedTotal;
      overAllPrice += discountedTotal;
    } else {
      totalprice.innerHTML = "LE " + totalpriceNumber;
      overAllPrice += totalpriceNumber;
    }
    cartcarddiv.appendChild(totalprice);

    const tprice = document.getElementById(cart[i].id);
    let countValue = counter.value;

    counter.addEventListener("change", function () {
      let previousCountValue = countValue;
      countValue = counter.value;

      if (cart[i].discount) {
        if (countValue > previousCountValue) {
          tprice.innerHTML = "LE " + countValue * discountedTotal;
          overAllPrice += (countValue - previousCountValue) * discountedTotal;
          productsOnCart += 1;
          localStorage.setItem("numOfProducts", JSON.stringify(productsOnCart));
          console.log(productsOnCart);
        } else if (countValue < previousCountValue) {
          tprice.innerHTML = "LE " + countValue * discountedTotal;
          overAllPrice -= (previousCountValue - countValue) * discountedTotal;
          productsOnCart -= 1;
          localStorage.setItem("numOfProducts", JSON.stringify(productsOnCart));
          console.log(productsOnCart);
        }
      } else {
        if (countValue > previousCountValue) {
          tprice.innerHTML = "LE " + countValue * totalpriceNumber;
          overAllPrice += (countValue - previousCountValue) * totalpriceNumber;
          productsOnCart += 1;
          localStorage.setItem("numOfProducts", JSON.stringify(productsOnCart));
          console.log(productsOnCart);
        } else if (countValue < previousCountValue) {
          tprice.innerHTML = "LE " + countValue * totalpriceNumber;
          overAllPrice -= (previousCountValue - countValue) * totalpriceNumber;
          productsOnCart -= 1;
          localStorage.setItem("numOfProducts", JSON.stringify(productsOnCart));
          console.log(productsOnCart);
        }
      }
      SubtotalAmount.innerHTML = overAllPrice;
      console.log(overAllPrice);
    });
    const isDiscount = cart[i].discount;
    var remove = document.createElement("button");
    remove.setAttribute("class", "remove");
    remove.innerHTML = "X";
    cartcarddiv.appendChild(remove);
    const itemId = cart[i].id;
    remove.addEventListener("click", function () {
      if (isDiscount) {
        overAllPrice -= discountedTotal * counter.value;
      } else {
        overAllPrice -= totalpriceNumber * counter.value;
      }
      console.log(overAllPrice);
      this.parentElement.remove();
      cart = cart.filter(function (item) {
        return item.id !== itemId;
      });
      localStorage.setItem("cartStorge", JSON.stringify(cart));
      productsOnCart -= 1;
      console.log(productsOnCart);
      localStorage.setItem("numOfProducts", JSON.stringify(productsOnCart));
      SubtotalAmount.innerHTML = overAllPrice;
    });
    console.log(overAllPrice);
  }
  const Subtotal = document.createElement("p");
  Subtotal.setAttribute("id", "Subtotal");
  Subtotal.innerHTML = "Subtotal";
  sidediv.appendChild(Subtotal);
  SubtotalAmount.setAttribute("id", "SubtotalAmount");
  SubtotalAmount.innerHTML = "LE " + overAllPrice;
  sidediv.appendChild(SubtotalAmount);
  const check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  check.setAttribute("name", "TOS");
  check.setAttribute("id", "TOS");
  sidediv.appendChild(check);
  const terms = document.createElement("label");
  terms.setAttribute("id", "termsLable");
  terms.setAttribute("for", "TOS");
  terms.innerHTML = "I Agree With ";
  sidediv.appendChild(terms);
  const termsOfServes = document.createElement("a");
  termsOfServes.innerHTML = "Terms & Conditions";
  termsOfServes.addEventListener("click", function () {
    window.open(
      "./Terms.html",
      "_blank",
      "width=700,height=1000",
      "top=500,left=500"
    );
  });
  sidediv.appendChild(termsOfServes);
  const buybtn = document.createElement("button");
  buybtn.setAttribute("id", "buyBtn");
  buybtn.innerHTML = "Proced To Checkout";
  buybtn.disabled = true;
  sidediv.appendChild(buybtn);
  let users = JSON.parse(localStorage.getItem("users"));
  console.log(users);
  check.addEventListener("change", function () {
    if (check.checked) {
      buybtn.disabled = false;
      buybtn.style.backgroundColor = "white";
      buybtn.style.cursor = "Pointer";
    } else {
      buybtn.disabled = true;
      buybtn.style.backgroundColor = "gray";
      buybtn.style.cursor = "auto";
    }
  });
  const LogDiv = document.createElement("div");
  LogDiv.style.marginTop = "10px";
  const notRegesterd = document.createElement("p");
  notRegesterd.innerHTML = "Must login to Do this step";
  const logbtn = document.createElement("button");
  logbtn.innerHTML = "Login";
  logbtn.addEventListener("click", function () {
    window.open("../login/login.html", "_self");
  });

  buybtn.addEventListener("click", function () {
    if (!users) {
      LogDiv.innerHTML = "";
      LogDiv.appendChild(notRegesterd);
      LogDiv.appendChild(logbtn);
      sidediv.appendChild(LogDiv);
    } else {
      window.open("../Buy/buy.html", "_self");
    }
  });
  const continueShopping = document.createElement("button");
  continueShopping.setAttribute("id", "continueShopping");
  continueShopping.innerHTML = "Continue Shopping";
  sidediv.appendChild(continueShopping);
  continueShopping.addEventListener("click", function () {
    localStorage.removeItem("category");
    window.open("../products/Products.html", "_self");
  });
}
>>>>>>> cbd6d21f4eeba63225b55a0452ae6a25cdbe956a

const h2text = document.getElementById("h2Text");

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

CartNumbDiv.appendChild(CartNumb);
if (parseInt(localStorage.getItem("numOfProducts")) == NaN) {
  CartNumb.textContent = 0;
}
Div.appendChild(CartNumbDiv);

//end of header




var cartdiv = document.getElementById("cartdiv");
var cart = JSON.parse(localStorage.getItem("cartStorge"));
let productsOnCart = JSON.parse(localStorage.getItem("numOfProducts"));

console.log(cart);
if (cart.length == 0) {
  var empityParag = document.createElement("p");
  empityParag.setAttribute("id", "empityParag");
  empityParag.innerHTML = "Your cart is Empity";
  empityParag.style.textAlign = "center";
  var checkproducts = document.createElement("button");
  var checkproductstext = document.createTextNode("Chick out our products");
  checkproducts.appendChild(checkproductstext);
  checkproducts.setAttribute("id", "empitycartbtn");
  cartdiv.appendChild(empityParag);
  cartdiv.appendChild(checkproducts);
  checkproducts.addEventListener("click", function () {
    localStorage.removeItem("category");
    window.location.href = "../products/Products.html";
  });
  const line = document.createElement("hr");
  cartdiv.appendChild(line);
  const bestSel = document.createElement("p");
  bestSel.setAttribute("id", "bestSel");
  bestSel.innerHTML = "Best Sellers";
  cartdiv.appendChild(bestSel);
  const bestProd = document.createElement("div");
  cartdiv.appendChild(bestProd);

  let item = [];
  let cartStorge = JSON.parse(localStorage.getItem("cartStorge")) || [];
  let favourites = JSON.parse(localStorage.getItem("favourites")) || [];
  let isBlackStorage = JSON.parse(localStorage.getItem("isBlackStorage")) || {};
  // let productsOnCart = JSON.parse(localStorage.getItem("numOfProducts")) || 0;
  console.log(productsOnCart);
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "../json/test.json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var json = JSON.parse(xhr.response);
      for (let i = 0; i < json.length; i++) {
        if (json[i].BestSeller) {
          CartNumb.textContent = productsOnCart.toString();
          const cardemp = document.createElement("div");
          cardemp.setAttribute("class", "cardemp");
          const imgemp = document.createElement("img");
          imgemp.setAttribute("class", "imgemp");
          imgemp.src = json[i].image[0];
          imgemp.style.width = "250px";
          imgemp.style.height = "250px";
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
          var titleEmp = document.createElement("p");
          titleEmp.style.display = "inline-block";
          titleEmp.style.width = "100%";
          titleEmp.style.marginBlock = "3px";
          var titletext = document.createTextNode(json[i].product_name);
          titleEmp.appendChild(titletext);
          var priceEmp = document.createElement("p");
          priceEmp.style.display = "inline-block";
          priceEmp.style.marginBlock = "5px";
          priceEmp.style.width = "100%";
          priceEmp.style.fontWeight = "600";
          var pricetext = document.createTextNode("LE " + json[i].price);
          priceEmp.appendChild(pricetext);
          var addToCart = document.createElement("button");
          addToCart.setAttribute("class", "addtocart");
          var addtext = document.createTextNode("Add To Cart");
          addToCart.appendChild(addtext);
          cardemp.appendChild(imgemp);
          cardemp.appendChild(favIconDiv);
          cardemp.appendChild(titleEmp);
          cardemp.appendChild(priceEmp);
          if (json[i].discount) {
            var markForDis = document.createElement("div");
            markForDis.setAttribute("class", "markForDisEmp");
            markForDis.innerHTML = "Sale 15%";
            var dicountedEmb = document.createElement("p");
            dicountedEmb.setAttribute("class", "dicountedEmb");
            priceEmp.style.width = "35%";
            priceEmp.style.textDecorationLine = "line-through";
            var dicountedtext = document.createTextNode(
              "LE " + (json[i].price - (json[i].price * 15) / 100) + " (-15%)"
            );
            dicountedEmb.appendChild(dicountedtext);
            cardemp.appendChild(dicountedEmb);
            cardemp.appendChild(markForDis);
          }
          var sizeEmp = document.createElement("p");
          sizeEmp.setAttribute("class", "sizeEmp");
          sizeEmp.innerHTML = "Size: " + json[i].size;
          cardemp.appendChild(sizeEmp);
          cardemp.appendChild(addToCart);
          bestProd.appendChild(cardemp);

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

          cardemp.addEventListener("click", function (event) {
            if (!event.target.closest("button")) {
              const clickedProductId = json[i].id;
              window.open("../oneProduct/product.html", "_self");
              item.push(json[i]);
              localStorage.setItem("item", JSON.stringify(item));
            }
          });
          cardemp.addEventListener("mouseover", function () {
            imgemp.src = json[i].image[1];
          });
          cardemp.addEventListener("mouseleave", function () {
            imgemp.src = json[i].image[0];
          });
        }
      }
    }
  };
  xhr.send();
} else {
  CartNumb.textContent = productsOnCart.toString();
  var carthead = document.createElement("div");
  var productdiv = document.createElement("p");
  carthead.setAttribute("id", "carthead");
  productdiv.innerHTML = "Product";
  productdiv.setAttribute("id", "productdiv");
  var pricediv = document.createElement("p");
  pricediv.innerHTML = "Price";
  pricediv.setAttribute("id", "pricediv");
  var amountdiv = document.createElement("p");
  amountdiv.innerHTML = "Amount";
  amountdiv.setAttribute("id", "amountdiv");
  var totaldiv = document.createElement("p");
  totaldiv.innerHTML = "Total";
  totaldiv.setAttribute("id", "totaldiv");
  carthead.appendChild(productdiv);
  carthead.appendChild(pricediv);
  carthead.appendChild(amountdiv);
  carthead.appendChild(totaldiv);

  cartdiv.appendChild(carthead);
  var sidediv = document.createElement("div");
  sidediv.setAttribute("id", "sidediv");
  cartdiv.appendChild(sidediv);

  let overAllPrice = 0;
  // const storedQuantities =
  //   JSON.parse(localStorage.getItem("cartQuantities")) || {};
  let numOfProducts;
  const SubtotalAmount = document.createElement("p");
  for (let i = 0; i < cart.length; i++) {
    var cartcarddiv = document.createElement("div");
    cartcarddiv.setAttribute("class", "cartcarddiv");
    cartdiv.appendChild(cartcarddiv);
    var cartcardimg = document.createElement("img");
    cartcardimg.setAttribute("class", "cartcardimg");
    cartcardimg.src = cart[i].image[0];
    cartcarddiv.appendChild(cartcardimg);

    var Title = document.createElement("p");
    Title.setAttribute("class", "cartcardtitle");
    Title.innerHTML = cart[i].product_name;
    cartcarddiv.appendChild(Title);

    var categ = document.createElement("p");
    categ.setAttribute("class", "categ");
    categ.innerHTML = " category: " + cart[i].category;
    cartcarddiv.appendChild(categ);

    var quantity = document.createElement("p");
    quantity.setAttribute("class", "quantity");
    quantity.innerHTML = cart[i].quantity + " pieces left !";
    cartcarddiv.appendChild(quantity);

    var price = document.createElement("p");
    price.setAttribute("class", "price");
    price.innerHTML = "LE " + cart[i].price;
    cartcarddiv.appendChild(price);

    if (cart[i].discount) {
      var markForDis = document.createElement("div");
      markForDis.setAttribute("class", "markForDis");
      markForDis.innerHTML = "Sale 15%";
      const dicounted = document.createElement("p");
      dicounted.setAttribute("class", "dicounted");
      price.style.marginLeft = "200px";
      price.style.textDecorationLine = "line-through";
      dicounted.innerHTML =
        "LE " + (cart[i].price - (cart[i].price * 15) / 100) + " (-15%)";
      cartcarddiv.appendChild(dicounted);
      cartcarddiv.appendChild(markForDis);
    }

    const counter = document.createElement("input");
    counter.setAttribute("type", "number");
    counter.setAttribute("class", "counterinput");
    counter.setAttribute("value", 1);
    counter.setAttribute("max", 10);
    counter.setAttribute("min", 1);
    cartcarddiv.appendChild(counter);

    const totalprice = document.createElement("p");
    totalprice.setAttribute("class", "totalprice");
    totalprice.setAttribute("id", cart[i].id);
    const totalpriceNumber = cart[i].price;
    const discountedTotal = parseInt(
      cart[i].price - (cart[i].price * 15) / 100
    );
    if (cart[i].discount) {
      totalprice.innerHTML = "LE " + discountedTotal;
      overAllPrice += discountedTotal;
    } else {
      totalprice.innerHTML = "LE " + totalpriceNumber;
      overAllPrice += totalpriceNumber;
    }
    cartcarddiv.appendChild(totalprice);

    const tprice = document.getElementById(cart[i].id);
    let countValue = counter.value;

    counter.addEventListener("change", function () {
      let previousCountValue = countValue;
      countValue = counter.value;

      if (cart[i].discount) {
        if (countValue > previousCountValue) {
          tprice.innerHTML = "LE " + countValue * discountedTotal;
          overAllPrice += (countValue - previousCountValue) * discountedTotal;
        } else if (countValue < previousCountValue) {
          tprice.innerHTML = "LE " + countValue * discountedTotal;
          overAllPrice -= (previousCountValue - countValue) * discountedTotal;
        }
      } else {
        if (countValue > previousCountValue) {
          tprice.innerHTML = "LE " + countValue * totalpriceNumber;
          overAllPrice += (countValue - previousCountValue) * totalpriceNumber;
        } else if (countValue < previousCountValue) {
          tprice.innerHTML = "LE " + countValue * totalpriceNumber;
          overAllPrice -= (previousCountValue - countValue) * totalpriceNumber;
        }
      }
      SubtotalAmount.innerHTML = overAllPrice;
      console.log(overAllPrice);
    });
    const isDiscount = cart[i].discount;
    var remove = document.createElement("button");
    remove.setAttribute("class", "remove");
    remove.innerHTML = "X";
    cartcarddiv.appendChild(remove);
    const itemId = cart[i].id;
    remove.addEventListener("click", function () {
      if (isDiscount) {
        overAllPrice -= discountedTotal * counter.value;
      } else {
        overAllPrice -= totalpriceNumber * counter.value;
      }
      console.log(overAllPrice);
      this.parentElement.remove();
      cart = cart.filter(function (item) {
        return item.id !== itemId;
      });
      localStorage.setItem("cartStorge", JSON.stringify(cart));
      productsOnCart -= 1;
      console.log(productsOnCart);
      CartNumb.innerHTML = productsOnCart;
      localStorage.setItem("numOfProducts", JSON.stringify(productsOnCart));
      SubtotalAmount.innerHTML = overAllPrice;
    });
    console.log(overAllPrice);
  }
  const Subtotal = document.createElement("p");
  Subtotal.setAttribute("id", "Subtotal");
  Subtotal.innerHTML = "Subtotal";
  sidediv.appendChild(Subtotal);
  SubtotalAmount.setAttribute("id", "SubtotalAmount");
  SubtotalAmount.innerHTML = "LE " + overAllPrice;
  sidediv.appendChild(SubtotalAmount);
  const check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  check.setAttribute("name", "TOS");
  check.setAttribute("id", "TOS");
  sidediv.appendChild(check);
  const terms = document.createElement("label");
  terms.setAttribute("id", "termsLable");
  terms.setAttribute("for", "TOS");
  terms.innerHTML = "I Agree With ";
  sidediv.appendChild(terms);
  const termsOfServes = document.createElement("a");
  termsOfServes.innerHTML = "Terms & Conditions";
  termsOfServes.addEventListener("click", function () {
    window.open(
      "./Terms.html",
      "_blank",
      "width=700,height=1000",
      "top=500,left=500"
    );
  });
  sidediv.appendChild(termsOfServes);
  const buybtn = document.createElement("button");
  buybtn.setAttribute("id", "buyBtn");
  buybtn.innerHTML = "Proced To Checkout";
  buybtn.disabled = true;
  sidediv.appendChild(buybtn);
  let users = JSON.parse(localStorage.getItem("users"));
  console.log(users);
  check.addEventListener("change", function () {
    if (check.checked) {
      buybtn.disabled = false;
      buybtn.style.backgroundColor = "white";
      buybtn.style.cursor = "Pointer";
    } else {
      buybtn.disabled = true;
      buybtn.style.backgroundColor = "gray";
      buybtn.style.cursor = "auto";
    }
  });
  const LogDiv = document.createElement("div");
  LogDiv.style.marginTop = "10px";
  const notRegesterd = document.createElement("p");
  notRegesterd.innerHTML = "Must login to Do this step";
  const logbtn = document.createElement("button");
  logbtn.innerHTML = "Login";
  logbtn.addEventListener("click", function () {
    window.open("login.html", "_self");
  });

  buybtn.addEventListener("click", function () {
    if (!users) {
      LogDiv.innerHTML = "";
      LogDiv.appendChild(notRegesterd);
      LogDiv.appendChild(logbtn);
      sidediv.appendChild(LogDiv);
    } else {
      window.open("../Buy/buy.html", "_self");
    }
  });
  const continueShopping = document.createElement("button");
  continueShopping.setAttribute("id", "continueShopping");
  continueShopping.innerHTML = "Continue Shopping";
  sidediv.appendChild(continueShopping);
  continueShopping.addEventListener("click", function () {
    localStorage.removeItem("category");
    window.open("../products/Products.html", "_self");
  });
}
