
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
    for (let i = 0; i < cart.length; i++) {
        var cartcarddiv = document.createElement("div")
        cartcarddiv.setAttribute("class","cartcarddiv")
        // cartcarddiv.setAttribute("id",cart[i].id)
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

        var counter = document.createElement("input")
        counter.setAttribute("type","number")
        counter.setAttribute("class","counterinput")
        counter.setAttribute("value",1)
        counter.setAttribute("max",10)
        counter.setAttribute("min",1)

        var totalprice = document.createElement("p")
        totalprice.setAttribute("class","totalprice")
        totalprice.setAttribute("id",cart[i].id)
        var totalpriceNumber =  parseFloat(cart[i].price)
        console.log(totalpriceNumber);
        totalprice.innerHTML = "LE "+ counter.value * totalpriceNumber
        
        var inputs = document.getElementsByClassName("counterinput")
        counter.addEventListener("input",function (event) {
            totalprice.innerHTML = "LE "+ counter.value * totalpriceNumber
            console.log(totalprice);
        })
        
        cartcarddiv.appendChild(cartcardimg)
        cartcarddiv.appendChild(Title)
        cartcarddiv.appendChild(categ)
        cartcarddiv.appendChild(quantity)
        cartcarddiv.appendChild(price)
        cartcarddiv.appendChild(totalprice)
        cartcarddiv.appendChild(counter)



        // var line = document.createElement("br")
        // var imgdiv = document.createElement("div")
        // var btn = document.createElement("button")
        // btn.setAttribute("id", cart[i].id)
        // var add = document.createTextNode("remove to carte")
        // btn.appendChild(add)
        // imgdiv.appendChild(img)
        // img.style.width = "100px"
        // img.style.hight = "100px"
        // var title = document.createTextNode(cart[i].title)
        // console.log(cart[i].title);
        // var rat = document.createTextNode( "rate: " + cart[i].rating.rate+" ")
        // var count = document.createTextNode("count: "+cart[i].rating.count+" ")
        // var price = document.createTextNode("price: "+cart[i].price+" ")
        // card.appendChild(imgdiv)
        // card.appendChild(title)
        // card.appendChild(line)
        // card.appendChild(count)
        // // card.appendChild(rat)
        // card.appendChild(price)
        // card.appendChild(btn)
        // cartdiv.appendChild(cartcarddiv)
        // btn.addEventListener("click",function (evt) {
        //     console.log(cart.length);
        //     var x = document.getElementById(evt.target.id)
        //     console.log(cart[i]);
        //     cart.splice(i,1)
        //     console.log(cart);
        //     localStorage.setItem("cart",JSON.stringify(cart))
        //     x.remove()
        // })        
}
}
