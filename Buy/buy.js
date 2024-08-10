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

const payDiv = document.getElementById("payment")
const check = document.getElementById("check")

check.addEventListener("change", function () {
    if (check.checked) {
        payDiv.style.display = "none"
    } else {
        payDiv.style.display = "block"
    }
  });
