
//header
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

document.body.appendChild(Div);

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
logo.addEventListener("click", function () {
  window.location.href = "../index.html";
});
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

// LogOut button
var logoutBtn = document.createElement("button");
logoutBtn.textContent = "Logout";
logoutBtn.id="logoutBtn";
logoutBtn.style.height = "22px";
logoutBtn.style.position = "absolute";
logoutBtn.style.cursor = "pointer";
logoutBtn.style.bottom = "40px";
logoutBtn.style.right = "50px";

logoutBtn.style.background = "none"; 
logoutBtn.style.border = "none"; 
logoutBtn.style.padding = "0";
logoutBtn.style.color = "white"; 

Div.appendChild(logoutBtn);


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
// applyHoverEffect(logoutBtn);

//end



//
document.body.style.backgroundColor='white';
var DivTitle = document.createElement('div');
DivTitle.id = 'DivTitle';
Div.after(DivTitle);

var title = document.createElement('h1');
title.className = 'title';
title.textContent = 'Account Profile';
DivTitle.appendChild(title); 

var Profileform = document.createElement('form');
Profileform.className = 'profile-form';
document.body.appendChild(Profileform);

var NameLabel = document.createElement('label');
NameLabel.className = 'profile-label';

Profileform.appendChild(NameLabel);

var PhoneLabel = document.createElement('label');
PhoneLabel.className = 'profile-label';

Profileform.appendChild(PhoneLabel);

var AddressLabel = document.createElement('label');
AddressLabel.className = 'profile-label';

Profileform.appendChild(AddressLabel);

var GenderLabel = document.createElement('label');
GenderLabel.className = 'profile-label';

Profileform.appendChild(GenderLabel);

var CityLabel = document.createElement('label');
CityLabel.className = 'profile-label';

Profileform.appendChild(CityLabel);






var activeUserEmail = localStorage.getItem('Active');

// جلب جميع المستخدمين من localStorage

var ActiveUserData= JSON.parse(localStorage.getItem("users"));
var currentUser = ActiveUserData.find(u => u.email === activeUserEmail);

console.log(ActiveUserData)
if(currentUser)
    {
        // console.log(ActiveUserData.firstName)
        
        NameLabel.textContent = `Name: ${currentUser.firstName }  ${currentUser.lastName}`;
        PhoneLabel.textContent = `PhoneNumber: ${currentUser.phone}`;
        AddressLabel.textContent = `Address: ${currentUser.detailedAddress}`;
        GenderLabel.textContent = `Gender: ${currentUser.gender}`;
        CityLabel.textContent = `City: ${currentUser.city}`;
        
     
        
    }
    // C1.onclick = function () {
    //     localStorage.removeItem("category");
    //     window.open("../products/Products.html", "_self");
    //   };

    document.getElementById('logoutBtn').addEventListener('click', function() {

        localStorage.setItem("Active", "");
        window.location.href = '../login/login.html'; 
    });
    
    //footer


    var footer= document.getElementById("footer");
    

    Profileform.after(footer);