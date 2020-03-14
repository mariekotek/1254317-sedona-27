var button = document.querySelector(".search-hotel-button");
var popup = document.querySelector(".search-form");
var close = document.querySelector(".search-hotel-button");
var form = popup.querySelector("form");
var arrival = popup.querySelector(".arrival");
var departure = popup.querySelector(".departure");

var minus = popup.querySelector(".btn-minus");
var plus = popup.querySelector(".btn-plus");
var number = popup.querySelector(".number-of");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }

popup.classList.add("form-hide");

button.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.toggle("form-hide");
  if (storage) {
      arrival.value = storage;
      departure.focus();
    } else {
      arrival.focus();
    }
 });

form.addEventListener("submit", function (evt) {
    if (!arrival.value || !departure.value) {
      evt.preventDefault();
      popup.offsetWidth = popup.offsetWidth;
      console.log("Введите даты");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("arrival", arrial.value);
      }
    }
  });
 
 window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("form-hide")) {
        popup.classList.remove("form-hide");
      }
    }
  });