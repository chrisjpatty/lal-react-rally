function getButton() {
  return document.querySelector("button");
}

function makeButtonRed() {
  getButton().style.background = "red";
}

function attachClickEvent() {
  getButton().addEventListener("click", makeButtonRed);
}

attachClickEvent();
