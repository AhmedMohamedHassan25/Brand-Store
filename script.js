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

