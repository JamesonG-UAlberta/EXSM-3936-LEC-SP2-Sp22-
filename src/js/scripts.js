const theInput = document.querySelector("input");
const addButton = document.querySelector("button:first-of-type");
const clearButton = document.querySelector("button:last-of-type");
const theList = document.querySelector("ul");
const errorMessage = document.querySelector("#error");
theInput.focus();

function addButtonClick() {
    if (theInput.value.trim() !== "") {
        errorMessage.classList.add("hidden");
        const newLI = document.createElement("li");
        const newRemoveButton = document.createElement("button");

        // Set up LI
        newLI.innerHTML = '<input type="checkbox">' + theInput.value.trim();

        // Set up Button
        newRemoveButton.innerText = "Remove";
        newRemoveButton.addEventListener("click", () => {
            newLI.remove();
        });

        // Add Button to LI
        newLI.appendChild(newRemoveButton);

        // Add LI to List
        theList.appendChild(newLI);

        // Reset Input
        theInput.value = "";
        theInput.focus();
    } 
    else 
    {
        errorMessage.classList.remove("hidden");
    }
}
function clearButtonClick() {
    theList.innerHTML = "";
}

addButton.addEventListener("click", addButtonClick);
clearButton.addEventListener("click", clearButtonClick);

/*
Try to add:
-Add some styling to make it "pretty".

Challenge:
-Add a separate list for completed items.
    -When a checkbox is ticked, move the item to the completed list. 
    -When a checkbox is unticked, move the item back to the incomplete list.
-Add a sort button that will sort both lists alphabetically.
    -If it's already alphabetical, sort it in reverse alphabetical.
*/
