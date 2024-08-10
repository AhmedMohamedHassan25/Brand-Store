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
logo.addEventListener("click", function () {
  window.location.href = "../index.html";
});
Div.appendChild(logo);

var person = document.createElement("img");
person.src = "../rss/icons8-administrator-male-96.png";
person.style.height = "22px";
person.style.position = "absolute";
person.style.cursor = "pointer";
person.style.bottom = "40px";
person.style.right = "120px";

Div.appendChild(person);

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

//end of header
let users = JSON.parse(localStorage.getItem("users"));
const loginEmail = document.getElementById("Einput");
loginEmail.value = users[0].email;

const loginPhone = document.getElementById("Pinput");
loginPhone.addEventListener("keydown", function (eve) {
  console.log(eve.keyCode);
  if (
    (eve.keyCode >= 65 && eve.keyCode <= 90) ||
    (eve.keyCode >= 97 && eve.keyCode <= 122)
  ) {
    eve.preventDefault();
  } else {
  }
});
loginPhone.value = users[0].phone;

const fName = document.getElementById("Fname");
fName.addEventListener("keydown", function (eve) {
  console.log(eve.keyCode);
  if (eve.keyCode >= 48 && eve.keyCode <= 57) {
    eve.preventDefault();
  } else {
  }
});
fName.value = users[0].firstName;

const lName = document.getElementById("Lname");
lName.value = users[0].lastName;
lName.addEventListener("keydown", function (eve) {
  console.log(eve.keyCode);
  if (eve.keyCode >= 48 && eve.keyCode <= 57) {
    eve.preventDefault();
  } else {
  }
});
const cardnumber = document.getElementById("cardnumber");
cardnumber.addEventListener("keydown", function (eve) {
  console.log(eve.keyCode);
  if (
    (eve.keyCode >= 65 && eve.keyCode <= 90) ||
    (eve.keyCode >= 97 && eve.keyCode <= 122)
  ) {
    eve.preventDefault();
  } else {
  }
});

const security = document.getElementById("security");
security.addEventListener("keydown", function (eve) {
  console.log(eve.keyCode);
  if (
    (eve.keyCode >= 65 && eve.keyCode <= 90) ||
    (eve.keyCode >= 97 && eve.keyCode <= 122)
  ) {
    eve.preventDefault();
  } else {
  }
});

const cardName = document.getElementById("cardName");
cardName.addEventListener("keydown", function (eve) {
  console.log(eve.keyCode);
  if (eve.keyCode >= 48 && eve.keyCode <= 57) {
    eve.preventDefault();
  } else {
  }
});

cardName.value = users[0].firstName + " " + users[0].lastName;

const governorate = document.getElementById("Governorate");
var option1 = document.createElement("option");
option1.setAttribute("value", "Sohag");
option1.innerHTML = "Sohag";
governorate.appendChild(option1);

var option2 = document.createElement("option");
option2.setAttribute("value", "Assiut");
option2.innerHTML = "Assiut";
governorate.appendChild(option2);

var option3 = document.createElement("option");
option3.setAttribute("value", "Qena");
option3.innerHTML = "Qena";
governorate.appendChild(option3);

const city = document.getElementById("City");
var allCities = [
  {
    governorate: "Sohag",
    cities: [
      "Sohag",
      "Tema",
      "Tahta",
      "El-Maragha",
      "Girga",
      "El-Munshaa",
      "Al-Blina",
    ],
  },
  {
    governorate: "Assiut",
    cities: ["Assiut", "Sedfa", "Al-Fath", "Abo Teag", "Al-Qousia", "Abnoub"],
  },
  {
    governorate: "Qena",
    cities: [
      "Qena",
      "Farshot",
      "Deshna",
      "Abu Tesht",
      "Naga Hamadi",
      "Qous",
      "Quft",
    ],
  },
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
var post = document.createElement("input");
post.setAttribute("id", "post");
post.setAttribute("type", "text");
post.setAttribute("placeHolder", "Postal Code");

const payDiv = document.getElementById("payment");
const check = document.getElementById("check");

check.addEventListener("change", function () {
  if (check.checked) {
    payDiv.style.display = "none";
  } else {
    payDiv.style.display = "block";
  }
});
