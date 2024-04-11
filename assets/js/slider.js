const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".slider-nav button"); 
const firstCardWidth=carousel.querySelector(".card").offsetWidth;
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.id === "prev") {
            carousel.scrollLeft -= firstCardWidth;
        }
         else {
            carousel.scrollLeft += firstCardWidth;
        }
    });
});


const carousell = document.querySelector(".carousell");
const arrowBtn = document.querySelectorAll(".slider-nav button");
const firstCard = carousell.querySelector(".card").offsetWidth;

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousell.scrollLeft += btn.id === "prev" ? -firstCard : firstCard;
    });
});


