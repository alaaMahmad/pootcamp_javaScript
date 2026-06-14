function onclicked(id) {
  const num_likes = document.getElementById(id);
  num_likes.innerText = parseInt(num_likes.innerText) + 1;
}
