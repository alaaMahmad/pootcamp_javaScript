function changeName() {
  var name = document.querySelector(".name");
  var image = document.querySelector(".avatar-img");

  if (name.innerText == "Alaa Ahmad") {
    name.innerText = "Bara Salah";
    image.src = "./images/another_avatar.jpg";
  } else {
    name.innerText = "Alaa Ahmad";
    image.src = "./images/avatar.jpg";
  }
}

function removeConnection(id) {
  var Connection = document.getElementById(id);
  Connection.remove();
  var num_of_requsets = document.getElementById("num_of_requsets");
  num_of_requsets.innerText = parseInt(num_of_requsets.innerText);
  if (num_of_requsets.innerText > 0) {
    num_of_requsets.innerText = num_of_requsets.innerText - 1;
  }
}

function addConnection(id) {
  removeConnection(id);
  var num_of_connection = document.getElementById("num_of_connection");
  num_of_connection.innerText = parseInt(num_of_connection.innerText) + 1;
}
