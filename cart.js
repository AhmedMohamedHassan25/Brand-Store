
var cartdiv = document.getElementById("cartdiv")
var cart = JSON.parse(localStorage.getItem("cartStorge"))
console.log(cart);
if (cart.length == 0) {
    var empityParag = document.createElement("p")
    var empitytext = document.createTextNode("Your cart is Empity")
    empityParag.appendChild(empitytext)
    empityParag.style.textAlign = "center"
    var checkproducts = document.createElement("button")
    var checkproductstext = document.createTextNode("Chick out our products")
    checkproducts.appendChild(checkproductstext)
    checkproducts.setAttribute("id","empitycartbtn")
    cartdiv.appendChild(empityParag)
    cartdiv.appendChild(checkproducts)
    checkproducts.addEventListener("click",function () {
        window.location.href = "Products.html"
    })

}else{
    var carthead = document.createElement("div")
    var productdiv = document.createElement("p")
    carthead.setAttribute("id","carthead")
    productdiv.innerHTML = "Product"
    productdiv.setAttribute("id","productdiv")
    var pricediv = document.createElement("p")
    pricediv.innerHTML= "Price"
    pricediv.setAttribute("id","pricediv")
    var amountdiv = document.createElement("p")
    amountdiv.innerHTML = "Amount"
    amountdiv.setAttribute("id","amountdiv")
    var totaldiv = document.createElement("p")
    totaldiv.innerHTML = "Total"
    totaldiv.setAttribute("id","totaldiv")
    carthead.appendChild(productdiv)
    carthead.appendChild(pricediv)
    carthead.appendChild(amountdiv)
    carthead.appendChild(totaldiv)

    cartdiv.appendChild(carthead)
    var sidediv = document.createElement("div")
    sidediv.setAttribute("id", "sidediv")
    cartdiv.appendChild(sidediv)
    var summary = document.createElement("p")
    summary.innerHTML = "ORDER SUMMARY"

    var shipping = document.createElement("p")
    shipping.innerHTML = "Shipping Information"
    shipping.style.marginTop = "30px"

    var governorate = document.createElement("select")
    governorate.setAttribute("id","governorate")
    var option1 = document.createElement("option")
    option1.setAttribute("value","Sohag")
    option1.innerHTML = "Sohag"
    governorate.appendChild(option1)
    
    var option2 = document.createElement("option")
    option2.setAttribute("value","Assiut")
    option2.innerHTML = "Assiut"
    governorate.appendChild(option2)
    
    var option3 = document.createElement("option")
    option3.setAttribute("value","Qena")
    option3.innerHTML = "Qena"
    governorate.appendChild(option3)

    var city = document.createElement("select")
    city.setAttribute("id","city")
    var allCities = [
        { governorate: "Sohag", cities: ["Sohag", "Tema", "Tahta", "El-Maragha","Girga", "El-Munshaa", "Al-Blina"] },
        { governorate: "Assiut", cities: ["Assiut", "Sedfa", "Al-Fath", "Abo Teag", "Al-Qousia", "Abnoub"] },
        { governorate: "Qena", cities: ["Qena", "Farshot", "Deshna", "Abu Tesht", "Naga Hamadi", "Qous", "Quft"] }
    ];

    function updateCityOptions() {
        city.innerHTML = "";    
        var selectedGovernorate = governorate.value;
        var cities;
        for (let i = 0; i < allCities.length; i++) {
            if (allCities[i].governorate == selectedGovernorate) {
                cities = allCities[i].cities;
                break;
            }
        }    
        for (let j = 0; j < cities.length; j++) {
            var cityName = cities[j];
            var option = document.createElement("option");
            option.setAttribute("value", cityName);
            option.innerHTML = cityName;
            city.appendChild(option);
        }
    }
    updateCityOptions();
    governorate.addEventListener("change", updateCityOptions);
    var post = document.createElement("input")
    post.setAttribute("id","post")
    post.setAttribute("type","text")
    post.setAttribute("placeHolder","Postal Code")



    sidediv.appendChild(summary)
    sidediv.appendChild(shipping)
    sidediv.appendChild(governorate)
    sidediv.appendChild(city)
    sidediv.appendChild(post)
    
    for (let i = 0; i < cart.length; i++) {
        var cartcarddiv = document.createElement("div")
        cartcarddiv.setAttribute("class","cartcarddiv")
        cartdiv.appendChild(cartcarddiv)
        var cartcardimg = document.createElement("img")
        cartcardimg.setAttribute("class","cartcardimg")
        cartcardimg.src = cart[i].image
        var Title = document.createElement("p")
        Title.setAttribute("class","cartcardtitle")
        Title.innerHTML = cart[i].product_name

        var categ = document.createElement("p")
        categ.setAttribute("class","categ")
        categ.innerHTML = " category: " + cart[i].category

        var quantity = document.createElement("p")
        quantity.setAttribute("class","quantity")
        quantity.innerHTML = cart[i].quantity + " pieces left !"

        var price = document.createElement("p")
        price.setAttribute("class","price")
        price.innerHTML = "LE "+cart[i].price 

        const counter = document.createElement("input")
        counter.setAttribute("type","number")
        counter.setAttribute("class","counterinput")
        counter.setAttribute("value",1)
        counter.setAttribute("max",10)
        counter.setAttribute("min",1)

        const totalprice = document.createElement("p")
        totalprice.setAttribute("class","totalprice")
        totalprice.setAttribute("id",cart[i].id)
        const totalpriceNumber =  parseFloat(cart[i].price)
        console.log(totalpriceNumber);
        totalprice.innerHTML = "LE "+ totalpriceNumber
        
        var inputs = document.getElementsByClassName("counterinput")
        counter.addEventListener("input",function () {
            var tprice = document.getElementById(cart[i].id)
            tprice.innerHTML = "LE "+ counter.value * totalpriceNumber
        })
        
        var remove = document.createElement("button")
        remove.setAttribute("class","remove")
        remove.innerHTML = "X"
        cartcarddiv.appendChild(remove)
        const itemId = cart[i].id;
        remove.addEventListener("click", function () {
            this.parentElement.remove();
            cart = cart.filter(function(item) {
                return item.id !== itemId;
            });
            localStorage.setItem("cartStorge", JSON.stringify(cart));
        });

        cartcarddiv.appendChild(cartcardimg)
        cartcarddiv.appendChild(Title)
        cartcarddiv.appendChild(categ)
        cartcarddiv.appendChild(quantity)
        cartcarddiv.appendChild(price)
        cartcarddiv.appendChild(totalprice)
        cartcarddiv.appendChild(counter)
        
    }
    const Subtotal = document.createElement("p")
    Subtotal.setAttribute("id","Subtotal")
    Subtotal.innerHTML = "Subtotal     " 
    sidediv.appendChild(Subtotal)
    


}


