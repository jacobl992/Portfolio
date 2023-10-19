const mysteryBox = document.querySelector(".mystery");
const questionMark = document.querySelector(".mystery-qmark");
const rab = new Image();
let buttonCount = 1;
const nextButton = document.createElement("button");
nextButton.classList.add("next-button")


questionMark.addEventListener("click", () => {
    rab.src = "images/rabSmall.jpeg";
    rab.classList.add("rab-img");
    rab.style.display = "block";
    questionMark.style.display = "none";
    mysteryBox.appendChild(rab);
    mysteryBox.appendChild(nextButton)
    nextButton.innerText = "Next";
});

nextButton.addEventListener("click", () => {
    buttonCount++;
    if (buttonCount === 2) {
        rab.src = "images/cowMedium.jpeg";
    } else if (buttonCount === 3) {
    rab.src = "images/sealMedium.jpeg";
    } else  if (buttonCount === 4) {
        rab.src = "images/rabSmall.jpeg";
        buttonCount = 1;
    }
})


