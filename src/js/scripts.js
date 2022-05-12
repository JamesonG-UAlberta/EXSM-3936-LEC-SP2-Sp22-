const theInput = document.querySelector("input");
const theButton = document.querySelector("button");
const theList = document.querySelector("ul");

function runThisWhenWeClickTheButton() {
    const newLI = document.createElement("li");
    newLI.innerText = theInput.value;
    theList.appendChild(newLI);
}

theButton.addEventListener("click", runThisWhenWeClickTheButton);

/*
Try to add:

-Validation to only insert a li if the text field is not whitespace.
-Clear the text field after each addition.
-Add a second button to clear the list.
*/