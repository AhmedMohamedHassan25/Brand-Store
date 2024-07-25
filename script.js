// made by Elghoul
var foot1 =document.getElementById("footbtn1");
foot1.onclick= goTo;

function goTo(){
    window.location.href="#top";
}


/* search bar */
let search=document.createElement("input");
search.type="text";
search.placeholder="Search";
let mainOfHome=document.getElementById("top");
mainOfHome.after(search);
search.style.width="500px";
search.style.height="50px";
search.style.display="none";
search.id="searchID"; 


/*searching button */
var searching=document.getElementById("searching");
searching.onclick=makeTextSearch;
// the value of search;
let valueOFsearhing;
/*the event of the button search*/
function makeTextSearch(){

    //return the element to it's default
    if (search.style.display === "none") {
        // Display the search bar
        search.style.display = "initial";
        mainOfHome.style.opacity = 0.3;
        search.focus();
    } else {
        // Hide the search bar and reset the input
        valueOFsearhing=search.value;
        search.style.display = "none";
        mainOfHome.style.opacity = 1;
        search.value = null;
        
        console.log(valueOFsearhing);

    }

    // event when press enter 
    search.addEventListener("keypress",function(ev){
    if(ev.key=="Enter" ){
        valueOFsearhing=search.value;
        search.style.display="none";
        mainOfHome.style.opacity=1;
        console.log(valueOFsearhing);
        search.value=null;

    }
  

        
    })
 
}




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

xhr.send()