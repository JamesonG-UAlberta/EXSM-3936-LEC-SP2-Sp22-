const firstParagraph = document.querySelector("p:first-of-type");
const theButton = document.querySelector("button");

function runThisWhenWeClickTheButton() {
    if (firstParagraph.classList.contains("important"))
    {
        firstParagraph.classList.remove("important");
    }
    else
    {
        firstParagraph.classList.add("important");
    }
}

theButton.addEventListener("click", runThisWhenWeClickTheButton);