


// made by Elghoul
var foot1 =document.getElementById("footbtn1");
foot1.onclick = goTo;

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




//made by walid
document.body.style.backgroundColor = 'lightblue';


var Div = document.createElement('div');
Div.id = 'MyDiv';
Div.style.width = '100%';
Div.style.height = '100px';
// edit by Elghoul   //+  محتاجة تعديل عشان تلزق في السقف ونظب الدروب دون لست
Div.style.backgroundColor = 'wheat';
Div.style.position = 'absolute'; 
Div.style.left="-10px";
Div.style.Top="0px";
Div.style.borderRadius="0px 0px 10px 10px";
Div.style.zIndex="1000";
mainOfHome.before(Div);

var CrtIcon = document.createElement('img');
CrtIcon.src = "./rss/Cart.png";
CrtIcon.style.height = '20px';
CrtIcon.style.position = 'absolute';
CrtIcon.style.cursor='pointer';
CrtIcon.style.bottom='40px'
CrtIcon.style.right = '120px'; 
Div.appendChild(CrtIcon);

var HeartIcon = document.createElement('img');
HeartIcon.src = "./rss/Heart.png";
HeartIcon.style.height = '23px';
HeartIcon.style.position = 'absolute';
HeartIcon.style.right = '170px'; 
HeartIcon.style.bottom='40px'
HeartIcon.style.cursor='pointer';
Div.appendChild(HeartIcon);

var CatIcon = document.createElement('img');
CatIcon.src = "./rss/menu.png";
CatIcon.style.height = '23px';
CatIcon.style.position = 'absolute';
CatIcon.style.right = '70px'; 
CatIcon.style.bottom='40px'
CatIcon.style.cursor='pointer';
Div.appendChild(CatIcon);

var dropdown = document.createElement('div');
dropdown.style.position = 'absolute';
dropdown.style.backgroundColor = '#f9f9f9';
dropdown.style.boxShadow = '0px 8px 16px 0px rgba(0,0,0,0.2)';
dropdown.style.right = '70px'; 
dropdown.style.display = 'none';//not expand by default
dropdown.style.bottom = '-230px';
Div.appendChild(dropdown);

var CatArr = ["jeans", "t-shirts", "pants","hoodies","jackets","accessories"];
CatArr.forEach(function(item) {
  var a = document.createElement('a');
  a.href = '#';
  a.textContent = item;
  a.style.color = 'black';
  a.style.padding = '12px 16px';
  a.style.textDecoration = 'none'; //remove line under text
  a.style.display = 'block';
  a.addEventListener('mouseover', function() {
    a.style.backgroundColor = '#d3d3d3';
  });
  a.addEventListener('mouseout', function() {
    a.style.backgroundColor = '#f9f9f9';
  });
  dropdown.appendChild(a);
});

CatIcon.addEventListener('click', function() { //
  if (dropdown.style.display === 'none') {
    dropdown.style.display = 'block';
  } else {
    dropdown.style.display = 'none';
  }
});

window.onclick = function(event) {   //close dropdownlist if click on any place in window
  if (!event.target.matches('img')) { // if you click on other icon don't close dropdownlist
    if (dropdown.style.display === 'block')
   {
      dropdown.style.display = 'none';
    }
  }
}

function applyHoverEffect(element, url) {
  element.addEventListener('mouseover', function() {
    element.style.filter = 'invert(50%) hue-rotate(180deg)';
  });

  element.addEventListener('mouseout', function() {
    element.style.filter = 'none';
  });

  
  
  element.addEventListener('click', function() {
      window.location.href = url;  
});
}
function applyHoverEffectForCategory(element)
{
  element.addEventListener('mouseover', function() {
    element.style.filter = 'invert(50%) hue-rotate(180deg)';
  });

  element.addEventListener('mouseout', function() {
    element.style.filter = 'none';
  });
}
 applyHoverEffect(CrtIcon, 'cart.html');
 applyHoverEffect(HeartIcon, 'heart.html');
 applyHoverEffectForCategory(CatIcon);

//end of header



