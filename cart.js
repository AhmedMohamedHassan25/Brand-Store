
var cartdiv = document.getElementById("cartdiv")
var cart = JSON.parse(localStorage.getItem("cartStorge"))
console.log(cart);
if (cart == null) {
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
        cartcarddiv.appendChild(cartcardimg)


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
