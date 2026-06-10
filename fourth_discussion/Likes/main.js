function onclicked(id) {
  const counterNode = document.getElementById(id);
  counterNode.innerText = parseInt(counterNode.innerText) + 1;
}
