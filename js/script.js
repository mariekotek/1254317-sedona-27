var button = document.querySelector(".search-hotel-button");
var popup = document.querySelector(".search-form");
var close = document.querySelector(".search-hotel-button");
var form = popup.querySelector("form");
var arrival = popup.querySelector(".arrival");
var departure = popup.querySelector(".departure");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }

button.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.toggle("form-show");
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
      if (popup.classList.contains("form-show")) {
        popup.classList.remove("form-show");
      }
    }
  });