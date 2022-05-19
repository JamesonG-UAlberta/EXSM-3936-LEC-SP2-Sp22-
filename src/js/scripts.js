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
    // Maps are "dictionaries" with a unique key and a value. The value can be data, an object or even an anonymous method (as below).
    const keyEvents = new Map([
        // key               value
        ["Enter",   () => {addButton.click();}],
        ["Delete",  () => {if (document.activeElement !== theInput) document.querySelector("ul>li:last-of-type").remove();}]  
    ]);

    // Note that the Map (capital) class is different from the map (lowercase) method used for arrays.
    const myArray = [1, 5, 10, 12];
    myArray.map((x) => x+1);

    // Also that the Set (capital) class is different from the set (lowercase) method used for Maps.
    const mySet = new Set();
    keyEvents.set("Escape", () => {return;});

    // In the context of for-of loops, key and value are typically used (k,v). I used action here to represent a parameterless function (k,a).
    for (const [key,action] of keyEvents) if (eventArgs.key == key) action();
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
