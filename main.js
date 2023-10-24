const mainContainer = document.querySelector(".main-container")
const thanksContainer = document.querySelector(".thank-you")
const submitButton = document.getElementById("Submit")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".num")
const attribution = document.querySelector(".attribution")

submitButton.addEventListener("click" , () => {
    thanksContainer.classList.remove("hidden")
    mainContainer.style.display = "none"
    attribution.style.display = "none"
});

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
});





