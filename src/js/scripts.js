const theInput = document.querySelector("input");
const theButton = document.querySelector("button");
const theList = document.querySelector("ul");
theInput.focus();

function runThisWhenWeClickTheButton() {
    if (theInput.value.trim() !== "") {
        const newLI = document.createElement("li");
        newLI.innerText = theInput.value.trim();
        theInput.value = "";
        theList.appendChild(newLI);
        theInput.focus();
    }
}

theButton.addEventListener("click", runThisWhenWeClickTheButton);

/*
Try to add:

-Validation to only insert a li if the text field is not whitespace.
-Clear the text field after each addition.
-Add a second button to clear the list.
*/