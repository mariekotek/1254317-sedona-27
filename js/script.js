var button = document.querySelector(".search-hotel-button");
var popup = document.querySelector(".search-form");
var close = document.querySelector(".search-hotel-button");
var form = popup.querySelector("form");
var arriveDate = popup.querySelector("[date]");

button.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("form-show");
	arriveDate.focus();
 });

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("form-show");
 });

form.addEventListener("submit", function (evt) {
    if (!arrial-date || !departure-date.value) {
      evt.preventDefault();
      console.log("Введите даты");
    }
  });
 
 window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
      }
    }
  });