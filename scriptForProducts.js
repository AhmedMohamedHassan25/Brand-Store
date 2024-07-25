


// made by mohamed 

/// resopnd and cards
var xhr = new XMLHttpRequest();
xhr.open("GET","./test.json")
var item = 0
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4  && xhr.status == 200) {
        console.log(xhr.response);
        var json = JSON.parse(xhr.response)
        var main = document.getElementById("main")
        for (let i = 0; i < json.length; i++) {
            var card = document.createElement("div")
            card.style.display = "inline-block"
            card.style.border = " solid 1px black"
            card.style.height = " 340px"
            card.style.width = " 250px"
            card.style.float = " left"
            card.style.margin = "30px"
            var img = document.createElement("img")
            img.src = json[i].image
            img.style.width = "250px"
            img.style.height = "250px"
            var title = document.createElement("p")
            title.style.display = "inline-block"
            title.style.width = "100%"
            title.style.marginBlock ="3px"
            var titletext = document.createTextNode(json[i].product_name)
            title.appendChild(titletext)
            // var rate = document.createTextNode( "rate: "+json[i].rating.rate+" ")
            var price = document.createElement("p")
            price.style.display = "inline-block"
            price.style.marginBlock ="5px"
            price.style.width = "100%"
            var pricetext = document.createTextNode(json[i].price+"  EGP")
            price.appendChild(pricetext)
            var addToCart = document.createElement("button")
            addToCart.style.backgroundColor ="green"
            var addtext = document.createTextNode("add to carte")
            addToCart.appendChild(addtext)
            card.appendChild(img)
            card.appendChild(title)
            // card.appendChild(rate)
            card.appendChild(price)
            card.appendChild(addToCart)
            main.appendChild(card)
            card.addEventListener("click", function () {
                window.open("./product.html");
                item = json[i].id
                console.log(item);
            })
            
        }

    }
}

xhr.send();