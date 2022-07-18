const productNameInputElement = document.querySelector("#product-name");
const remainingCharsElement = document.querySelector("#remaining-chars");

const maxAllowedChar = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
  const enterText = event.target.value;
  const enterTextLength = enterText.length;

  const remainingCharacters = maxAllowedChar - enterTextLength;

  remainingCharsElement.textContent = remainingCharacters;
}

productNameInputElement.addEventListener("input", updateRemainingCharacters);