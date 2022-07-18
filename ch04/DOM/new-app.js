let pElement = document.querySelector("p");
function changePText () {
  pElement.textContent = "Clicked!"
}
pElement.addEventListener("click", changePText);

let inputElement = document.querySelector("input");
function retrieveUserInput(event) {
  // let enterText = inputElement.value;
  let enterText = event.data;
  console.log(enterText);
}
inputElement.addEventListener("input", retrieveUserInput);