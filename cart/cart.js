//start of header

var Div = document.createElement("div");
Div.id="MyDiv";
document.body.append(Div);
// logo
var logo = document.createElement("img");
logo.src = "../rss/White-Logo.png";
logo.id="logo";
logo.style.cursor = "pointer";
logo.addEventListener("click", function () {
  window.location.href = "../index.html";
});
Div.appendChild(logo);

// categories
var LIST = document.createElement("div");
LIST.id="lis";


var C1 = document.createElement("button");
var C2 = document.createElement("button");
var C3 = document.createElement("button");
var C4 = document.createElement("button");
var C5 = document.createElement("button");
var C6 = document.createElement("button");
var C7 = document.createElement("button");
C1.id="c1";
C2.id="c2";
C3.id="c3";
C4.id="c4";
C5.id="c5";
C6.id="c6";
C7.id="c7";

C1.textContent = "All Products";
C2.textContent = "Jackets";
C3.textContent = "Hoodies";
C4.textContent = "jeans";
C5.textContent = "Shirts";
C6.textContent = "T-shirts";
C7.textContent = "Accessories";


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

LIST.appendChild(C1);
C1.after(C2);
C2.after(C3);
C3.after(C4);
C4.after(C5);
C5.after(C6);
C6.after(C7);

Div.appendChild(LIST);

// cart icon
var person = document.createElement("img");
person.src = "../rss/icons8-administrator-male-96.png";
person.id="CartIcon"
Div.appendChild(person);

//heart icon
var HeartIcon = document.createElement("img");
HeartIcon.src = "../rss/Heart2.png";
HeartIcon.id="HearIcon";

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

applyHoverEffect(person, "../login/login.html");
applyHoverEffect(HeartIcon, "../fav/favourite.html");

//end of header

var cartdiv = document.getElementById("cartdiv");
var cart = JSON.parse(localStorage.getItem("cartStorge")) || [];
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
  bestProd.setAttribute("id", "bestSeller");
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
          // CartNumb.textContent = productsOnCart.toString();
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
  // CartNumb.textContent = productsOnCart.toString();
  var carthead = document.createElement("div");
  carthead.setAttribute("id", "carthead");
  var productdiv = document.createElement("p");
  productdiv.innerHTML = "Product";
  productdiv.setAttribute("id", "productdiv");


  var productdiv = document.createElement("p");
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
  let quantityStorage = JSON.parse(localStorage.getItem("quantityStorage"));
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
    categ.innerHTML = "<strong> category </strong>: " + cart[i].category;
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
      price.style.textDecorationLine = "line-through";
      dicounted.innerHTML =
        "LE " + (cart[i].price - (cart[i].price * 15) / 100) + `<span id="Disc">(-15%)</span>`;
      cartcarddiv.appendChild(dicounted);
      cartcarddiv.appendChild(markForDis);
    }

    const counter = document.createElement("input");
    counter.setAttribute("type", "number");
    counter.setAttribute("class", "counterinput");
    counter.setAttribute("value", quantityStorage[cart[i].id]);
    counter.setAttribute("max", 10);
    counter.setAttribute("min", 1);
    cartcarddiv.appendChild(counter);

    const ActialPrice = cart[i].price;
    const ActialPriceDiscounted = parseInt(
      cart[i].price - (cart[i].price * 15) / 100
    );

    const totalprice = document.createElement("p");
    totalprice.setAttribute("class", "totalprice");
    totalprice.setAttribute("id", cart[i].id);
    const totalpriceNumber = cart[i].price * quantityStorage[cart[i].id];
    const discountedTotal = parseInt(
      (cart[i].price - (cart[i].price * 15) / 100) * quantityStorage[cart[i].id]
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
      console.log(countValue);
      if (cart[i].discount) {
        if (countValue > previousCountValue) {
          tprice.innerHTML = "LE " + countValue * ActialPriceDiscounted;
          overAllPrice +=
            (countValue - previousCountValue) * ActialPriceDiscounted;
          productsOnCart += 1;
        } else if (countValue < previousCountValue) {
          tprice.innerHTML = "LE " + countValue * ActialPriceDiscounted;
          overAllPrice -=
            (previousCountValue - countValue) * ActialPriceDiscounted;
          productsOnCart -= 1;
        }
      } else {
        if (countValue > previousCountValue) {
          tprice.innerHTML = "LE " + countValue * ActialPrice;
          overAllPrice += (countValue - previousCountValue) * ActialPrice;
          productsOnCart += 1;
        } else if (countValue < previousCountValue) {
          tprice.innerHTML = "LE " + countValue * ActialPrice;
          overAllPrice -= (previousCountValue - countValue) * ActialPrice;
          productsOnCart -= 1;
        }
      }
      SubtotalAmount.innerHTML = overAllPrice;
      console.log(overAllPrice);
      quantityStorage[cart[i].id] = parseInt(countValue);
      localStorage.setItem("quantityStorage", JSON.stringify(quantityStorage));
      localStorage.setItem("numOfProducts", JSON.stringify(productsOnCart));
    });
    const isDiscount = cart[i].discount;
    var remove = document.createElement("button");
    remove.setAttribute("class", "remove");
    remove.innerHTML = "X";
    cartcarddiv.appendChild(remove);
    const itemId = cart[i].id;
    remove.addEventListener("click", function () {
      if (isDiscount) {
        overAllPrice -= ActialPriceDiscounted * counter.value;
      } else {
        overAllPrice -= ActialPrice * counter.value;
      }
      console.log(overAllPrice);
      this.parentElement.remove();
      cart = cart.filter(function (item) {
        return item.id !== itemId;
      });
      localStorage.setItem("cartStorge", JSON.stringify(cart));
      productsOnCart -= quantityStorage[itemId];
      console.log(productsOnCart);
      localStorage.setItem("numOfProducts", JSON.stringify(productsOnCart));
      delete quantityStorage[itemId];
      localStorage.setItem("quantityStorage", JSON.stringify(quantityStorage));
      SubtotalAmount.innerHTML = overAllPrice;
      if (cart.length == 0) {
        window.open("../cart/cart.html", "_self");
      }
    });
    console.log(overAllPrice);
  }
  const Subtotal = document.createElement("p");
  Subtotal.setAttribute("id", "Subtotal");
  Subtotal.innerHTML = "Subtotal";
  sidediv.appendChild(Subtotal);
  SubtotalAmount.setAttribute("id", "SubtotalAmount");
  SubtotalAmount.innerHTML = "LE " + overAllPrice;
  const breakLi = document.createElement("br");
  sidediv.appendChild(SubtotalAmount);
  SubtotalAmount.after(breakLi);
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
  termsOfServes.setAttribute("id", "terms");
  termsOfServes.innerHTML = "Terms & Conditions";
  termsOfServes.addEventListener("click", function () {
    window.open(
      "../terms/Terms.html",
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
  let Active = localStorage.getItem("Active");
  console.log(Active);
  check.addEventListener("change", function () {
    if (check.checked) {
      buybtn.disabled = false;
      buybtn.style.backgroundColor = "white";
      buybtn.style.color="#14202E";
      buybtn.style.margin= "10px";

      buybtn.style.cursor = "Pointer";
    } else {
      buybtn.disabled = true;
      buybtn.style.color="white";
      buybtn.style.backgroundColor = "#14202E";
      buybtn.style.margin= "10px";

      buybtn.style.cursor = "auto";
    }
  });
  const LogDiv = document.createElement("div");
  LogDiv.style.marginTop = "10px";
  const notRegesterd = document.createElement("p");
  notRegesterd.innerHTML = "Must login to Do this step";
  notRegesterd.style.color = "red";
  const logbtn = document.createElement("button");
  logbtn.setAttribute("id", "logbtn");
  logbtn.innerHTML = "Login";
  LogDiv.innerHTML = "";
  LogDiv.appendChild(notRegesterd);
  LogDiv.appendChild(logbtn);
  sidediv.appendChild(LogDiv);
  LogDiv.style.display = "none";
  logbtn.addEventListener("click", function () {
    window.open("../login/login.html", "_self");
  });

  buybtn.addEventListener("click", function () {
    if (!Active) {
      LogDiv.style.display = "block";
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
var sideLogo=document.createElement("img");
sideLogo.src="../rss/blue-logo.png";
sideLogo.id="sideLogo";
sidediv.appendChild(sideLogo);