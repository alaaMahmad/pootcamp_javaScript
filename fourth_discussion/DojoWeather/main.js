function cityAlert(element) {
  alert("Loading weather for " + element.innerText);
}

function cToF(temp) {
  return Math.round(temp * 1.8 + 32);
}

function fToC(temp) {
  return Math.round((temp - 32) / 1.8);
}

function convertTemp() {
  var select = document.getElementById("temp-select");
  var temps = document.querySelectorAll(".temp");

  for (var i = 0; i < temps.length; i++) {
    var currentTemp = parseInt(temps[i].innerText);

    if (select.value === "f") {
      temps[i].innerText = cToF(currentTemp) + "°";
    } else {
      temps[i].innerText = fToC(currentTemp) + "°";
    }
  }
}

function acceptCookies() {
  document.getElementById("cookie-box").remove();
}
