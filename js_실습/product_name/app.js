const productNameInputElement = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");

const maxAllowedChars = productNameInputElement.maxLength;

function updateRemaingCharacters(event) {
  const enteredtext = event.target.value;
  const enteredTextLength = enteredtext.length;

  const remainingCharacters = maxAllowedChars - enteredTextLength;

  remainingCharsElement.textContent = remainingCharacters;
}

productNameInputElement.addEventListener("input", updateRemaingCharacters);
