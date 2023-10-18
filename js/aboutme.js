const mysteryBox = document.querySelector(".mystery");
const questionMark = document.querySelector(".mystery-qmark");
const rab = new Image();
rab.src = "../images/rab.jpg";
rab.classList.add("rab-img");

questionMark.addEventListener("click", () => {
    questionMark.style.display = "none";
    mysteryBox.appendChild(rab);
});