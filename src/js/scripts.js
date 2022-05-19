const theInput = document.querySelector("input");
const addButton = document.querySelector("button:first-of-type");
const clearButton = document.querySelector("button:last-of-type");
const theList = document.querySelector("ul");
theInput.focus();

addButton.addEventListener("click", eventArgs => {
    eventArgs.preventDefault();
    if (theInput.value.trim() !== "") {
        const newLI = document.createElement("li");
        newLI.innerText = theInput.value.trim();
        theInput.value = "";
        theList.appendChild(newLI);
        theInput.focus();
    }
});
clearButton.addEventListener("click", () => {
    theList.innerHTML = "";
});
document.addEventListener("keydown", eventArgs => {
    switch (eventArgs.key) {
        case "Enter":
            // Emulate a click on the add button if the key was Enter.
            addButton.click();
            break;
        case "Delete":
            if (document.activeElement !== theInput) {
                document.querySelector("ul>li:last-of-type").remove();
            }
            break;
    }
});

/*
[Week 02 Challenges]

Try to add:

-A remove button to each item (styling your choice).
-Display an error when the user tries to add a blank field, hide the error on the next successful add.
-Add checkboxes to each item.
-Add some styling to make it "pretty".

Challenge:
-Add a separate list for completed items.
    -When a checkbox is ticked, move the item to the completed list. 
    -When a checkbox is unticked, move the item back to the incomplete list.
-Add a sort button that will sort both lists alphabetically.
    -If it's already alphabetical, sort it in reverse alphabetical.
*/
