  var button = document.querySelector(".button-form");
  var popup = document.querySelector(".booking");

  var checkin = popup.querySelector("[name=check-in-date]");
  var checkout = popup.querySelector("[name=check-out-date]");
  var kids = popup.querySelector("[name=kids]");
  var adults = popup.querySelector("[name=adults]");

    button.addEventListener("click", function (evt) {
    evt.preventDefault();
        if (popup.classList.contains("form-show")) {
      popup.classList.remove("form-error");
      popup.classList.remove("form-show");

    }
    else {
    popup.classList.remove("form-error");
    popup.classList.add("form-show");

    }
  });

    window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("form-show")) {
        popup.classList.remove("form-show");
        popup.classList.remove("form-error");
      }
    }

  });
    popup.addEventListener("submit", function (evt) {
    if (!checkin.value || !checkout.value || !kids.value || !adults.value) {
      evt.preventDefault();
      popup.classList.remove("form-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("form-error");
    }
  });
